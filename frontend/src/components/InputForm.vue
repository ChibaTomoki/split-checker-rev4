<script setup lang="ts">
import { reactive, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { Purchase } from '../model'
import usePeople from '../store/usePeople'
import useUnsettledPurchases from '../store/useUnsettledPurchases'

const peopleStore = usePeople()
const { peopleGetter } = storeToRefs(peopleStore)
const { getPeople } = peopleStore
const { postUnsettledPurchase } = useUnsettledPurchases()

await getPeople()
const inputPurchase = reactive<Purchase>({
  name: '',
  people: peopleGetter.value.map((x) => ({
    _id: x._id,
    name: x.name,
    paid: 0,
    toPay: 0,
  })),
  note: '',
})

watch(
  () => peopleGetter.value,
  () =>
    (inputPurchase.people = peopleGetter.value.map((x) => ({
      _id: x._id,
      name: x.name,
      paid: 0,
      toPay: 0,
    })))
)
</script>

<template>
  <div class="container">
    <h3>InputForm</h3>
    <div>
      <label for="name"> 購入品 </label>
      <input id="name" type="text" v-model="inputPurchase.name" />
    </div>
    <template v-for="person in inputPurchase.people" :key="person._id">
      <div>
        <label :for="person._id"> {{ person.name }}の払った額</label>
        <input :id="person._id" type="number" v-model.number="person.paid" />
      </div>
    </template>
    <template v-for="person in inputPurchase.people" :key="person._id">
      <div>
        <label :for="person._id"> {{ person.name }}の払う額</label>
        <input :id="person._id" type="number" v-model.number="person.toPay" />
      </div>
    </template>
    <div>
      <label for="note"> メモ </label>
      <input id="note" type="text" v-model="inputPurchase.note" />
    </div>
    <button @click="postUnsettledPurchase(inputPurchase)">post</button>
  </div>
</template>
