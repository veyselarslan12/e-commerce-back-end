const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
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
  const { id } = req.params.id
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
  try {

  } catch(err) {
    console.log(err)
    res.status(500).send()
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {

  } catch(err) {
    console.log(err)
    res.status(500).send()
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {

  } catch(err) {
    console.log(err)
    res.status(500).send()
  }
});

module.exports = router;
