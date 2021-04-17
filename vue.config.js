module.exports = {
  css: {
    loaderOptions: {
      scss: {
        sassOptions: {
          includePaths: ["./node_modules"],
        },
      },
    },
  },

  chainWebpack(config) {
    config.plugin("html").tap(options => {
      options[0].title = "Vue 3 Template";
      return options;
    });
  },
};
