const dotenv= require('dotenv');
dotenv.config();
const mongoDb= require('mongodb').MongoClient;

let _db;

let initDatabase=(callback)=>{
    if (_db){
        console.log('db already initialized');
        return callback(null, _db);
    }
    mongoDb.connect(process.env.MONGODB_URI)
    .then((client)=>{
        _db=client;
        callback(null, _db);
    })
    .catch((err)=>{
        callback(err);
    });
};

const getDatabase=()=>{
    if (!_db){
        throw Error('database not intiaized');
    }
    return _db;
};

module.exports={initDatabase, getDatabase};