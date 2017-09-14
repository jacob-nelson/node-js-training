var restify = require("restify");
var user = require("./user");

var server = restify.createServer();
server.use(restify.plugins.bodyParser());



server.get({path: '/user'}, user.list);
server.post({path: '/user'}, user.create);
server.put({path: '/user/:id'}, user.modify);
server.del({path: '/user/:id'}, user.remove);
server.listen(8080);