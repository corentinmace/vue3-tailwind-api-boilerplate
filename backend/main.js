const express = require('express')
const all_routes = require('express-list-endpoints');
const bodyParser = require('body-parser');
const config = require('./config.json');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
const port = config.port
const addresses = config.frontend_address

app.use(function(req, res, next) {
    for (const address of addresses) {
        res.header("Access-Control-Allow-Origin", address)
    }
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"),
    next()
})

app.get("/", (req, res) => {
    let routes = []
    for (const route of all_routes(app)) {
        routes.push(`${route.methods} - ${route.path}`)
    }
    res.status(200).send(routes)
})

app.get("/address", (req, res) => {
    res.status(200).send(addresses)
})

app.listen(port, () => {
    console.log("API running on localhost:" + port)
});