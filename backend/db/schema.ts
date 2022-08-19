import { Schema, model } from 'mongoose'

interface Person {
  index: number
  name: string
  paid: number
  toPay: number
}

interface Purchase {
  name: string
  persons: Person[]
  note: string
}

const PersonSchema = new Schema<Person>({
  index: Number,
  name: String,
  paid: Number,
  toPay: Number,
})
export const PersonModel = model('person', PersonSchema)

const PurchaseSchema = new Schema<Purchase>({
  name: String,
  persons: [PersonSchema],
  note: String,
})
export const PurchaseModel = model('purchase', PurchaseSchema)
