'use strict';
module.exports = function(sequelize, DataTypes) {
  var Messages = sequelize.define('Messages', {
    message: DataTypes.TEXT,
    username: DataTypes.STRING(32)
    // delete_time: DataTypes.DATE(+)
  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  });
  return Messages;
};
