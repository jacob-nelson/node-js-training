var mysql = require("mysql");

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodeprogram'
});

db.connect(function(error){
    if(error)
        throw error;
    else
        console.log("Connected");
})

let responseBody;
function list(req, res, next){
    let sqlQuery = "SELECT * FROM users";

    db.query(sqlQuery, function(error, result){
        if(error)
           responseBody = "Error Inserting Data";
        else{
            message = "Data Inserted Successfully";
            insertId = result.insertId;
            responseBody = result;
        } 
        res.send(responseBody);
    });
}

function create(req, res, next){
    console.log(req.body.name);
    name = req.body.name;
    place = req.body.place;
    employer = req.body.employer;
    let message;

    let sqlQuery = "INSERT INTO users (name, place, employer) VALUES ('"+name+"', '"+place+"', '"+employer+"')";

    db.query(sqlQuery, function(error, result){
        if(error)
           responseBody = "Error Inserting Data";
        else{
            message = "Data Inserted Successfully";
            insertId = result.insertId;
            responseBody = {name, place, employer, message, insertId}
        } 
        res.send(responseBody);
    });
}

function modify(req, res, next){

}

function remove(req, res, next){
    id = req.params.id;
    let message;

    let sqlQuery = "DELETE FROM users WHERE id = "+id;

    db.query(sqlQuery, function(error, result){
        if(error)
           responseBody = "Error Inserting Data";
        else{
            message = "Record Deleted Successfully";
            responseBody = {message}
        } 
        res.send(responseBody);
    });


}

module.exports = {
    list,
    create,
    modify,
    remove
}