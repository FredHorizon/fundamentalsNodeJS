const express = require('express');

const app = express();

app.get('/projects', (req, res) => {
  // return res.send('Teste de rota ok');
  return res.json({ message: 'Essa é a page \'projects\'' });
});

app.post('/projects', (req, res) => {
  return res.json([
    'Projeto 1',
    'Projeto 2',
  ]);
});

app.put('/projects/:id', (req, res) => {
  return res.json([
    'Projeto 3',
    'Projeto 2',
  ]);
});

app.delete('/projects/:id', (req, res) => {
  return res.json([
    'Projeto 2',
  ]);
});

app.listen(3333, () => {
  console.log('Server started => localhost:3333');
});
