import mongoose from "mongoose";

const connect = async () => {
    try {
        console.log("Trying to connect:", process.env.MONGO);

        await mongoose.connect(process.env.MONGO);

        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Mongo Error:", error.message);
        throw error;
    }
};

export default connect;