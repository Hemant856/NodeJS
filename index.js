// console.log("Hello Hemant");
// console.log("Coder");


//HTTP Module

// Creating Server

const http = require('http');
const fs = require('fs');
const path = require('path');

const app = http.createServer( function(req, res){

    // console.log(req.url);

    const filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

    res.writeHead(200, {
        'Content-Type': 'text/html'
    })

     if(req.url == '/about'){

        fs.readFile(path.join(__dirname,'public', 'about.html'), function(err, data){

            if(err){
                console.log('Error', err);
                // throw err;
                fs.readFile(path.join(__dirname, 'public', 'error.html'), (error, content) =>{
                    res.end(content);
                });
            }
    
            res.end(data);
        })
     }

     if(req.url == '/'){

        fs.readFile(path.join(__dirname,'public', 'index.html'), function(err, data){

            if(err){
                console.log('Error', err);
                // throw err;
                fs.readFile(path.join(__dirname, 'public', 'error.html'), (error, content) =>{
                    res.end(content);
                })
            }
    
            res.end(data);
        })
     }

    });

const PORT = process.env.PORT || 7000;

app.listen(PORT, function(err){
    console.log(`Listening on Port ${PORT}`);
});