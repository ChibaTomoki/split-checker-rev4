import express from 'express'
import {
  getPurchases,
  postPurchase,
  deletePurchase,
  deletePurchases,
  putPurchase,
  patchPurchase,
} from '../controllers/purchases'

const router = express.Router()

router.get('/', getPurchases)
router.post('/', postPurchase)
router.delete('/:id', deletePurchase)
router.delete('/', deletePurchases)
router.put('/:id', putPurchase)
router.patch('/:id', patchPurchase)

export default router
