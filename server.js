const express = require('express');
const helmet = require('helmet');
const app = express();
const port = 80;

app.use(helmet());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Secure Application Deployed!');
});

app.listen(port, () => {
  console.log(`Server running securely at http://localhost:${port}`);
});
