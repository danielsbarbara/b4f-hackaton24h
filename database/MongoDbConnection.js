const { MongoClient } = require('mongodb')

const url = "mongodb+srv://danielsantosbarbara:H4195codk9yR8LsK@cluster0.tdkncp7.mongodb.net/"
const defaultDbName = "CasaIdeal"

let client = undefined

async function GetMongoClient() {
    if (!client) {
        try {
            client = new MongoClient(url)
            await client.connect()
        } catch (err) {
            console.log(err)
        }
    }
    return client
}

export async function GetCollection(dbName = defaultDbName, collectionName){
    const cli = await GetMongoClient()
    const db = cli.db(dbName)
    return db.collection(collectionName)
}