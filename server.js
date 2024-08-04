const express = require("express");
const path = require("path");
const app = express();

require("module-alias/register");

// Serve static files from the templates directory
app.use("/templates", express.static(path.join(__dirname, "templates")));

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Define a route with dynamic template
app.get("/:templateId", (req, res) => {
  const templateId = req.params.templateId;
  try {
    const renderTemplate = require(`./templates/${templateId}/render`);
    renderTemplate(templateId, (err, html) => {
      if (err) {
        return res.status(500).send("Error rendering template");
      }
      res.send(html);
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Error loading template");
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
