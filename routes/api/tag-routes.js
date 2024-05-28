const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  // findAll()
  try {
    const tags = await Tag.findAll({
      include: [
        {
          model: Product
        }
      ]
    })
    res.json(tags)

  } catch(err) {
    console.log(err)
    res.status(500).send('Error getting tags.')
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  // findByPk()
  const { id } = req.params
  try {
    const tag = await Tag.findByPk(id, {
      include: [
        {
          model: Product
        }
      ]
    })
    res.json(tag)
  } catch(err) {
    console.log(err)
    res.status(500).send('Error getting tag.')
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  // create()
  try {
    const newTag = await Tag.create(req.body)
    res.json(newTag)

  } catch(err) {
    console.log(err)
    res.status(500).send('Error creating tag.')
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  // update()
  const { id } = req.params
  try {
    const updateTag = await Tag.update(req.body, {
      where: { id }
    })
    res.json(updateTag)

  } catch(err) {
    console.log(err)
    res.status(500).send('Error updating tag.')
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  // destroy()
  const { id } = req.params
  try {
    const deleteTag = await Tag.destroy({
      where: { id }
    })
    res.json(deleteTag)
    
  } catch(err) {
    console.log(err)
    res.status(500).send('Error deleting tag.')
  }
});

module.exports = router;
