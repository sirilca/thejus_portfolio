import mongoose from 'mongoose';

const connectionString = process.env.MONGO_CONNECTION_STRING;

mongoose.connect('mongodb+srv://thejusjoseph:dwMMlpOhly7HFKgx@cluster0.2mkkvws.mongodb.net/portfolio?retryWrites=true&w=majority').then(() => {console.log("mongo connected")});
// mongoose.connect(connectionString).then(() => { console.log("MongoDB connected") });

const DataModel = mongoose.models['data'] || mongoose.model('data', new mongoose.Schema({}));

export default DataModel;
