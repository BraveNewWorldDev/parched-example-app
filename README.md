parched-example-app
===================

An example app built using [parched-tasks-webapp](https://github.com/bravenewworlddev/parched-tasks-webapp).

```bash
# Clone the main repository
git clone https://github.com/raisedmedia/parched-example-app.git
cd parched-example-app/
npm install
bower install

# Run clean task
./node_modules/.bin/gulp parched-clean

# Run build task
./node_modules/.bin/gulp parched-build

# Run build task in "production"
# aka minify, hard errors
NODE_ENV=production ./node_modules/.bin/gulp parched-build

# Clean, build, and watch
./node_modules/.bin/gulp parched-clean && ./node_modules/.bin/gulp parched-watch
```

Features
--------

- Bower
- Sass (in `app/styles/` and `vendor/styles/`)
- Ordering of any concat'd files via before and after properties
- Minify javascript in production
- Minify css in production
- Error hard in production
- Use browserSync in development
- Stay out of your way
- Allow you to intervene at pretty much any point
