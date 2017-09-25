const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const Twitter = require('twitter-node-client').Twitter;

const twitter = new Twitter({
    "consumerKey": "4t9gSsHpQW3quNH4c7m2gcl4L",
    "consumerSecret": "mRSoC1JjpBnSs7SWKmINRH6mieXpm64QvIh9RLkIlNGiTz4wqm",
    "accessToken": "326050262-x0ZAQBXYnDhOwXlUhqQeiI5W1k4OO2A0AVEBCFDL",
    "accessTokenSecret": "HjC7RpBLr0YQYJ07hCNP1I9p3ECA50RMjxdyNUjd0BuP0",
    "callBackUrl": "http://localhost:3000/api"
});

const error = function (err, response, body) {
    console.log('ERROR [%s]', err);
};
const success = function (data) {
    console.log(data);
};




const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    twitter.getSearch({'q':'#haiku','count': 1}, error, success);
    res.end('32452');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});