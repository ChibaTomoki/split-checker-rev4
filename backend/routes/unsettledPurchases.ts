import express from 'express'
import {
  getUnsettledPurchases,
  postUnsettledPurchase,
  deleteUnsettledPurchase,
  deleteUnsettledPurchases,
  putUnsettledPurchase,
} from '../controllers/unsettledPurchases'

const router = express.Router()

router.get('/', getUnsettledPurchases)
router.post('/', postUnsettledPurchase)
router.delete('/:id', deleteUnsettledPurchase)
router.delete('/', deleteUnsettledPurchases)
router.put('/:id', putUnsettledPurchase)

export default router
