<template>
  <div class="options">
    <div class="items"><FeEdit /><span>edit</span></div>
    <div class="items"><McDelete2Line /><span>delete</span></div>
  </div>
</template>

<script setup>
import { McDelete2Line } from "@kalimahapps/vue-icons";
import { FeEdit } from "@kalimahapps/vue-icons";
</script>
<style lang="scss" scope>
.options {
  background-color: #e8ecec;

  .items {
    height: 40px;
    color: #061010;
    font-weight: bold;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    &:hover {
      background-color: #061010;
      color: #e8ecec;
      cursor: pointer;
    }
  }
}
</style>
