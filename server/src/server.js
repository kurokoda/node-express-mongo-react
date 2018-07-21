import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import winston from 'winston';
import cors from 'cors';
import morgan from 'morgan';
import session from 'express-session';
import mongoose from 'mongoose';
import mongoConnect from 'connect-mongo';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import { WelcomeController } from './controller';

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 5000;
const MongoStore = mongoConnect(session);

const logger = winston.createLogger({
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

const corsConfig = {
  origin: true,
  credentials: true,
  allowedHeaders: [ 'Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With', 'Accept', 'Cache' ],
  methods: [ 'GET', 'POST', 'DELETE', 'PATCH', 'OPTIONS' ],
  optionsSuccessStatus: 200,
};

const morganConfig = (tokens: any, req: express.Request, res: express.Response) => {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens[ 'response-time' ](req, res), 'ms'
  ].join(' ');
}

const storeConfig = {
  mongooseConnection: mongoose.connection,
};

const sessionConfig = {
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

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/myapp');
//mongoose.connect('mongodb://heroku_bd2brwl4:s66prgidcrhnrciggq54oefg2b@ds145871.mlab.com:45871/heroku_bd2brwl4');


const connection = mongoose.connection;
logger.info(connection)
connection.on('error', logger.error.bind(logger, 'MongoDB connection error:'));
connection.on('connect', logger.info.bind(logger, 'db connection success:'));
connection.on('error', logger.error.bind(logger, 'db connection error:'));
connection.once('open', function () {
  logger.info('')
});

app.use(cors(corsConfig));
app.use(session(sessionConfig));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors(corsConfig));

app.use(morgan(morganConfig));

app.use('/user', WelcomeController);

app.get('/ping', (req, res) => {
  res.status(200).send(JSON.stringify('Ping: success'))
});

app.use(express.static(path.resolve(__dirname, '../../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
});

app.listen(port, () => {
  logger.info(`Listening at http://localhost:${port}/`);
});