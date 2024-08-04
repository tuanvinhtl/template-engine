const ejs = require("ejs");

const renderEjs = (templatePath, data, callback) => {
  ejs.renderFile(templatePath, data, (err, str) => {
    if (err) {
      return callback(err);
    }
    callback(null, str);
  });
};

module.exports = renderEjs;
