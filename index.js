const express = require('express');
const path = require('path');

const app = express();
const port = 4000;

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// Define a route handler for the landing page
app.get('/', (req, res) => {
  res.sendFile(__dirname, +'/index.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
