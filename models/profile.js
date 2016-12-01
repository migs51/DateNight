'use strict';
module.exports = function(sequelize, DataTypes) {
  var profile = sequelize.define('profile', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    location: DataTypes.STRING,
    concerts: DataTypes.STRING,
    outdoor: DataTypes.STRING,
    fine_arts: DataTypes.STRING,
    sports: DataTypes.STRING,
    festivals: DataTypes.STRING,
    comedy: DataTypes.STRING,
    italian: DataTypes.STRING,
    mexican: DataTypes.STRING,
    asian: DataTypes.STRING,
    seafood: DataTypes.STRING,
    american: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return profile;
};