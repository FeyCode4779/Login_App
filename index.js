import express from 'express';
import connectToDb from './config/db.js';
import userRoutes from "./Routes/userRoutes.js"
import dotenv from 'dotenv';

dotenv.config()
const app = express();
app.use(express.json());

const port = 3000
connectToDb();

app.use('/api/users/', userRoutes);


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
});