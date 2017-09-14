var restify = require("restify");

var server = restify.createServer();
let responseBody;
function list(req, res, next){
    console.log("inside list");
    name = req.params.name;
    id = req.params.id;
    responseBody = {name, id}
    return next();
}

function list2(req, res, next){
    console.log("inside list version 2");
    name = req.params.name;
    id = req.params.id;
    message = "version 2"
    responseBody = {name, id, message}
    res.send(responseBody);
}

function chainlist(req, res, next){
    console.log("chainlist")
    responseBody.message = "inside chainlist"
    res.send(responseBody);
}

server.get({path: '/user', version: '1.8.1'}, list, chainlist);
server.get({path: '/user', version: '2.0.0'}, list2);
server.get({path: '/user/:name/:id', version: '2.0.0'}, list, chainlist);

server.listen(8080);