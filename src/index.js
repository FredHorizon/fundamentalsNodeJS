const express = require('express');

const app = express();

app.get('/projects', (req, res) => {
  // return res.send('Teste de rota ok');
  return res.json({ message: 'Teste rota com json.' })
})

app.listen(3333);
