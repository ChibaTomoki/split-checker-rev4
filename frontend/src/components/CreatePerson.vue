<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import usePeople from '../store/usePeople'

const peopleStore = usePeople()
const { peopleGetter } = storeToRefs(peopleStore)
const { getPeople, postPerson, deletePerson } = peopleStore
const inputPersonName = ref('')
</script>

<template>
  <div class="container">
    <h3>CreatePerson</h3>
    <div>
      <label>
        名前
        <input type="text" v-model="inputPersonName" />
      </label>
    </div>
    <button @click="getPeople">get</button>
    <button @click="postPerson(inputPersonName)">post</button>
    <ul>
      <template v-for="person in peopleGetter" :key="person._id">
        <li>
          <span>{{ person.name }}</span>
          <button @click="deletePerson(person._id)">削除</button>
        </li>
      </template>
    </ul>
  </div>
</template>
