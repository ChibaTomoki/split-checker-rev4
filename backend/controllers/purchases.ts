import { Request, Response } from 'express'
import { PurchaseModel } from '../db/schema'

const catchError = (res: Response, error: unknown) => {
  if (error instanceof Error) {
    res.status(500).json(error.message)
  } else if (typeof error === 'string') {
    res.status(500).json(error)
  } else {
    res.status(500).json('unexpected error')
  }
}

export const getPurchases = async (req: Request, res: Response) => {
  console.log('getPurchases is called')
  try {
    const allPurchases = await PurchaseModel.find(req.body)
    res.status(200).json(allPurchases)
  } catch (error: unknown) {
    catchError(res, error)
  }
}

export const postPurchase = async (req: Request, res: Response) => {
  console.log('postPurchase is called')
  try {
    const postedPurchase = await PurchaseModel.create(req.body)
    res.status(200).json(postedPurchase)
  } catch (error: unknown) {
    catchError(res, error)
  }
}

export const deletePurchase = async (req: Request, res: Response) => {
  console.log('deletePurchase is called')
  try {
    const deletedPurchase = await PurchaseModel.deleteOne({ _id: req.params.id })
    res.status(200).json(deletedPurchase)
  } catch (error: unknown) {
    catchError(res, error)
  }
}

export const deletePurchases = async (req: Request, res: Response) => {
  console.log('deletePurchases is called')
  try {
    const deletedPurchases = req.body
      ? await PurchaseModel.deleteMany({ _id: { $in: req.body } })
      : await PurchaseModel.deleteMany({})
    res.status(200).json(deletedPurchases)
  } catch (error: unknown) {
    catchError(res, error)
  }
}

export const putPurchase = async (req: Request, res: Response) => {
  console.log('putPurchase is called')
  try {
    const putPurchase = await PurchaseModel.replaceOne({ _id: req.params.id })
    res.status(200).json(putPurchase)
  } catch (error: unknown) {
    catchError(res, error)
  }
}
