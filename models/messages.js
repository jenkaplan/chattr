'use strict';
module.exports = function(sequelize, DataTypes) {
  var Messages = sequelize.define('Messages', {
    message: DataTypes.TEXT,
    user_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        user_id.hasMany(Messages, {as: 'user_id'})
      }
    }
  });
  return Messages;
};
