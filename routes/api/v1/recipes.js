const router = require('express').Router();
const recipes = require('../../../data/recipes')
router.get('/', (req, res) => {
     const summaries = recipes.map(({ id, title, image,prepTime,difficulty }) => ({
        id,
        title,
        image,
        prepTime,
        difficulty
    }));
    res.json(summaries)
})
router.get('/recipe/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const recipe = recipes.find(r => r.id === id);
    if (recipe) {
        res.json(recipe);
    } else {
        res.status(404).json({ error: 'Recipe not found' });
    }
})
router.post('/recipe/add', (req, res) => {
    const id = recipes.length +1
    const recipe = req.body
    const newRecipe = { id, ...recipe }
    recipes.push(newRecipe)
    res.send(newRecipe)
})
module.exports = router;