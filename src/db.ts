import mongoose from "mongoose"

export const connectDb = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost:27017/db_name')
        console.log('Connected to database');
    }
    catch (e: unknown) {
        console.log("Connection to database failed");
        console.log(e);
    }
}