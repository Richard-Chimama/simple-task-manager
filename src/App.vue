<script setup>
import { ref, reactive, computed } from "vue";
import TasksColumn from "./components/TasksColumn.vue";
import Board from "./components/Board.vue";
import Filter from "./components/Filter.vue";
import ModalWindow from "./components/Modals/ModalWindow.vue";
import PopoverBase from "./components/popover/PopoverBase.vue"
import AddTaskModal from "./components/Modals/AddNewTaskModal.vue";
import AddColumnModal from "./components/Modals/AddColumnModal.vue";
import useTasksStore from "./stores/taskStore.js";
import useBoardStore from "./stores/boardStore.js";
import { useModalStore } from "@/stores/modal";

const storeBoard = useBoardStore();
const modalStore = useModalStore();

const appName = "Task manager";
let modalIsActive = ref(false);
</script>

<template>
  <main class="container">
    <div class="header">
      <div class="header-side">
        <h1>
          {{ appName }}
        </h1>
      </div>
      <div class="header-side">
        <button
          class="btn secondary"
          @click="modalStore.openModal(AddTaskModal , {})"
        >
          + Add Task
        </button>
      </div>
    </div>

    <div class="tasks">
      <!-- <Task @toggleTask="toggleTask" v-for="(task, index) in tasks" :task="task" :key="index" /> -->
      <!-- <TasksColumn /> -->
      <Board />
    </div>


    <ModalWindow />
    <PopoverBase />

  </main>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  .header-side {
    display: flex;
    align-items: center;

    h1 {
      text-transform: capitalize;
      font-size: 42px;
      font-weight: 700;
      line-height: 47px;
      letter-spacing: 0em;
      text-align: left;
    }

    .secondary {
      margin-left: 12px;
    }
  }
}

.filters {
  display: flex;
  flex-direction: column;
  margin: 40px 0;

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
  }

  .badges {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin: 14px 0;
    align-items: center;
  }

  .clear {
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    cursor: pointer;
  }
}

.tasks {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
