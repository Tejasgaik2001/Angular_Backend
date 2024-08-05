const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

// Middleware to parse JSON
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Server is running on 300551 helljdjd');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
