// server/models/Flashcard.js
const connection = require('../config/db');

const Flashcard = {
    getAll: (callback) => {
        connection.query('SELECT * FROM flashcards', callback);
    },
    add: (data, callback) => {
        connection.query('INSERT INTO flashcards SET ?', data, callback);
    },
    update: (id, data, callback) => {
        connection.query('UPDATE flashcards SET ? WHERE id = ?', [data, id], callback);
    },
    delete: (id, callback) => {
        connection.query('DELETE FROM flashcards WHERE id = ?', id, callback);
    },
};

module.exports = Flashcard;
