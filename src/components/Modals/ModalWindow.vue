<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="store.modalState?.component"
        class="modal-mask"
        @click.self="store.closeModal"
        aria-modal="true"
        role="dialog"
      >
        <div class="modal-container">
          <ModalCloseButton class="closeButton" @click="store.closeModal" />

          <component
            :is="store.modalState.component"
            v-bind="store.modalState.props"
          />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import { useModalStore } from "@/stores/modal";
import ModalCloseButton from "./ModalCloseButton.vue";

const store = useModalStore();

// Handle Escape Key
const handleKeydown = (e) => {
  if (e.key === "Escape") store.closeModal();
};

onMounted(() => window.addEventListener("keydown", handleKeydown));
onUnmounted(() => window.removeEventListener("keydown", handleKeydown));
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba($color: black, $alpha: 0.6);
  display: grid;
  place-items: center;
  backdrop-filter: blur(2px);
}

.modal-container {
  background: #fff;
  padding: 10px 30px 40px 30px;
  border-radius: 12px;
  position: relative;
  width: 90%;
  max-width: 614px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

// Transitions
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.closeButton {
  position: absolute;
  right: 35px;
  height: 35px;
  width: 35px;
  background-color: #fff;
  display: grid;
  justify-content: center;
  align-content: center;
  &:hover {
    border-radius: 100%;
    background-color: rgb(197, 195, 195);
    cursor: pointer;
  }
}
</style>
