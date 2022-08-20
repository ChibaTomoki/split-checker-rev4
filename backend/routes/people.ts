import express from 'express'
import { getPeople, postPerson } from '../controllers/people'

const router = express.Router()

router.get('/', getPeople)
router.post('/', postPerson)

export default router
