import mongoose from 'mongoose';
export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("MONGODB connected successfully");
        })
        connection.on('error', (err) => {
            console.log("MongoDB connection error. Please make sure MongoDB is runnning") + err;
            process.exit();
        })
    } catch (error) {
        console.log("Something went wrong");
        console.log(error);
    }
}