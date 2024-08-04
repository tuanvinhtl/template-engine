const fs = require("fs");

const readCss = (cssPath, callback) => {
  fs.readFile(cssPath, "utf8", (err, cssContent) => {
    if (err) {
      console.log(err);
      return callback(err);
    }
    callback(null, cssContent);
  });
};

module.exports = readCss;
