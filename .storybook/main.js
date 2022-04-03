module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-scss",
    ""
  ],
  "framework": "@storybook/react",
  "staticDirs": ['../public'],
  webpackFinal: async (config) => {
    for (let rule of config.module.rules) {
      if (rule.use && rule.use.length > 0) {
        for (let use of rule.use) {
          if (use.loader && use.loader.includes("/css-loader/")) {
            use.options = {
              ...use.options,
              url: (url, resourcePath) => !url.startsWith("/"),
            };
          }
        }
      }
    }
    return config;
  },
}