const mongoose = require('mongoose');

const StorageSchema = new mongoose.Schema(
    {
        url: {
            type: String
        },
        filename: {
            type: Number
        }
    },
    {
        timestamps: true, // createdAt, updatedAt
        versionKey:false,S
    }
);

module.exports = mongoose.model('storages', StorageSchema);
