const express = require('express');
const router = express.Router();

router.get('/book/list', (req, res) => {
    const books = [
        { id: 11111, name: 'Book1' },
        { id: 22222, name: 'Book2' },
    ];
    res.render('books', { books: books });
});

module.exports = router;