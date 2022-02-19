'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    res.status(404);
    res.type('html').send('<h1>Not Found</h1><br /><h2>Please try again</h2>');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
