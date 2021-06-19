const User = require("./User");
const Job = require("./Job");


Job.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

User.hasMany(Job, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});




module.exports = { User, Job };
