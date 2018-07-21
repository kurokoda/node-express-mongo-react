"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var controllers_1 = require("./controllers");
var app = express();
var port = Number(process.env.PORT) || 5000;
app.use('/welcome', controllers_1.WelcomeController);
app.use(express.static(path.resolve(__dirname, '../../client/build')));
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
});
app.listen(port, function () {
    console.log("Listening at http://localhost:" + port + "/");
});
