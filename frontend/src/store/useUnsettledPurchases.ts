import { defineStore } from 'pinia'
import axios, { AxiosResponse } from 'axios'
import { Purchase, PurchaseAddedId } from '../model'

interface State {
  unsettledPurchases: PurchaseAddedId[]
}

const unsettledPurchasesApiUrl = 'http://localhost:5172/api/v1/unsettledpurchases'

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

const useUnsettledPurchases = defineStore('unsettledPurchases', {
  state: (): State => ({
    unsettledPurchases: [],
  }),
  getters: {
    unsettledPurchasesGetter: (state) => state.unsettledPurchases,
  },
  actions: {
    async getUnsettledPurchases(): Promise<void> {
      try {
        const res: AxiosResponse<PurchaseAddedId[]> = await axios.get(unsettledPurchasesApiUrl)
        console.log(res)
        this.unsettledPurchases = res.data
      } catch (error: unknown) {
        catchError(error)
      }
    },
    async postUnsettledPurchase(unsettledPurchase: Purchase): Promise<void> {
      try {
        const res: AxiosResponse<PurchaseAddedId> = await axios.post(unsettledPurchasesApiUrl, unsettledPurchase)
        console.log(res)
        this.getUnsettledPurchases()
      } catch (error: unknown) {
        catchError(error)
      }
    },
    async deleteUnsettledPurchase(id: string): Promise<void> {
      try {
        const res: AxiosResponse<PurchaseAddedId> = await axios.delete(`${unsettledPurchasesApiUrl}/${id}`)
        console.log(res)
        this.getUnsettledPurchases()
      } catch (error: unknown) {
        catchError(error)
      }
    },
  },
})

export default useUnsettledPurchases
