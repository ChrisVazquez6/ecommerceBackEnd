const router = require('express').Router()
const { Category, Product } = require('../models')

// The `/api/categories` endpoint

router.get('/categories', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({include:[Product]})
  .then( categories)
})
.catch(err=>{
  console.log(err);
})
router.get('/categories/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.create(req.body)
  .then(category=>{
   .catch(err=>{
     console.log(err);
   })
  })
})

router.post('/categories', (req, res) => {
  // create a new category
})

router.put('/categories/:id', (req, res) => {
  // update a category by its `id` value
})

router.delete('/categories/:id', (req, res) => {
  // delete a category by its `id` value
})

module.exports = router
