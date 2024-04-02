import mongoose, { connect } from "mongoose";

const connectToDb = async ()=>{

    const url = process.env.MONGO_URL;

    const conn = mongoose.connect(url);

    console.log(`Connected to database ${ (await conn).connection.name}`)
}

export default connectToDb;