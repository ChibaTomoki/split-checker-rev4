import express from 'express'
import { getPeople, postPerson, deletePerson } from '../controllers/people'

const router = express.Router()

router.get('/', getPeople)
router.post('/', postPerson)
router.delete('/:id', deletePerson)

export default router
