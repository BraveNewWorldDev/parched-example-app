var gulp = require('gulp');
var Parched = require('parched');

Parched.setup({
  gulp: gulp,

  webapp: {
    files: {
      order: {
        before: [
          /jquery\.js/,
          /bootstrap\.js/
        ]
      }
    }
  },

  plugins: {
    'parched-svg2png': {
      outputCSS: 'app/styles/_sprites.sass',
      usePlaceholderSelectors: false
    },

    'parched-webfont': {
      outputCSS: 'app/styles/_glyphs.sass',
      usePlaceholderSelectors: false
    }
  }
});
