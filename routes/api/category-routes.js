const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories 
  // be sure to include its associated Products
  // findAll()
  try {
    const categories = await Category.findAll({
      include: [
        {
          model: Product
        }
      ]
    })
    res.json(categories)

  } catch(err) {
    console.log(err)
    res.status(500).send('Error getting all categories.')
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  // findByPk()
  const { id } = req.params
  try {
    const category = await Category.findByPk(id, {
      include: [
        {
          model: Product
        }
      ]
    })
    res.json(category)

  } catch(err) {
    console.log(err)
    res.status(500).send('Error getting category.')
  }
});

router.post('/', async (req, res) => {
  // create a new category
  // create()
  try {
    const newCategory = await Category.create(req.body)
    res.json(newCategory)

  } catch(err) {
    console.log(err)
    res.status(500).send('Error creating category.')
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  // update()
  const { id } = req.params
  try {
    const updateCategory = await Category.update(req.body, {
      where: { id }
    })
    res.json(updateCategory)

  } catch(err) {
    console.log(err)
    res.status(500).send('Error updating category.')
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  // destroy()
  const { id } = req.params
  try {
    const deleteCategory = await Category.destroy({
      where: { id }
    })
    res.json(deleteCategory)

  } catch(err) {
    console.log(err)
    res.status(500).send('Error deleting category.')
  }
});

module.exports = router;
