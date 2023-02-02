const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/mysql');

const Storage = sequelize.define('storages',
    {
        url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        filename: DataTypes.STRING
    },
    {
        timestamps: true // createdAt, updatedAt
    }
);


module.exports = Storage;