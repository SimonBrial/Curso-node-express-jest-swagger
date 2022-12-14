const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        email: {
            type: String,
            unique: true,
        },
        password: String,
        role: {
            type: ["user", "admin"],
            default: "user",
        },
    },
    {
        timestamps: true, // createdAt, updatedAt
        versionKey: false
    }
);

module.exports = mongoose.model('users', UserSchema);
