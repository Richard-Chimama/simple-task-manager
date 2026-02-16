import { shallowRef } from "vue";
import { defineStore } from "pinia";
import AddNewTaskModal from "@/components/Modals/AddNewTaskModal.vue";
import AddNewProjectModal from "@/components/Modals/AddNewProjectModal.vue";

const basicState = { component: null, props:{} };

export const useModalStore = defineStore("modal-store", () => {
  const modalState = shallowRef(basicState);

  function openModal(component, props ={}) {
    modalState.value = { component, props };
    const body = document.body;
    if (body) body.style.overflow = "hidden";
  }

  function closeModal() {
    modalState.value = basicState;
    const body = document.body;
    if (body) body.style.overflow = "auto";
  }

  function openAddTaskModal() {
    openModal({ component: AddNewTaskModal });
  }

  function openAddBoardModal() {
    openModal({ component: AddNewProjectModal });
  }

  return {
    modalState,
    openModal,
    closeModal,
    openAddTaskModal,
    openAddBoardModal,
  };
});
