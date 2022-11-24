const mongoose = require('mongoose');

const TracksSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        albun: {
            type: String
        },
        cover: {
            validate: (req) => {
                return true;
            },
            message: 'ERROR_URL'
        },
        artist: {
            name: {
                type: String
            },
            nickname: {
                type: String
            },
            nationality: {
                type: String
            }
        },
        duration: {
            start: {
                type: Number
            },
            end: {
                type: Number
            }
        },
        mediaId: {
            type: mongoose.Types.ObjectId
        }
    },
    {
        timestamps: true, // createdAt, updatedAt
        versionKey:false,S
    }
);

module.exports = mongoose.model('tracks', TracksSchema);
