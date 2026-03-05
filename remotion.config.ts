import path from "path";
import webpack from "webpack";
import { Config } from "@remotion/cli/config";
import { enableTailwind } from "@remotion/tailwind-v4";

Config.overrideWebpackConfig((currentConfiguration) => {
  const projectRoot = process.cwd();

  const config = {
    ...currentConfiguration,
    resolve: {
      ...currentConfiguration.resolve,
      alias: {
        ...(currentConfiguration.resolve?.alias ?? {}),
        // Path alias: @/ → ./src/
        "@": path.resolve(projectRoot, "src"),
      },
    },
    plugins: [
      ...(currentConfiguration.plugins ?? []),
      // Replace AnimatedText with frame-synced version for Remotion
      new webpack.NormalModuleReplacementPlugin(
        /components\/shared\/AnimatedText/,
        path.resolve(projectRoot, "remotion", "overrides", "AnimatedText.tsx")
      ),
      // Replace EndingQuote (uses CSS animation with opacity:0)
      new webpack.NormalModuleReplacementPlugin(
        /components\/slides\/EndingQuote/,
        path.resolve(projectRoot, "remotion", "overrides", "EndingQuote.tsx")
      ),
      // Replace EndingContact (uses import.meta.env.BASE_URL for QR code image)
      new webpack.NormalModuleReplacementPlugin(
        /components\/slides\/EndingContact/,
        path.resolve(projectRoot, "remotion", "overrides", "EndingContact.tsx")
      ),
    ],
  };

  return enableTailwind(config);
});
