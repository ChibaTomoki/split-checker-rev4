<script setup lang="ts">
import CreatePerson from './components/CreatePerson.vue'
import SummaryPart from './components/SummaryPart.vue'
import InputForm from './components/InputForm.vue'
import UnsettledList from './components/UnsettledList.vue'
import SettledList from './components/SettledList.vue'
import ArchivedList from './components/ArchivedList.vue'
</script>

<template>
  <CreatePerson />
  <!-- <SummaryPart /> -->
  <Suspense>
    <InputForm />
    <template #fallback> Loading... </template>
  </Suspense>
  <Suspense>
    <UnsettledList />
    <template #fallback> Loading... </template>
  </Suspense>
  <Suspense>
    <SettledList />
    <template #fallback> Loading... </template>
  </Suspense>
  <Suspense>
    <ArchivedList />
    <template #fallback> Loading... </template>
  </Suspense>
</template>
