const express = require('express');
const { uuid, isUuid } = require('uuidv4')

const app = express();

app.use(express.json());

const projects = [];

function logRequests(request, response, next) {
  const { method, url } = request;

  const logLabel = `[${method.toUpperCase()}] ${url}`;

  console.time(logLabel);

  next();

  console.timeEnd(logLabel);
}

function validateProjectId(request, response, next) {
  const { id } = request.params;

  if (!isUuid(id)) {
    return response.status(400).json({ error: 'Invalid project ID.' });
  }

  return next();
}

app.use(logRequests);
app.use('/projects/:id', validateProjectId);

app.get('/projects', (req, res) => {
  // Query params
  const { title } = req.query; // os parâmetros da requisição inseridos no insomnia

  const results = title
    ? projects.filter(project => project.title.includes(title))
    : projects;

  return res.json(results);
});

app.post('/projects', (req, res) => {
  const { title, owner } = req.body;

  const project = {id: uuid(), title, owner }

  projects.push(project);

  return res.json(project);
});

app.put('/projects/:id', (req, res) => {
  // Routes params
  const { id } = req.params;
  const { title, owner } = req.body;

  const projectIndex = projects.findIndex(project => project.id === id);

  if (projectIndex < 0) {
    return res.status(400).json({ error: 'Project not found.' })
  }

  const project = {
    id,
    title,
    owner,
  };

  projects[projectIndex] = project;

  return res.json(project);
});

app.delete('/projects/:id', (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.findIndex(project => project.id === id);

  if (projectIndex < 0) {
    return res.status(400).json({ error: 'Project not found.' })
  }

  projects.splice(projectIndex, 1);

  return res.status(204).send();
});

app.listen(3333, () => {
  console.log('Server started => localhost:3333');
});
