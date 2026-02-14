<script setup>
import useBoardStore from "@/stores/boardStore";
import { reactive } from "vue";

const store = useBoardStore();

const newTask = reactive({title:'', description:''})

function addNewtask(){
    store.addTask(newTask.title, newTask.description)
    console.log('clicked')
}

</script>

<template>
  <div class="form">
    <div class="form-item">
      <h3>Add a new task</h3>
      <label for="title"> Title *</label>
      <input
        type="text"
        name="title"
        v-model="newTask.title"
        placeholder="Enter a title..."
      /><br />
      <label for="description"> Description *</label>
      <textarea
        name="description"
        v-model="newTask.description"
        rows="4"
        placeholder="Enter a description..."
      /><br />
      <button class="btn gray" @click="addNewtask()">Add Task</button>
    </div>
  </div>
</template>
