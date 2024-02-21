const express = require('express');
const router = express.Router();
const skillsController = require('../controllers/skills');

//GET /skills
router.get('/', skillsController.index);

//GET /skills/new
router.get('/new', skillsController.new);

//GET /skills/:id
router.get('/:id', skillsController.show);

//GET /skills/:id/edit
router.get('/:id/edit', skillsController.edit);


//POST /skills
router.post('/', skillsController.create);

//DELETE /skills/:id
router.delete('/:id', skillsController.delete);

//PUT /skills/:id
router.put('/:id', skillsController.update);

module.exports = router;