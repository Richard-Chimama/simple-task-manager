<template>
  <div class="container" >
    <label for="title">Column Name</label>
    <input type="text" name="title" v-model="title" />
    <input type="button" class="button" value="add column" @click="addCol()" />
  </div>
</template>

<script setup>
import useBoardStore from "@/stores/boardStore";
import { ref } from 'vue'

const store = useBoardStore();
const title = ref('')

function addCol() {
  if (title.value) {
    store.addColumn(1, title.value);
    title.value = '';
    store.isModalCol = false
  }
}
</script>

<style lang="scss"  scoped>
.container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;

    & label {
        font-weight: bold;
    }

    & input[type = "text"] {
        width: 100%;
        outline: 1px solid rgba($color: #000000, $alpha: 0.3);
        height: 40px;
        padding-left: 8px;
        border-radius: 8px;
    }
     
     & .button {
        height: 40px;
        background-color:#000000;
        color: white;
        border-radius: 8px;
    }
}
</style>
