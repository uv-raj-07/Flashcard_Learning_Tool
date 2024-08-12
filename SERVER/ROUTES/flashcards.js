// server/routes/flashcards.js
const express = require('express');
const router = express.Router();
const Flashcard = require('../models/Flashcard');

router.get('/', (req, res) => {
    Flashcard.getAll((err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
});

router.post('/', (req, res) => {
    Flashcard.add(req.body, (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
});

router.put('/:id', (req, res) => {
    Flashcard.update(req.params.id, req.body, (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
});

router.delete('/:id', (req, res) => {
    Flashcard.delete(req.params.id, (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
});

module.exports = router;
