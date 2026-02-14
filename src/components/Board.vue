<script setup>
//import useTasksStore from "../stores/taskStore";
import useBoardStore from "@/stores/boardStore";
import { storeToRefs } from "pinia";
import TasksColumn from "./TasksColumn.vue";

const store = useBoardStore();
const { boards } = storeToRefs(store);
</script>

<template>
  <div>
    <div class="board">
        <div v-for="(column, index) in boards[1].columnOrder" :key="index">
          <TasksColumn
            :column="boards[1].columns[column]"
            @drop="store.onDrop(boards[1].columns[column].columnId)"
            @dragover.prevent
          />
        </div>
      <button @click="store.isModalCol = true">+ add</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.board {
  width: 100%;
  display: flex;
  gap: 8px;

  & button {
    height: 40px;
    width: 60px;
    border-radius: 8px;
    font-weight: bold;
    padding: 5px;
  }
}
</style>
