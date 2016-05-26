module.exports = {
  gulp: require('gulp'),
  webapp: {
    files: {
      order: {
        before: [
          /jquery\.js/,
          /bootstrap\.js/,
        ],
      },
    },

    bundles: {
      app: {
        hasHMR: true,
      }
    }
  },

  plugins: {
    'parched-sass': {
      indentedSyntax: true,
    }
  }
};
