const res = require('express/lib/response')
const { Category } = require('../models')
const router = require('../routes/tag-routes')

const categoryData = [
  {
    category_name: 'Shirts'
  },
  {
    category_name: 'Shorts'
  },
  {
    category_name: 'Music'
  },
  {
    category_name: 'Hats'
  },
  {
    category_name: 'Shoes'
  }
]
router.get('/categories'(req,res)=>{
  category.findAll()
  .then(catergories)
})
.catch(err=>{
 console.log(err);
})
 router.get('/categories/:id') (req, res)=>{
   
 }
const seedCategories = () => Category.bulkCreate(categoryData)

module.exports = seedCategories
