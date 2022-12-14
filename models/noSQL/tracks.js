const mongoose = require('mongoose');

const TracksSchema = new mongoose.Schema(
    {
        name: String,
        album: String,
        cover: {
            type: String,
            validate: {
                validator: (req) => {
                    return true;
                }
            },
            message: 'ERROR_URL'
        },
        artist: {
            name: String,
            nickname: String,
            nationality: String
        },
        duration: {
            start: Number,
            end: Number
        },
        mediaId: String
    },
    {
        timestamps: true, // createdAt, updatedAt
        versionKey: false
    }
);

module.exports = mongoose.model('tracks', TracksSchema);
