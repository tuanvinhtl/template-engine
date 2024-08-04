const path = require("path");
const readCss = require("./readCss");
const renderEjs = require("./renderEjs");
const saveHtml = require("./saveHtml");

const renderEngine = (
  templateId,
  templatePath,
  cssPath,
  datasource,
  callback
) => {
  const outputPath = path.join(__dirname, "..", "output", `${templateId}.html`);

  // Read the CSS file content
  readCss(cssPath, (err, cssContent) => {
    if (err) {
      return callback(err);
    }

    // Render the EJS template to a string
    renderEjs(
      templatePath,
      { datasource, templateId, cssContent },
      (err, str) => {
        if (err) {
          return callback(err);
        }

        // Save the rendered HTML to a file
        saveHtml(outputPath, str, (err) => {
          if (err) {
            return callback(err);
          }
          callback(null, str);
        });
      }
    );
  });
};

module.exports = renderEngine;
