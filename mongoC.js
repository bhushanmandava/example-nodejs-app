import { MongoClient } from "mongodb";

const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim());
// mongodb+srv://<db_username>:<db_password>@cluster0.nrzg2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
const connectionString = `mongodb+srv://Bhushan2023:${password}@cluster0.nrzg2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`; // clustore url
// const connectionString = `mongodb+srv://saimandava:${password}@devcluster.yw3r2.mongodb.net/?retryWrites=true&w=majority&appName=devcluster`; // clustore url
const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
  console.log("connection successful")
} catch (e) {
  console.error(e);
}
let db = conn.db("integration_ninjas");
export default db;