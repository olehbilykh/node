const express = require('express')
const router = express.Router()

let {people} = require("../data");

const {getPeople, deletePerson, createPersonPostman, updatePerson, createPerson} = require('../controllers/people')


// routes.get('/', getPeople)
//
// routes.post('/', createPerson)
//
// routes.post('/postman', getPersonPostman)
//
// routes.put('/:id', updatePerson)
//
// routes.delete('/:id', deletePerson)

router.route('/'.get(getPeople).post(createPerson))
router.route('/postman'.post(createPersonPostman))
router.route('/:id'.put(updatePerson).delete(deletePerson))

module.exports = router