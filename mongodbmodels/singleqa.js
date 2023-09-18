import mongoose,{Schema} from "mongoose";

const singleqaschema = new Schema(
    {
        question:String,
        answer:String
    },
    {
        timestamps:true,
    }
);

const singleqa = mongoose.models.singleqa || mongoose.model("singleqa",singleqaschema)

export default singleqa