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
gulp webapp-clean

# Run build task
gulp webapp-build-all

# Run build task in "production"
NODE_ENV=production gulp webapp-build-all

# Clean, build, and watch
gulp webapp-clean && gulp webapp-build-all webapp-watch
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
