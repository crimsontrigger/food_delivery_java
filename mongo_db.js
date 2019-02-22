let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/";

function insert_into_db(myobj,col) {
    MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  let dbo = db.db("mydb");
  dbo.collection(col).insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
}

function query_from_db(query,col) {
    MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  let dbo = db.db("mydb");
  dbo.collection(col).find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
}
export {insert_into_db,query_from_db};
