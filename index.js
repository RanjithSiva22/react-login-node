const express = require('express');
const users = require('./routes/index');
const app = express();

/** importing the connection file */
require('./connection/index');

app.use(express.json());
app.use('/api/users', users);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));