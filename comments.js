// Create web server
const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// Create object
const commentsPath = path.join(__dirname, 'comments.json');

// GET comments
router.get('/', (req, res) => {
  fs.readFile(commentsPath, 'utf-8', (err, data) => {
    if (err) throw err;
    const comments = JSON.parse(data);
    res.json(comments);
  });
});

// POST comments
router.post('/', (req, res) => {
  const newComment = req.body;
  fs.readFile(commentsPath, 'utf-8', (err, data) => {
    if (err) throw err;
    const comments = JSON.parse(data);
    comments.push(newComment);
    fs.writeFile(commentsPath, JSON.stringify(comments), (err) => {
      if (err) throw err;
      res.json(comments);
    });
  });
});

// DELETE comments
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  fs.readFile(commentsPath, 'utf-8', (err, data) => {
    if (err) throw err;
    const comments = JSON.parse(data);
    const newComments = comments.filter(comment => comment.id !== id);
    fs.writeFile(commentsPath, JSON.stringify(newComments), (err) => {
      if (err) throw err;
      res.json(newComments);
    });
  });
});

module.exports = router;