// Read the CSS file content
fs.readFile(cssPath, "utf8", (err, cssContent) => {
  if (err) {
    console.log(err);
    return callback(err);
  }

  // Render the EJS template to a string
  ejs.renderFile(
    templatePath,
    { datasource, templateId, cssContent },
    (err, str) => {
      if (err) {
        return callback(err);
      }

      // Save the rendered HTML to a file
      fs.writeFile(outputPath, str, (err) => {
        if (err) {
          return callback(err);
        }
        callback(null, str);
      });
    }
  );
});
