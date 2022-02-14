const express = require('express')
const router = express.Router()

let {people} = require("../data");

const {getPeople, deletePerson, getPersonPostman, updatePerson, createPerson} = require('../controllers/people')


router.get('/', getPeople)

router.post('/', createPerson)

router.post('/postman', getPersonPostman)

router.put('/:id', updatePerson)

router.delete('/:id', deletePerson)

module.exports = router