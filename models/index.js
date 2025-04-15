const User = require('./user.model');
const Institute = require('./institute.model');

// Associations
User.hasOne(Institute, { foreignKey: 'UserId' });  
Institute.belongsTo(User, { foreignKey: 'UserId' }); 


module.exports = {
  User,
  Institute
};
