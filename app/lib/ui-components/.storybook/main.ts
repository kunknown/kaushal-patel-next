import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: [
    "../**/*.mdx",
    "../atoms/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../molecules/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../organisms/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["..\\..\\..\\..\\public"],
};
export default config;
