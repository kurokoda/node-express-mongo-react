"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var winston = require("winston");
var level = process.env.LOG_LEVEL || 'debug';
var logger = new winston.Logger({
    transports: [
        new winston.transports.Console({
            level: level,
            timestamp: function () {
                return (new Date()).toISOString();
            }
        })
    ]
});
exports.default = logger;
