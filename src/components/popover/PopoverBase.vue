<template>
  <Teleport to="body">
    <Transition name="pop-fade">
      <div
        v-if="store.state.component"
        class="popover-wrapper"
        :style="{
          top: `${store.position.top}px`,
          left: `${store.position.left}px`,
        }"
        v-click-outside="store.closePopover"
      >
        <component :is="store.state.component" v-bind="store.state.props" />
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import usePopoverStore from "@/stores/popover.js";

const store = usePopoverStore();
</script>

<style scoped>
.popover-wrapper {
  position: absolute;
  z-index: 2000;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border: 1px solid #eee;
  min-width: 150px;
}

.pop-fade-enter-active,
.pop-fade-leave-active {
  transition: opacity 0.2s;
}
.pop-fade-enter-from,
.pop-fade-leave-to {
  opacity: 0;
}
</style>
