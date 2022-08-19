<script setup lang="ts">
import { reactive, ref } from 'vue'
import axios from 'axios'

const purchaseName = ref('')
const personsPurchases = reactive({
  foo: {
    paid: 0,
    toPay: 0,
  },
  bar: {
    paid: 0,
    toPay: 0,
  },
})
const purchaseNote = ref('')

const fetch = async (): Promise<void> => {
  const getData = await axios.get('http://localhost:5172/api/v1/purchases')
  console.log(getData)
}
const post = async (): Promise<void> => {
  const postedData = await axios.post('http://localhost:5172/api/v1/purchases', {
    name: purchaseName.value,
    persons: [
      {
        index: 0,
        name: 'foo',
        paid: personsPurchases.foo.paid,
        toPay: personsPurchases.foo.toPay,
      },
      {
        index: 1,
        name: 'bar',
        paid: personsPurchases.bar.paid,
        toPay: personsPurchases.bar.toPay,
      },
    ],
    note: purchaseNote.value,
  })
  console.log(postedData)
}
</script>
<template>
  <div>InputForm</div>
  <label>
    購入品
    <input type="text" v-model="purchaseName" />
  </label>
  <div>debug: {{ purchaseName }}</div>
  <label>
    fooの払った額
    <input type="text" v-model.number="personsPurchases.foo.paid" />
  </label>
  <div>debug: {{ personsPurchases.foo.paid }}</div>
  <label>
    fooの払う額
    <input type="text" v-model.number="personsPurchases.foo.toPay" />
  </label>
  <div>debug: {{ personsPurchases.foo.toPay }}</div>
  <label>
    barの払った額
    <input type="text" v-model.number="personsPurchases.bar.paid" />
  </label>
  <div>debug: {{ personsPurchases.bar.paid }}</div>
  <label>
    barの払う額
    <input type="text" v-model.number="personsPurchases.bar.toPay" />
  </label>
  <div>debug: {{ personsPurchases.bar.toPay }}</div>
  <label>
    メモ
    <input type="text" v-model="purchaseNote" />
  </label>
  <div>debug: {{ purchaseNote }}</div>
  <button @click="fetch">fetch</button>
  <button @click="post">post</button>
</template>
