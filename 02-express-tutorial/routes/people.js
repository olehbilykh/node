const express = require('express')
const router = express.Router()

let {people} = require("../data");

const {getPeople, deletePerson, createPersonPostman, updatePerson, createPerson} = require('../controllers/people')


// router.get('/', getPeople)
//
// router.post('/', createPerson)
//
// router.post('/postman', getPersonPostman)
//
// router.put('/:id', updatePerson)
//
// router.delete('/:id', deletePerson)

router.route('/'.get(getPeople).post(createPerson))
router.route('/postman'.post(createPersonPostman))
router.route('/:id'.put(updatePerson).delete(deletePerson))

module.exports = router