const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 4001;

// Підключення маршрутів
const userRoutes = require('./routes/user');
const bookRoutes = require('./routes/book');
const errorRoutes = require('./routes/error');

// Встановлення каталогу статичних файлів
app.use(express.static(path.join(__dirname, 'public')));

// Встановлення двигуна для шаблонів
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Налаштування сесій
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true
}));

// Використання bodyParser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Підключення маршрутів до програми
app.use('/user', userRoutes);
app.use('/books', bookRoutes);
app.use('*', errorRoutes);

// Прослуховування порту
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});