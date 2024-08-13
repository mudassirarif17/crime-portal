import mongoose , {model} from "mongoose";
import bcrypt from "bcryptjs";


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    image : {
        type : String,
        required : true
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

UserSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// module.exports = mongoose.model('User', UserSchema);
const User = model('user' , UserSchema); 
User.createIndexes();

export default User;
