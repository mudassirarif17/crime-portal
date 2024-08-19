import mongoose from "mongoose";

const connectDB = async () => {
    // mongodb://localhost:27017/crimereport
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.0');
        // await mongoose.connect('mongodb+srv://crime-report:qJ9ccIUXESS3quQ4@cluster0.uzc7q.mongodb.net/crime', {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        // });
        console.log('Connected to Mongo SuccessFully...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDB;
