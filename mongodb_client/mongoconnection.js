const mongoClient = require('mongodb').MongoClient;
// Connection url
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'MeetApp';


mongoClient.connect(url,(error,client)=>{
    if(error){
        return console.log('Connection error detected:'+error);
    }
    console.log('successfuly connected to mongo server');
     const db = client.db(dbName);

    // adding collection to database
    db.collection('Users').insertOne({
        name: "Chritopher Mulwa",
        occupation:"Software Engineer"

    },(error,result)=>{
        if(error){
            return console.log('Collection not  saved  '+error);
        }
        console.log("Collection saved successfully");
        console.log(JSON.stringify(result));

    })

    client.close();

});

