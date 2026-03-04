#!/usr/bin/env python3
"""
Generate TTS audio for all slides using Edge TTS.

Dependencies: pip install edge-tts
Usage: python scripts/generate-audio.py

Input:  scripts/narration/scripts.json
Output: public/audio/slide-00.mp3 ... slide-40.mp3
        public/audio/durations.json
"""

import asyncio
import json
import os
import sys
from pathlib import Path

try:
    import edge_tts
except ImportError:
    print("Error: edge-tts not installed. Run: pip install edge-tts")
    sys.exit(1)

# Configuration
VOICE = "zh-CN-YunxiNeural"  # Young male voice, good for tech lectures
RATE = "+0%"  # Normal speed
VOLUME = "+0%"

PROJECT_ROOT = Path(__file__).resolve().parent.parent
SCRIPTS_PATH = PROJECT_ROOT / "scripts" / "narration" / "scripts.json"
AUDIO_DIR = PROJECT_ROOT / "public" / "audio"


async def generate_single(text: str, output_path: Path) -> float:
    """Generate TTS audio for a single slide. Returns duration in seconds."""
    communicate = edge_tts.Communicate(text, VOICE, rate=RATE, volume=VOLUME)
    await communicate.save(str(output_path))

    # Get duration using mutagen (if available) or estimate from file size
    try:
        from mutagen.mp3 import MP3
        audio = MP3(str(output_path))
        return audio.info.length
    except ImportError:
        # Fallback: estimate from edge_tts metadata
        # Average Chinese TTS speed: ~4 characters/second
        return len(text) / 4.0


async def main():
    # Load narration scripts
    if not SCRIPTS_PATH.exists():
        print(f"Error: {SCRIPTS_PATH} not found.")
        print("Create narration scripts first.")
        sys.exit(1)

    with open(SCRIPTS_PATH, "r", encoding="utf-8") as f:
        scripts = json.load(f)

    print(f"Found {len(scripts)} slides to generate audio for.")
    print(f"Voice: {VOICE}, Rate: {RATE}")
    print(f"Output: {AUDIO_DIR}/")
    print()

    # Ensure output directory exists
    AUDIO_DIR.mkdir(parents=True, exist_ok=True)

    durations: list[float] = []

    for i, script in enumerate(scripts):
        slide_id = script["slideId"]
        text = script["text"]
        output_file = AUDIO_DIR / f"slide-{i:02d}.mp3"

        print(f"[{i+1:2d}/{len(scripts)}] {slide_id}: ", end="", flush=True)

        try:
            duration = await generate_single(text, output_file)
            durations.append(round(duration, 2))
            print(f"{duration:.1f}s ✓")
        except Exception as e:
            print(f"ERROR: {e}")
            # Use estimated duration as fallback
            estimated = len(text) / 4.0
            durations.append(round(estimated, 2))
            print(f"  Using estimated duration: {estimated:.1f}s")

    # Write durations.json
    durations_path = AUDIO_DIR / "durations.json"
    with open(durations_path, "w", encoding="utf-8") as f:
        json.dump(durations, f, indent=2)

    total_minutes = sum(durations) / 60
    print()
    print(f"Done! Generated {len(durations)} audio files.")
    print(f"Total duration: {total_minutes:.1f} minutes")
    print(f"Durations saved to: {durations_path}")


if __name__ == "__main__":
    asyncio.run(main())
