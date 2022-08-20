import { Request, Response } from 'express'
import { UnsettledPurchaseModel } from '../db/schema'

const catchError = (res: Response, error: unknown) => {
  if (error instanceof Error) {
    res.status(500).json(error.message)
  } else if (typeof error === 'string') {
    res.status(500).json(error)
  } else {
    res.status(500).json('unexpected error')
  }
}

export const getUnsettledPurchases = async (req: Request, res: Response) => {
  console.log('getUnsettledPurchases is called')
  try {
    const allUnsettledPurchases = await UnsettledPurchaseModel.find(req.body)
    res.status(200).json(allUnsettledPurchases)
  } catch (error: unknown) {
    catchError(res, error)
  }
}

export const postUnsettledPurchase = async (req: Request, res: Response) => {
  console.log('postUnsettledPurchase is called')
  try {
    const postedUnsettledPurchase = await UnsettledPurchaseModel.create(req.body)
    res.status(200).json(postedUnsettledPurchase)
  } catch (error: unknown) {
    catchError(res, error)
  }
}

export const deleteUnsettledPurchase = async (req: Request, res: Response) => {
  console.log('deleteUnsettledPurchase is called')
  try {
    const deletedUnsettledPurchase = await UnsettledPurchaseModel.deleteOne({ _id: req.params.id })
    res.status(200).json(deletedUnsettledPurchase)
  } catch (error: unknown) {
    catchError(res, error)
  }
}

export const deleteUnsettledPurchases = async (req: Request, res: Response) => {
  console.log('deleteUnsettledPurchases is called')
  try {
    const deletedUnsettledPurchases = req.body
      ? await UnsettledPurchaseModel.deleteMany({ _id: { $in: req.body } })
      : await UnsettledPurchaseModel.deleteMany({})
    res.status(200).json(deletedUnsettledPurchases)
  } catch (error: unknown) {
    catchError(res, error)
  }
}

export const putUnsettledPurchase = async (req: Request, res: Response) => {
  console.log('putUnsettledPurchase is called')
  try {
    const putUnsettledPurchase = await UnsettledPurchaseModel.replaceOne({ _id: req.params.id })
    res.status(200).json(putUnsettledPurchase)
  } catch (error: unknown) {
    catchError(res, error)
  }
}
