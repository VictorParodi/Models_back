const express = require('express');
const app = express();
const placesRouter = require('./routes/places');

app.use('/api/places', placesRouter);

const port = process.env.PORT || 3001;

app.listen(port, console.log('Application running'));