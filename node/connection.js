const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/ MongoDatabase";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    const myobj = [
        { name: "Sharma", age: "2125", address: "Ghad"},
        { name: "Shawerma", age: "5", address: "abad"},
        { name: "Mahrma", age: "2", address: "Giabad"}
    ];
    let dbase = db.db('mydb');
    dbase.collection("employees").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log("3 record inserted");
        db.close();
    });
});