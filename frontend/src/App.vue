<script setup lang="ts">
import CreatePerson from './components/CreatePerson.vue'
import SummaryPart from './components/SummaryPart.vue'
import InputForm from './components/InputForm.vue'
import UnsettledList from './components/UnsettledList.vue'
import SettledList from './components/SettledList.vue'
import DeletedList from './components/DeletedList.vue'
</script>

<template>
  <CreatePerson />
  <!-- <SummaryPart /> -->
  <Suspense>
    <InputForm />
    <template #fallback> Loading... </template>
  </Suspense>
  <!-- <UnsettledList /> -->
  <!-- <SettledList /> -->
  <!-- <DeletedList /> -->
</template>
