const fs = require('fs');
const eh = require('./event-handling');

console.log("Before File Read");
/*
fs.readFile('packages.json', function(error, data){
    if(error)
        console.log("File Not Exist");
    else
        console.log(data.toString());
});
*/
try{
    var fileContents = fs.readFileSync('packages.json');
    console.log(fileContents.toString());
}
catch(error){
    //console.log("File Not Exist");
    eh.eventHandler.emit('error', 'Message emitted from File Operations');
}

console.log("After File Read");