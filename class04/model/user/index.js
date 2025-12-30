
import mongoose from 'mongoose';


let userSchema = new mongoose.Schema({
    userName: {
        type: mongoose.Schema.Types.String,
        require: true
    },
    email: {
        type: mongoose.Schema.Types.String,
        unique: true,
        require: true
    },
    password: {
        type: mongoose.Schema.Types.String,
        require: true
    }
}, {timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
}})

let USER = mongoose.model('user', userSchema)

export default USER