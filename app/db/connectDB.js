import mongoose from 'mongoose';
import * as dotenv from 'dotenv'
dotenv.config()

export async function connect() {
    try {
        const uri = process.env.NEXT_PUBLIC_MONG_URI
        mongoose.connect(uri);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('MongoDB connected successfully');
        })

        connection.on('error', (err) => {
            console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
            process.exit();
        })

    } catch (error) {
        console.log('Something goes wrong!');
        console.log(error);
        
    }


}