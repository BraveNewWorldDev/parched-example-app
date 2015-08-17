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
  },

  plugins: {
    order: {
      after: [
        'parched-imagemin',
      ],
    },

    'parched-svg2png': {
      outputCSS: 'styles/_sprites.sass',
      usePlaceholderSelectors: false,
    },

    'parched-webfont': {
      outputCSS: 'styles/_glyphs.sass',
      usePlaceholderSelectors: false,
    },

    'parched-sass': {
      indentedSyntax: true,
    }
  }
};
