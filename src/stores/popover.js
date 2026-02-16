import { shallowRef, ref } from "vue";
import { defineStore } from "pinia";

const initialState = { component: null, props: {} };

const usePopoverStore = defineStore("popover", () => {
  const state = shallowRef(initialState);
  const position = ref({ top: 0, left: 0 });

  function openPopover(event, component, props = {}) {
    const rect = event.target.getBoundingClientRect();

    position.value = {
      top: rect.bottom + window.scrollY + 5,
      left: rect.left + window.scrollX,
    };
    console.log(position.value)
    state.value = { component, props };
  }

  function closePopover() {
    state.value = { initialState };
  }

  return { state, position, openPopover, closePopover };
});

export default usePopoverStore;
