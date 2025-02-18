import { MongoClient } from "mongodb";

const URI = `mongodb+srv://${process.env.CONECTION_USER}:${process.env.CONECTION_PASS}@cluster0.q5pyq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(URI);

export const db = client.db("spotify-jornadafullstack");

console.log(db);
