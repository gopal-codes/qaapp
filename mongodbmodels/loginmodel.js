import mongoose,{Schema} from "mongoose";

const userschema = new Schema(
    {
        username:String,
        password:String
    }
);

const user = mongoose.models.user || mongoose.model("user",userschema)

export default user