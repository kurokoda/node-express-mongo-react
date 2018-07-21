"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var dotenv = require("dotenv");
var winston = require("winston");
var cors = require("cors");
var morgan = require("morgan");
var session = require("express-session");
var mongoose = require("mongoose");
var mongoConnect = require("connect-mongo");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var controller_1 = require("./controller");
dotenv.config();
var app = express();
var port = Number(process.env.PORT) || 5000;
var MongoStore = mongoConnect(session);
var logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: './logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: './logs/combined.log' })
    ]
});
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple()
    }));
}
var corsConfig = {
    origin: true,
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With', 'Accept', 'Cache'],
    methods: ['GET', 'POST', 'DELETE', 'PATCH', 'OPTIONS'],
    optionsSuccessStatus: 200,
};
var morganConfig = function (tokens, req, res) {
    return [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms'
    ].join(' ');
};
var storeConfig = {
    mongooseConnection: mongoose.connection,
};
var sessionConfig = {
    secret: 'b5b617a79a20d59a7d691fb8d7595b9e',
    name: 'stepping-up-session',
    resave: true,
    saveUninitialized: false,
    store: new MongoStore(storeConfig),
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 60 * 60 * 1000,
    }
};
//mongoose.Promise = global.Promise;
var connection = mongoose.createConnection('mongodb://heroku_bd2brwl4:s66prgidcrhnrciggq54oefg2b@ds145871.mlab.com:45871/heroku_bd2brwl4', { useNewUrlParser: true });
connection.on('error', logger.error.bind(console, 'MongoDB connection error:'));
connection.on('connect', logger.log.bind(console, 'db connection success:'));
connection.on('error', logger.error.bind(console, 'db connection error:'));
connection.once('open', function () {
});
app.use(cors(corsConfig));
app.use(session(sessionConfig));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors(corsConfig));
app.use(morgan(morganConfig));
app.use('/user', controller_1.WelcomeController);
app.get('/ping', function (req, res) {
    res.status(200).send(JSON.stringify('Ping: success'));
});
app.use(express.static(path.resolve(__dirname, '../../client/build')));
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
});
app.listen(port, function () {
    logger.info("Listening at http://localhost:" + port + "/");
});
