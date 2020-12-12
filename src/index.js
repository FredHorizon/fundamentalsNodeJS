const express = require('express');

const app = express();

app.use(express.json());

app.get('/projects', (req, res) => {
  // Query params
  const { title, owner } = req.query; // os parâmetros da requisição inseridos no insomnia

  console.log(title);
  console.log(owner);

  return res.json({ message: 'Essa é a page \'projects\'' });
});

app.post('/projects', (req, res) => {
  const { title, owner } = req.body;

  console.log(title);
  console.log(owner);

  return res.json([
    'Projeto 1',
    'Projeto 2',
  ]);
});

app.put('/projects/:id', (req, res) => {
  // Routes params
  const { id } = req.params;

  console.log(id);

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
