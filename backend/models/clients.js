
module.exports = (sequelize,DataTypes) => {

const Client = sequelize.define('Client',{
    name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
        validate:{
          isEmail: true
        }
      },
      password:{
        allowNull: false,
        type: DataTypes.STRING,
      },
      occupation: {
        type: DataTypes.STRING,
      },
      address: {
        allowNull: false,
        type: DataTypes.STRING,
      }
});

return Client;

}