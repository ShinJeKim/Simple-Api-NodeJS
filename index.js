/**
 * Simple Resume Web With Node.js
 */
'use strict';

const express = require('express');
const path = require('path');
const mysql = require('mysql');
const app = express();
const bodyParser = require('body-parser');
const port = 3847;
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 8889,
    database: 'company'
});

connection.connect();

app.use('/assets', express.static(__dirname + '/view'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.listen(port, function () {
    console.log('Start Server through ' + port);
});

app.get('/', function (req, res) {
    res.sendFile('index.html', {
        root: path.join(__dirname, './view')
    });
    
    console.log('CONNECTION GET');
});

app.get('/career', function (req, res) {
    console.log('Api GET "/career"');

    let getInfoOfUserQ = 'SELECT * FROM `company`.`CAREER` ORDER BY `id` DESC;';
    let getInfoOfUser = connection.query(getInfoOfUserQ, function (getInfoOfUserErr, getInfoOfUserResult) {
        if (getInfoOfUserErr) {
            throw new Error(getInfoOfUserErr);
        }

        res.json(getInfoOfUserResult);
        return console.log(getInfoOfUserResult);
    });
});

app.post('/career', function (req, res) {
    console.log('Api POST "/career"');

    let setNewUserQ = 'INSERT INTO `company`.`CAREER` (`title`, `description`) VALUES ("' + req.body.title + '", "' + req.body.description + '") ;';
    let setNewUser = connection.query(setNewUserQ, function (setNewUserErr) {
        if (setNewUserErr) {
            throw new Error(setNewUserErr);
        }

        res.json({
            'result': 'Y'
        });
        return console.log({
            'result': 'Y'
        });
    });
});

app.delete('/career', function (req, res) {
    console.log('Api DELETE "/career"');

    let delUserQ = 'DELETE FROM `company`.`CAREER` WHERE (`title` = "' + req.body.title + '") ORDER BY `id` DESC LIMIT 1;';
    let delUser = connection.query(delUserQ, function (delUserErr) {
        if (delUserErr) {
            throw new Error(delUserErr);
        }

        res.json({
            'result': 'Y'
        });
        return console.log({
            'result': 'Y'
        });
    });
});

app.put('/career', function (req, res) {
    console.log('Api PUT "/career" ');

    let putUserQ = 'UPDATE `company`.`CAREER` SET `description` = "' + req.body.description + '" WHERE (`title` = "' + req.body.title + '") ORDER BY `id` DESC LIMIT 1;';
    let putUser = connection.query(putUserQ, function (putUserErr) {
        if (putUserErr) {
            throw new Error(putUserErr);
        }

        res.json({
            'result': 'Y'
        });
        return console.log({
            'result': 'Y'
        });
    });
});
