import { Request, Response } from 'express'
import { PersonModel } from '../db/schema'

const catchError = (res: Response, error: unknown) => {
  if (error instanceof Error) {
    res.status(500).json(error.message)
  } else if (typeof error === 'string') {
    res.status(500).json(error)
  } else {
    res.status(500).json('unexpected error')
  }
}

export const getPeople = async (req: Request, res: Response) => {
  console.log('getPeople is called')
  try {
    const allPeople = await PersonModel.find(req.body)
    res.status(200).json(allPeople)
  } catch (error: unknown) {
    catchError(res, error)
  }
}

export const postPerson = async (req: Request, res: Response) => {
  console.log('postPerson is called')
  try {
    const postedPerson = await PersonModel.create(req.body)
    res.status(200).json(postedPerson)
  } catch (error: unknown) {
    catchError(res, error)
  }
}

export const deletePerson = async (req: Request, res: Response) => {
  console.log('deletePerson is called')
  try {
    const deletedPerson = await PersonModel.deleteOne({ _id: req.params.id })
    res.status(200).json(deletedPerson)
  } catch (error: unknown) {
    catchError(res, error)
  }
}
