const http = require('http');

http.createServer(function(request, response) {
   const {headers, url} = request;
   let body; 

   if(request.url === "/list" && request.method === 'POST'){
    request
    .on('error', function(){

    })
    .on('data', function(chunk){
        console.log("On Data => "+chunk)
        body = chunk;
    })
   .on('end', function(){
        //console.log("A Real Request End");
        //response.statusCode = 400;
        if(body)
            body = body.toString();
        else
            body = '';
        response.setHeader('Content-Type', 'application/json');
        const responseBody = {headers, url, body}
        response.write(JSON.stringify(responseBody));
        response.end();
    })
   }
   else{
        const responseBody = "Bad Request"
        response.write(JSON.stringify(responseBody));       
       response.statusCode = 400;
       response.end();
   }
  // request    


}).listen(2017);