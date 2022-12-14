const mongoose = require('mongoose');

const StorageSchema = new mongoose.Schema(
    {
        url: String,
        filename: String
    },
    {
        timestamps: true, // createdAt, updatedAt
        versionKey: false
    }
);

module.exports = mongoose.model('storage', StorageSchema);
