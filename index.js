const express = require('express');
const app = express();
const port = 8067;


app.get('/hello', (req, res) => {
  res.send('Hello Express JS');
});


app.get('/user', (req, res) => {
  const firstname = req.query.firstname || 'David';
  const lastname = req.query.lastname || 'Lubwama';
  res.json({ firstname, lastname });
});

app.post('/user/:firstname/:lastname', (req, res) => {
  const { firstname, lastname } = req.params;
  res.json({ firstname, lastname });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

