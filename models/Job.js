const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Job extends Model { }

Job.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        job_name: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        job_price: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        job_descr: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        job_location: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },

        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'job',
    }
);

module.exports = Job;
