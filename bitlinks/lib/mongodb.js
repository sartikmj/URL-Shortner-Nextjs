import { MongoClient } from "mongodb" //This imports MongoDB’s official client so we can connect our app to the database

const uri = process.env.MONGODB_URI;

// const options = { //This option tells MongoDB to use the new URL parser (older versions needed it).
//     useNewUrlParser: true
// }

let client //MongoDB client instance
let clientPromise //Promise that resolves when DB is connected

if (!process.env.MONGODB_URI) {
    throw new Error('Add Mongo URI to .env.local')
}

if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri)
        global._mongoClientPromise = client.connect()
    }
    clientPromise = global._mongoClientPromise
} else {
    client = new MongoClient(uri, options)
    clientPromise = client.connect();
}

export default clientPromise;