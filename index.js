const http=require('http');
http.createServer(function(req,res){
    if(req.url==='/'){
        res.writeHead(200,{"Context-type":"text/html"})
        res.write('I am in the defaultpage');
        res.end();
    }
    else if(req.url==="/home"){
        res.write(JSON.stringify([1,2,3,4]));
        res.end();
    }
    
    else if(req.method==="GET" && req.url==="/contactus"){
        res.write(JSON.stringify(["Tiger","Deer","Giraffe","Lion"]));
        res.end();
    }
    else if(req.method==="GET" && req.url==="/explore"){
        res.write("Explore Page Has been called");
        res.end();
    }
}).listen(7999);
console.log("listening to 7999 port...");