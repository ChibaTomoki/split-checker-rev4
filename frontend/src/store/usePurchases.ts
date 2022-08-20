import { defineStore } from 'pinia'
import axios, { AxiosResponse } from 'axios'
import { Purchase } from '../model'

interface State {
  purchases: Purchase[]
}

const purchasesApiUrl = 'http://localhost:5172/api/v1/purchases'

const catchError = (error: unknown): void => {
  if (axios.isAxiosError(error)) {
    console.log(error.message)
  } else if (error instanceof Error) {
    console.log(error.message)
  } else if (typeof error === 'string') {
    console.log(error)
  } else {
    console.log('unexpected error')
  }
}

const usePurchases = defineStore('purchases', {
  state: (): State => ({
    purchases: [],
  }),
  getters: {
    PurchasesGetter: (state) => state.purchases,
  },
  actions: {
    async getPurchases(): Promise<void> {
      try {
        const res: AxiosResponse<Purchase[]> = await axios.get(purchasesApiUrl)
        console.log(res)
        this.purchases = res.data
      } catch (error: unknown) {
        catchError(error)
      }
    },
    async postPurchase(purchase: Purchase): Promise<void> {
      try {
        const res: AxiosResponse<Purchase> = await axios.post(purchasesApiUrl, purchase)
        console.log(res)
        this.getPurchases()
      } catch (error: unknown) {
        catchError(error)
      }
    },
  },
})

export default usePurchases
