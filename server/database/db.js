import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async () => {
    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@synapse.jkvu3kz.mongodb.net/?retryWrites=true&w=majority&appName=Synapse`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true });
        console.log('Database is connected successfully');
    } catch (error){
        console.log('Error while connecting to MongoDB', error.message);
    }
}
export default Connection; 