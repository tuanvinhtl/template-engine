const path = require("path");
const getMetadata = require("./data");
const renderEngine = require("@renderEngine");

const renderTemplate = (templateId, callback) => {
  const datasource = getMetadata();
  const templatePath = path.join(__dirname, "index.ejs");
  const cssPath = path.join(__dirname, "styles.css");

  renderEngine(templateId, templatePath, cssPath, datasource, callback);
};

module.exports = renderTemplate;
