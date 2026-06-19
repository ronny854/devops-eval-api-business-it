const express = require('express');

const app = express();
const lintFailureForPipelineTest = true;

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/greet', (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ error: 'name query param is required' });
  }

  return res.json({ message: `Hello, ${name}!` });
});

module.exports = app;
