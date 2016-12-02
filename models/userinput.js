'use strict';
module.exports = function(sequelize, DataTypes) {
  var UserInput = sequelize.define('UserInput', {
    location: DataTypes.STRING,
    event: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return UserInput;
};