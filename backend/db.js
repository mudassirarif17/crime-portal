import mongoose from "mongoose";

const connectDB = async () => {
    // mongodb://localhost:27017/crimereport
    try {
        // await mongoose.connect('mongodb+srv://mudassirinoxent:amftFleiRItjlUr7@cluster0.2rtvxcg.mongodb.net/enotebook', {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        // });
        await mongoose.connect('mongodb+srv://crime-report:qJ9ccIUXESS3quQ4@cluster0.uzc7q.mongodb.net/crime', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to Mongo SuccessFully...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDB;
