import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username: String,
    hashedPassword: String, 
    name: String,
    email: String,
    roles: [String],
});
export default mongoose.model("User", userSchema);