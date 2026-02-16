<script setup>
import { ref } from "vue";
import useTasksStore from "@/stores/taskStore.js";
import { useModalStore } from "@/stores/modal";

const taskStore = useTasksStore();
const modalStore = useModalStore();

const initialState = { name: "", description: "", completed: false };
const newTask = ref({ ...initialState });

function addNewTask() {
  const { name, description } = newTask.value;

  if (!name.trim() || !description.trim()) {
    alert("Please ensure to have both the title and description entered!");
    return;
  }

  const taskToSave = { ...newTask.value };

  taskStore.addTask(taskToSave);

  newTask.value = { ...initialState };
  modalStore.closeModal(); 
}
</script>

<template>
  <div class="form">
    <header>
      <h3>Add a new task</h3>
    </header>

    <div class="form-item">
      <label for="title">Title *</label>
      <input
        id="title"
        v-model="newTask.name"
        type="text"
        placeholder="e.g. Design Landing Page"
        @keyup.enter="addNewTask"
      />
    </div>

    <div class="form-item">
      <label for="description">Description *</label>
      <textarea
        id="description"
        v-model="newTask.description"
        rows="4"
        placeholder="What needs to be done?"
      />
    </div>

    <button 
      class="btn black" 
      :disabled="!newTask.name || !newTask.description"
      @click="addNewTask"
    >
      Add Task
    </button>
  </div>
</template>

<style lang="scss" scope>
.form{
  display: flex;
  flex-direction: column;
  padding-top: 20px;

  h3{
    color:#000000;
  }

  .form-item{
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
  }

  & label{
    height: 40px;
    font-weight: bold;
    color: black;
  }
  #title, #description {
    outline: 1px solid rgba($color: #000000, $alpha: 0.5);
    border-radius: 8px;
  }
  #title{
    height: 40px;
    padding-left: 8px;
  }
  #description{
    padding: 8px;
  }
}

</style>
