const lessLoader = {
  loader: "less-loader",
  options: {
    lessOptions: {
      javascriptEnabled: true,
    },
  },
};
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.theme\.(less|css)$/i,
      use: [
        {
          loader: "style-loader",
          options: { injectType: "lazyStyleTag" },
        },
        "css-loader",
        lessLoader,
      ],
    });
    config.module.rules.push({
      test: /\.(less|css)$/,
      exclude: /\.theme\.(less|css)$/i,
      use: ["style-loader", "css-loader", lessLoader],
    });

    config.module.rules.push({
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
    });
    return config;
  },
};
