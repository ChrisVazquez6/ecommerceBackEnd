const { Model, DataTypes } = require('sequelize')

const sequelize = require('../config/connection.js')

class Category extends Model {}

Category.init(
  {
    id: {
      type:DataTypes.INTEGER,
    allowedNull: false,
    primaryKey: true,
    autoIncrement: true 
    },
    catergory_name:{
      type:DataTypes.STRING,
      allowedNull:false
    },
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category'
  }
)

module.exports = Category
