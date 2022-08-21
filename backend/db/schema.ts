import { Schema, model } from 'mongoose'
interface Person {
  name: string
}

interface PersonAddedId extends Person {
  _id: string
}

interface PurchasePerson extends PersonAddedId {
  paid: number
  toPay: number
}

type Stage = 'Unsettled' | 'Setteled' | 'Archived'

interface Purchase {
  name: string
  people: PurchasePerson[]
  note: string
  stage: Stage
}

interface PurchaseAddedId {
  _id: string
}

const PersonSchema = new Schema<Person>({
  name: String,
})
export const PersonModel = model('person', PersonSchema)

const PurchasePersonSchema = new Schema<PurchasePerson>({
  _id: String,
  name: String,
  paid: Number,
  toPay: Number,
})

const PurchaseSchema = new Schema<Purchase>({
  name: String,
  people: [PurchasePersonSchema],
  note: String,
  stage: String,
})
export const PurchaseModel = model('purchase', PurchaseSchema)
