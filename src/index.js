const express = require('express');

const app = express();

app.get('/projects', (req, res) => {
  // return res.send('Teste de rota ok');
  return res.json({ message: 'Essa é a page \'projects\'' })
})

app.listen(3333, () => {
  console.log('Server started => localhost:3333')
});
