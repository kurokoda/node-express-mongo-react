"use strict";

process.env.SERVER_ENV = true;

import bodyParser from 'body-parser';
import cluster from 'cluster';
import mongoConnect from 'connect-mongo';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import session from 'express-session';
import mongoose from 'mongoose';
import morgan from 'morgan';
import path from 'path';
import winston from 'winston';
import appRouter from './route/app';
import authRouter from './route/auth';
import productRouter from './route/product';
import renderRouter from './route/render';
import {seed as seedProduct} from './controller/product';

const numCPUs    = 1; //require('os').cpus().length;
const MongoStore = mongoConnect(session);
const app        = express();

mongoose.Promise = Promise;

// Multi-process to utilize all CPU cores.
if (cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
  });

} else {
  const app = express();

// Mongoose DB ----------------------------------------------------------------------

  mongoose.Promise = global.Promise;
  const mongoURI   = 'mongodb://heroku_bd2brwl4:s66prgidcrhnrciggq54oefg2b@ds145871.mlab.com:45871/heroku_bd2brwl4';
  mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + mongoURI);
    //seedProduct();
  });
  mongoose.connect(mongoURI)

// Settings ----------------------------------------------------------------------

  app.set('views', path.join(__dirname, 'view'));
  app.set('view engine', 'jade');

// Middleware ----------------------------------------------------------------------

  const corsConfig = {
    origin              : true,
    credentials         : true,
    allowedHeaders      : ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With', 'Accept', 'Cache'],
    methods             : ['GET', 'POST', 'DELETE', 'PATCH', 'OPTIONS'],
    optionsSuccessStatus: 200,
  };

  const storeConfig = {
    mongooseConnection: mongoose.connection,
  };

  const sessionConfig = {
    secret           : 'b5b617a79a20d59a7d691fb8d7595b9e',
    name             : 'stepping-up-session',
    resave           : true,
    saveUninitialized: false,
    store            : new MongoStore(storeConfig),
    cookie           : {
      secure  : false,
      httpOnly: true,
      maxAge  : 60 * 60 * 1000,
    }
  };

  const isProduction = process.env.NODE_ENV === 'production';
  const logger       = winston.createLogger({
    transports: [
      new winston.transports.File({filename: './logs/error.log', level: 'error'}),
      new winston.transports.File({filename: './logs/combined.log'})
    ]
  });
  !isProduction && logger.add(new winston.transports.Console());
  logger.log('error', 'Logger initialized')

  app.use(cors(corsConfig));
  app.use(session(sessionConfig));
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(cookieParser());

// Routing middleware----------------------------------------------------------------------

  app.use(appRouter);
  app.use(authRouter);
  app.use(productRouter);

  // All remaining requests return the React app, so it can handle routing.
  app.use(express.static(path.resolve(__dirname, '../react-ui/build')));
  app.get('/one', function (request, response) {
    response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
  });
  app.get('/two', function (request, response) {
    response.sendFile(path.resolve(__dirname, '../../react-ui/build', 'index.html'));
  });
  app.get('/three', function (request, response) {
    response.sendFile(path.resolve(__dirname, '../../../react-ui/build', 'index.html'));
  });
  app.get('/four', function (request, response) {
    response.sendFile(path.resolve(__dirname, '../../../../react-ui/build', 'index.html'));
  });
  app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
  });

// Error middleware ----------------------------------------------------------------------

  app.use(function (req, res, next) {
    const err  = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error   = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

// Init ----------------------------------------------------------------------

  const port = process.env.PORT || 5000;

  app.listen(port);

  console.log(`app listening on ${port}`);
}
