import { defineStore } from "pinia";
import { ref } from "vue";

const useBoardStore = defineStore("boards", () => {
  const data = {
    boards: {
      1: {
        boardId: 1,
        boardName: "Alpha",
        columnOrder: [1, 2, 3],
        columns: {
          1: {
            columnId: 1,
            columnName: "To Do",
            taskIds: [1, 2, 3],
          },
          2: {
            columnId: 2,
            columnName: "In Progress",
            taskIds: [4, 5],
          },
          3: {
            columnId: 3,
            columnName: "DONE",
            taskIds: [6,7],
          },
        },
      },
    }
  };

  const boards = ref(data.boards);
  let isModalTask = ref(false);
  let isModalCol = ref(false);
  let draggedItem = ref(null);
 

  function addColumn(boardId, colName) {
    const getboard = boards.value.find((board) => board.boardId == boardId);
    const colId = Math.max(...getboard.columns.map((task) => task.id)) + 1;

    getboard.columns.push({
      columnId: colId,
      columnName: colName,
      tasks: [],
    });
  }

  function onDragStart(taskObj) {
    draggedItem.value = taskObj;
  }

  const onDrop = (colId) => {
    if (draggedItem.value) {
      let data = {...draggedItem.value}
      data.destColId = colId
      console.log("Your dragged Item: ", draggedItem.value);
      console.log("Your data: ", data);
      
      const source = boards.value[1].columns[data.sourceColumnId];
      const dest = boards.value[1].columns[data.destColId];

      source.taskIds = source.taskIds.filter(id => id !== data.taskId);
      dest.taskIds.push(data.taskId)
    }
  };

  return {
    boards,
    draggedItem,
    isModalTask,
    isModalCol,
    addColumn,
    onDragStart,
    onDrop,
  };
});

export default useBoardStore;

