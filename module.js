// NPM Module
// const color = require('cli-color');

// console.log(color.redBright("Hemant"));

// Local Module

// const register = require('./auth.js');
// const auth = require('./auth.js');

// auth.register('Hemant Raj');
// auth.login('Hemant Raj');


// Core Module || inbuild module


const path = require('path');

//dirname
// console.log(__filename);

// console.log('Folder name', path.dirname(__filename));

//filename

// console.log('file name', path.basename(__filename));

//Extension

// console.log('Ext name', path.extname(__filename));


//parse

// console.log('Parse : ', path.parse(__filename));


//Join

// console.log('Join :', path.join(__dirname, 'post','comment.js'));


//File system

const fs = require('fs');

// Make a directory

// fs.mkdir(path.join(__dirname,'/test1'), function(err){
//     if(err){
//         console.log('Error', err);
//         return ;
//     }

//     console.log("Folder Created");
// })

// Create File

// fs.writeFile(path.join(__dirname, 'test', 'test.txt'),
//  'Hello Hemant\n', function(err){
//      if(err){
//          throw err;
//      }

//      fs.appendFile(path.join(__dirname, 'test', 'test.txt'),
//      'Hello Hemant', function(err){
//          if(err){
//              throw err;
//          }
//          console.log('Data Added');
//         })

//      console.log('File Created');
//  })


//Read a file

// fs.readFile(path.join(__dirname, 'test', 'test.txt'),
//  function(err, data){
//    // data contains buffer data

//      if(err){
//          console.log('Error', err);
//      }

//     //  convert buffer data into string

//     const content = Buffer.from(data);

//      console.log( content.toString());

//      console.log('data ',data);
//  })


// Operating system module

//OS module

const os = require('os');

// To check he Window type of your System
// console.log('OS', os.type());
// console.log('OS Platform', os.platform());

// console.log('CPU architecture', os.arch());

// console.log('CPU Details', os.cpus());

// console.log('Free Memory', os.freemem());

// console.log('Total Memory', os.totalmem());

// console.log('UpTime', os.uptime());


//Events Modules

//Here Emitter is Class
const Emitter = require('events');

// create obj of Emitter class
// const myEmitter = new Emitter;

// myEmitter.on('somename', function(data){
//     console.log(data);
// })

// myEmitter.emit('somename' ,{
//     name: 'Hemant',
//     Skill: 'Coder'
// })


class Auth extends Emitter{
    register(username) {
        console.log('Registered Successfully...');

        this.emit('Registered', username);
    }
}

// creating object of Auth class
const auth = new Auth();

//LIsten

//sending email
auth.on('Registered', function(data){
    console.log('sending email to ', data);
});

//sending welcome email
auth.on('Registered', function(data){
    console.log('sending welcome email to ', data);
});

auth.register('Hemant');
