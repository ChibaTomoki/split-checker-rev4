<script setup lang="ts">
import SummaryPart from './components/SummaryPart.vue'
import InputForm from './components/InputForm.vue'
import UnsettledList from './components/UnsettledList.vue'
import SettledList from './components/SettledList.vue'
import DeletedList from './components/DeletedList.vue'
</script>

<template>
  <SummaryPart />
  <InputForm />
  <UnsettledList />
  <SettledList />
  <DeletedList />
</template>
