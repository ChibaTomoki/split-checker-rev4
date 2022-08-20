<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { watch } from 'vue'
import useUnsettledPurchases from '../store/useUnsettledPurchases'

const unsettledPurchasesStore = useUnsettledPurchases()
const { unsettledPurchasesGetter } = storeToRefs(unsettledPurchasesStore)
const { getUnsettledPurchases, deleteUnsettledPurchase } = unsettledPurchasesStore

await getUnsettledPurchases()

watch(
  () => unsettledPurchasesGetter,
  () => getUnsettledPurchases()
)
</script>
<template>
  <div class="container">
    <h3>UnsettledList</h3>
    <template v-for="unsettledPurchase in unsettledPurchasesGetter" :key="unsettledPurchase._id">
      <div class="unsettled-purchase-list">
        <div>購入品: {{ unsettledPurchase.name }}</div>
        <template v-for="person in unsettledPurchase.people" :key="person._id">
          <div>{{ person.name }}の払った額: {{ person.paid }}</div>
        </template>
        <template v-for="person in unsettledPurchase.people" :key="person._id">
          <div>{{ person.name }}の払う額: {{ person.toPay }}</div>
        </template>
        <div>メモ: {{ unsettledPurchase.note }}</div>
      </div>
      <button @click="deleteUnsettledPurchase(unsettledPurchase._id)">delete</button>
    </template>
  </div>
</template>

<style scoped>
.unsettled-purchase-list {
  margin-top: 1rem;
}
</style>
