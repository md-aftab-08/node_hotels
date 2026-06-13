const express = require("express");
const app = express();
// app.use(express.json());

const db = require('./db');
const bodyParser = require('body-parser');
app.use(bodyParser.json());


const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello, Welcome to our Hotel");
});

const personRoutes = require('./routes/personRoutes');
const menuItem = require('./routes/menuItems');

app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes)
app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
