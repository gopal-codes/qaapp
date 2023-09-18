import mongoose from "mongoose";

const connectMongoDB = async ()=>{
    try {
      await mongoose.connect(process.env.MONGODB_URL );
        console.log("mongoose connected.")
    } catch (error) {
        console.log(error+ "error while connecting moongose");
    }
}

export default connectMongoDB;