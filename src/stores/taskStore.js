import { defineStore } from "pinia";
import { reactive, ref, computed } from "vue";
import useBoardStore from "./boardStore";

const useTasksStore = defineStore("tasks", () => {
  const boardStore = useBoardStore();
  let tasks = reactive([
    {
      name: "Website design",
      description:
        "Define the style guide, branding and create the webdesign on Figma.",
      completed: true,
      id: 1,
    },
    {
      name: "Website development",
      description: "Develop the portfolio website using Vue JS.",
      completed: false,
      id: 2,
    },
    {
      name: "Hosting and infrastructure",
      description:
        "Define hosting, domain and infrastructure for the portfolio website.",
      completed: false,
      id: 3,
    },
    {
      name: "Composition API",
      description:
        "Learn how to use the composition API and how it compares to the options API.",
      completed: true,
      id: 4,
    },
    {
      name: "Pinia",
      description: "Learn how to setup a store using Pinia.",
      completed: true,
      id: 5,
    },
    {
      name: "Groceries",
      description: "Buy rice, apples and potatos.",
      completed: false,
      id: 6,
    },
    {
      name: "Bank account",
      description: "Open a bank account for my freelance business.",
      completed: false,
      id: 7,
    },
  ]);

  let filterBy = ref("");

  function setFilter(value) {
    filterBy.value = value;
  }

  const filteredTasks = computed(() => {
    switch (filterBy.value) {
      case "todo":
        return tasks.filter((task) => !task.completed);
      case "done":
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  });

  function addTask(newTask) {
    const nextId =
      tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;
    newTask.id = nextId;
    tasks.push(newTask);
    boardStore.addTaskToColumn(nextId);
  }
  function toggleTask(id) {
    tasks.forEach((t) => {
      if (t.id == id) {
        t.completed = !t.completed;
      }
    });
  }

  return {
    tasks,
    filterBy,
    addTask,
    setFilter,
    filteredTasks,
  };
});

export default useTasksStore;
