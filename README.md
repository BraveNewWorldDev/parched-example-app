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
