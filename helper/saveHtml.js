const fs = require("fs");
const path = require("path");
const ensureDirectory = require("./ensureDirectory");

const saveHtml = (outputPath, htmlContent, callback) => {
  const outputDir = path.dirname(outputPath);
  ensureDirectory(outputDir);

  fs.writeFile(outputPath, htmlContent, (err) => {
    if (err) {
      return callback(err);
    }
    callback(null);
  });
};

module.exports = saveHtml;
