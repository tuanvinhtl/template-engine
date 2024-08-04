// data.js for template-1
const getMetadata = () => {
  const headers = ["Header 1", "Header 2", "Header 3"];
  const rows = [
    ["Data 1", "Data 2", "Data 3"],
    ["Data 4", "Data 5", "Data 6"],
    // Add more rows as needed
  ];
  return { headers, rows };
};

module.exports = getMetadata;
