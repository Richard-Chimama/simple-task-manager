<script setup>
defineProps({
    height: { type: Number, default: 0 },
    width: { type: Number , default: 0 }
});

</script>

<template>
    <div
        class="spacer"
        :style="{
            height: height != null ? `${height}px` : undefined,
            width: width != null ? `${width}px` : undefined
        }"
    />
</template>

<style scoped lang="scss">
.spacer {
    flex-shrink: 0;
}
</style>