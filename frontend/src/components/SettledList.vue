<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { watch } from 'vue'
import usePurchases from '../store/usePurchases'

const purchasesStore = usePurchases()
const { purchasesGetter } = storeToRefs(purchasesStore)
const { getPurchases, changePurchaseStage } = purchasesStore

await getPurchases()

watch(
  () => purchasesGetter,
  () => getPurchases()
)
</script>
<template>
  <div class="container">
    <h3>精算済みリスト</h3>
    <template v-for="purchase in purchasesGetter" :key="purchase._id">
      <div v-if="purchase.stage === 'Settled'" class="purchaseList">
        <div>購入品: {{ purchase.name }}</div>
        <template v-for="person in purchase.people" :key="person._id">
          <div>{{ person.name }}の払った額: {{ person.paid }}</div>
        </template>
        <template v-for="person in purchase.people" :key="person._id">
          <div>{{ person.name }}の払う額: {{ person.toPay }}</div>
        </template>
        <div>メモ: {{ purchase.note }}</div>
        <button @click="changePurchaseStage(purchase._id, 'Unsettled')">未精算リストに復元</button>
        <button @click="changePurchaseStage(purchase._id, 'Archived')">削除</button>
      </div>
    </template>
  </div>
</template>

<style scoped>
.purchaseList {
  margin-top: 1rem;
}
</style>
