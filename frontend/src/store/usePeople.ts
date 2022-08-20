import { defineStore } from 'pinia'
import axios, { AxiosResponse } from 'axios'
import { PersonAddedId } from '../model'

interface State {
  people: PersonAddedId[]
}

const peopleApiUrl = 'http://localhost:5172/api/v1/people'

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

const usePeople = defineStore('people', {
  state: (): State => ({
    people: [],
  }),
  getters: {
    peopleGetter: (state): PersonAddedId[] => state.people,
  },
  actions: {
    async getPeople(): Promise<void> {
      try {
        const res: AxiosResponse<PersonAddedId[]> = await axios.get(peopleApiUrl)
        console.log(res)
        this.people = res.data
      } catch (error: unknown) {
        catchError(error)
      }
    },
    async postPerson(name: string): Promise<void> {
      try {
        const res: AxiosResponse<PersonAddedId> = await axios.post(peopleApiUrl, { name })
        console.log(res)
        this.getPeople()
      } catch (error: unknown) {
        catchError(error)
      }
    },
    async deletePerson(id: string): Promise<void> {
      try {
        const res: AxiosResponse<PersonAddedId> = await axios.delete(`${peopleApiUrl}/${id}`)
        console.log(res)
        this.getPeople()
      } catch (error: unknown) {
        catchError(error)
      }
    },
  },
})

export default usePeople
