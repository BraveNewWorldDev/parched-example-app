parched-example-app
===================

An example app built using parched-tasks-webapp.

```bash
# Clone the main repository
git clone https://github.com/raisedmedia/parched-example-app.git
cd parched-example-app/
npm install
bower install

# Run clean task
gulp parched-clean

# Run build task
gulp parched-build

# Run build task in "production"
# aka minify, hard errors
NODE_ENV=production gulp parched-build

# Clean, build, and watch
gulp parched-clean && gulp parched-watch
```

Features
--------

- Bower
- CoffeeScript (in `vendor/scripts/` and browserify)
- Jade (in `app/views/`, `vendor/views/` and browserify)
- Sass (in `app/styles/` and `vendor/styles/`)
- Ordering of any concat'd files via before and after properties
- Builds a webfont based on .svg files in `app/assets/glyphs/`
- Build both a retina and non-retina spritemap based on .svg files in `app/assets/sprites/`
- Minify javascript in production
- Minify css in production
- Error hard in production
- Use browserSync in development
- Stay out of your way
- Allow you to intervene at pretty much any point
