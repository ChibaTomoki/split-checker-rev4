export interface Person {
  name: string
}

export interface PersonAddedId extends Person {
  _id: string
}

export interface PurchasePerson extends PersonAddedId {
  paid: number
  toPay: number
}

export type Stage = 'Unsettled' | 'Settled' | 'Archived'

export interface Purchase {
  name: string
  people: PurchasePerson[]
  note: string
  stage: Stage
}

export interface PurchaseAddedId extends Purchase {
  _id: string
}
