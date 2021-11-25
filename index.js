const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

//home router
app.get('/api/v1/health', (req, res) => {
    res.status(200).send('form api is running and healthy.');
});


//default error routers
app.use((req, res) => {
    res.status(404).send('404 route not found!');
});

app.listen(4000, () => {
    console.log('server running on 4000 PORT');
});

module.exports = { app };