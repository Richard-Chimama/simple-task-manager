<template>
  <div class="container" >
    <label for="title">Column Name</label>
    <input type="text" name="title" v-model="title" @keyup.enter="addCol" />
    <input type="button" class="btn black" value="add column" @click="addCol" />
  </div>
</template>

<script setup>
import useBoardStore from "@/stores/boardStore";
import { useModalStore } from "@/stores/modal"
import { ref, computed } from 'vue'

const store = useBoardStore();
const modalStore = useModalStore();
const title = ref('')

const addCol = computed(()=> {
  if (title.value) {
    store.addColumn(title.value);
    title.value = '';
    modalStore.closeModal();
  }else{
    alert('Please enter a title')
  }
})
</script>

<style lang="scss"  scoped>
.container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    padding-top: 20px;

    & label {
        font-weight: bold;
        color:#000000;
    }

    & input[type = "text"] {
        width: 100%;
        outline: 1px solid rgba($color: #000000, $alpha: 0.3);
        height: 40px;
        padding-left: 8px;
        border-radius: 8px;
    }
     
}
</style>
