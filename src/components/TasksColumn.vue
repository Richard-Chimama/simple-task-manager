<script setup>
import { computed } from "vue";
import { ChMenuKebab } from "@kalimahapps/vue-icons";
import useBoardStore from "@/stores/boardStore";
import useTasksStore from "@/stores/taskStore";
import usePopoverStore from "@/stores/popover"
import ColumPopover from "@/components/popover/ColumPopover.vue"
import Tasks from "./Task.vue";

const props = defineProps(["column"]);
const store = useBoardStore();
const taskStore = useTasksStore();
const popoverStore = usePopoverStore()

const columnTasks = computed(() => {
  return props.column.taskIds.map((id) =>
    taskStore.tasks.find((task) => task.id == id),
  );
});

const openOptions = (event)=>{
  popoverStore.openPopover(event, ColumPopover)
};

</script>

<template>
  <div class="column">
    <div class="col-header">
      <h4>{{ column.columnName }}</h4>
      <ChMenuKebab class="menu-icon" @click.stop="openOptions" />
    </div>
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
  min-height: 450px;
  height: 100%;
  width: 250px;
  background-color: rgba(189, 188, 186, 0.2);
  color: black;
  padding: 5px 10px;
  overflow-y: scroll;
  padding: 0;
  position: relative;

  .col-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: #192e2e;

    & .menu-icon {
      color: white;
      width: 30px;
      font-size: 24px;
      cursor: pointer;
    }
  }

  h4 {
    flex-grow: 1;
    position: sticky;
    top: 0px;
    z-index: 99;
    text-align: center;
    color: white;
    padding: 8px;
    text-transform: uppercase;
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
