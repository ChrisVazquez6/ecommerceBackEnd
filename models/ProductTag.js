const { Model, DataTypes } = require('sequelize')

const sequelize = require('../config/connection')
const Product = require('./Product')

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag'
  }
  Product_id:{
    type:DataTypes.INTEGER,
    refrence:{
      model:'product',
      key:'id'
    }
  }
)

module.exports = ProductTag
