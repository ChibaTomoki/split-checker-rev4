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

export interface Purchase {
  name: string
  people: PurchasePerson[]
  note: string
}

export interface PurchaseAddedId {
  _id: string
}
