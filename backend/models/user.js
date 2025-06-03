import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username: String,
    hashedPassword: String, 
    name: String,
    email: String,
    roles: Array,
});
export default mongoose.model("User", userSchema);