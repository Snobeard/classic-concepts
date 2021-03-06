'use strict';

require('dotenv').config();

const express = require('express');
const app = express();
const favicon = require('serve-favicon');

// Static mounts
app.use(express.static(`${__dirname}/build`));

// Serve index.html
app.get('*', (request, response) => {
  response.sendFile(`${__dirname}/build/index.html`);
});

app.listen(process.env.PORT, () => {
  console.log(`Server has started on PORT: ${process.env.PORT}`);
});