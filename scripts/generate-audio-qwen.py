#!/usr/bin/env python3
"""
Generate TTS audio for all slides using local Qwen3-TTS.

Run with the qwen-voice venv Python:
  /Users/yzlabmac/agentspace/voiceai/qwen_voice_skill/cli/.venv/bin/python scripts/generate-audio-qwen.py

Or via npm:
  npm run audio:generate

Input:  scripts/narration/scripts.json
Output: public/audio/slide-00.wav ... slide-40.wav
        public/audio/durations.json
"""

import gc
import json
import os
import shutil
import sys
import time
import warnings
import wave
from pathlib import Path

# ── Configuration ──────────────────────────────────────────────────────────────

VOICE = "dylan"  # Chinese male voice
EMOTION = "Normal tone"
SPEED = 1.0
MODE = "custom"

QWEN_ROOT = "/Users/yzlabmac/agentspace/voiceai/qwen_voice_skill"
PROJECT_ROOT = Path(__file__).resolve().parent.parent
SCRIPTS_PATH = PROJECT_ROOT / "scripts" / "narration" / "scripts.json"
AUDIO_DIR = PROJECT_ROOT / "public" / "audio"

# ── Setup paths ────────────────────────────────────────────────────────────────

sys.path.insert(0, QWEN_ROOT)
os.environ["PYTHONPATH"] = QWEN_ROOT
os.environ["TOKENIZERS_PARALLELISM"] = "false"


def get_wav_duration(filepath: str) -> float:
    """Get duration of a WAV file in seconds."""
    with wave.open(filepath, "r") as wf:
        return wf.getnframes() / float(wf.getframerate())


def main():
    # Load narration scripts
    if not SCRIPTS_PATH.exists():
        print(f"Error: {SCRIPTS_PATH} not found.")
        sys.exit(1)

    with open(SCRIPTS_PATH, "r", encoding="utf-8") as f:
        scripts = json.load(f)

    print(f"Found {len(scripts)} slides to generate audio for.")
    print(f"Voice: {VOICE}, Mode: {MODE}, Speed: {SPEED}")
    print(f"Output: {AUDIO_DIR}/")
    print()

    AUDIO_DIR.mkdir(parents=True, exist_ok=True)

    # ── Load model ONCE ────────────────────────────────────────────────────────
    from core.engine import MODEL_REGISTRY, get_smart_path

    models_dir = os.path.join(QWEN_ROOT, "models")
    folder_name = MODEL_REGISTRY[MODE]
    model_path = get_smart_path(folder_name, models_dir)

    if model_path is None:
        print(f"Error: Model not found: '{folder_name}' in '{models_dir}'")
        print(
            f"Download it with: huggingface-cli download mlx-community/"
            f"{folder_name} --local-dir {models_dir}/{folder_name}"
        )
        sys.exit(1)

    print(f"Loading model: {folder_name} ...")
    with warnings.catch_warnings():
        warnings.simplefilter("ignore")
        from mlx_audio.tts.utils import load_model

        model = load_model(model_path)
    print("Model loaded!\n")

    # ── Generate audio for each slide ──────────────────────────────────────────
    from mlx_audio.tts.generate import generate_audio

    durations: list[float] = []

    for i, script in enumerate(scripts):
        slide_id = script["slideId"]
        text = script["text"]
        output_file = AUDIO_DIR / f"slide-{i:02d}.wav"

        print(f"[{i + 1:2d}/{len(scripts)}] {slide_id}: ", end="", flush=True)

        try:
            temp_dir = f"temp_slide_{i}_{int(time.time())}"

            generate_audio(
                model=model,
                text=text,
                voice=VOICE,
                instruct=EMOTION,
                speed=SPEED,
                output_path=temp_dir,
            )

            # Move generated WAV to final location
            source_file = os.path.join(temp_dir, "audio_000.wav")
            if os.path.exists(source_file):
                shutil.move(source_file, str(output_file))
            else:
                raise RuntimeError("audio_000.wav not found in temp directory")

            # Cleanup temp
            if os.path.exists(temp_dir):
                shutil.rmtree(temp_dir, ignore_errors=True)

            duration = get_wav_duration(str(output_file))
            durations.append(round(duration, 2))
            print(f"{duration:.1f}s")

        except Exception as e:
            print(f"ERROR: {e}")
            # Fallback: estimate ~4 chars/sec for Chinese
            estimated = len(text) / 4.0
            durations.append(round(estimated, 2))
            print(f"  Using estimated duration: {estimated:.1f}s")

            # Cleanup temp on error
            temp_dir_path = f"temp_slide_{i}_{int(time.time())}"
            if os.path.exists(temp_dir_path):
                shutil.rmtree(temp_dir_path, ignore_errors=True)

    # ── Free model memory ──────────────────────────────────────────────────────
    del model
    gc.collect()

    # ── Write durations.json ───────────────────────────────────────────────────
    durations_path = AUDIO_DIR / "durations.json"
    with open(durations_path, "w", encoding="utf-8") as f:
        json.dump(durations, f, indent=2)

    total_minutes = sum(durations) / 60
    print()
    print(f"Done! Generated {len(durations)} audio files.")
    print(f"Total duration: {total_minutes:.1f} minutes")
    print(f"Durations saved to: {durations_path}")


if __name__ == "__main__":
    main()
