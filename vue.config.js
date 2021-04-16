module.exports = {
  chainWebpack(config) {
    config.plugin("html").tap(options => {
      options[0].title = "Vue 3 Template";
      return options;
    });
  },
};
