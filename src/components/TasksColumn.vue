<script setup>
import { computed } from "vue";
import useBoardStore from "@/stores/boardStore";
import useTasksStore from "@/stores/taskStore";
import Tasks from "./Task.vue";

const props = defineProps(["column"]);
const store = useBoardStore();
const taskStore = useTasksStore();

const columnTasks = computed(() => {
  return props.column.taskIds.map((id) =>
    taskStore.tasks.find((task) => task.id == id),
  );
});
</script>

<template>
  <div class="column">
    <h4>{{ column.columnName }}</h4>
    <div class="tasks">
      <Tasks
        v-for="(task, index) in columnTasks"
        :task="task"
        :key="index"
        draggable="true"
        @dragstart="
          store.onDragStart({
            taskId: task.id,
            sourceColumnId: column.columnId,
          })
        "
      />
    </div>
    <!-- <button v-if="store.boards[0].columns[0].columnName == column.columnName">
      add task
    </button> -->
  </div>
</template>

<style scoped lang="scss">
.column {
  min-height: 60vh;
  height: 90vh;
  width: 250px;
  background-color: bisque;
  color: black;
  padding: 5px 10px;
  overflow-y: scroll;
  padding: 0;
  position: relative;

  h4 {
    position: sticky;
    top: 0px;
    z-index: 99;
    text-align: center;
    background-color: black;
    color: white;
    width: 100%;
    padding: 8px;
  }
  .tasks {
    padding: 5px 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  & button {
    position: sticky;
    bottom: 10px;
    height: 40px;
    width: 90%;
    margin: 0px 5%;
    border-radius: 8px;
    background-color: forestgreen;
    color: white;
    font-weight: bold;
  }
}
</style>
