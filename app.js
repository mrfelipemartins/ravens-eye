const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const socketIO = require('socket.io');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const requests = [];

app.get('/', (req, res) => {
    res.render('index', {
        requests
    });
});

app.post('/clear', (req, res) => {
    requests.length = 0;
    io.emit('clear_requests');
    res.status(200).send('All requests cleared.');
});

app.post('/webhook', (req, res) => {
    const timestamp = new Date();
    const request = {
        id: timestamp.getTime(),
        timestamp,
        method: req.method,
        headers: req.headers,
        body: req.body,
    };

    requests.unshift(request);
    io.emit('new_request', request);
    res.status(200).send('Webhook received.');
});

app.get('/request/:id', (req, res) => {
    const requestId = parseInt(req.params.id, 10);
    const request = requests.find((r) => r.id === requestId);

    if (request) {
        res.render('request', {
            request
        });
    } else {
        res.status(404).send('Request not found.');
    }
});

const server = http.createServer(app);
const io = socketIO(server);
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log(`Webhook debugger listening on port ${PORT}`);
});