import { defineStore } from 'pinia'
import axios, { AxiosResponse } from 'axios'
import { Purchase, PurchaseAddedId, Stage } from '../model'

interface State {
  purchases: PurchaseAddedId[]
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
    purchasesGetter: (state) => state.purchases,
  },
  actions: {
    async getPurchases(): Promise<void> {
      try {
        const res: AxiosResponse<PurchaseAddedId[]> = await axios.get(purchasesApiUrl)
        console.log(res)
        this.purchases = res.data
      } catch (error: unknown) {
        catchError(error)
      }
    },
    async postPurchase(purchase: Purchase): Promise<void> {
      try {
        const res: AxiosResponse<PurchaseAddedId> = await axios.post(purchasesApiUrl, purchase)
        console.log(res)
        this.getPurchases()
      } catch (error: unknown) {
        catchError(error)
      }
    },
    async deletePurchase(id: string): Promise<void> {
      try {
        const res: AxiosResponse<PurchaseAddedId> = await axios.delete(`${purchasesApiUrl}/${id}`)
        console.log(res)
        this.getPurchases()
      } catch (error: unknown) {
        catchError(error)
      }
    },
    async settlePurchase(id: string): Promise<void> {
      const body: { stage: Stage } = { stage: 'Settled' }
      try {
        const res: AxiosResponse<PurchaseAddedId> = await axios.patch(`${purchasesApiUrl}/${id}`, body)
        console.log(res)
        this.getPurchases()
      } catch (error: unknown) {
        catchError(error)
      }
    },
  },
})

export default usePurchases
