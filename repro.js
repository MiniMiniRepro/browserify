var
  browserify = require("browserify"),
  fs = require("fs"),
  path = require("path"),
  fsOpts = {encoding: "utf8"};

browserify({
  entries: ["./src/entry"],
})
  .bundle()
  .pipe(fs.createWriteStream(path.join(__dirname, "dist", "actual.js"), fsOpts))
;
