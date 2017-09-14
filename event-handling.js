/* Custom Event Handlers */
const EventEmitter = require('events');

class emitter extends EventEmitter{}

const eventHandler = new emitter();

eventHandler.on('error', function(msg){
    console.log(msg);
})


module.exports = {
    eventHandler
}
//eventHandler.emit('error', 'New Error Message');
