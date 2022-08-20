<script setup lang="ts">
import { ref } from 'vue'
import usePeople from '../store/usePeople'

const { getPeople, postPerson } = usePeople()
const personName = ref('')
</script>
<template>
  <div class="container">
    <h3>CreatePerson</h3>
    <div>
      <label>
        名前
        <input type="text" v-model="personName" />
      </label>
    </div>
    <button @click="getPeople">get</button>
    <button @click="postPerson(personName)">post</button>
  </div>
</template>

<style scoped>
.container {
  background: lightgray;
  margin: 4px;
}
</style>
