
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
      }
});

Client.prototype.toJSON= function(){
  var values = Object.assign({},this.get());

  delete values.password;

  return values;
}
return Client;

}