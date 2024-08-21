<template>

    <span>脚手架</span><el-icon  v-if="collapse" style="margin-left: 5px;"><DArrowRight @click="$emit('collapse-toogle')" /></el-icon><el-icon v-else style="margin-left: 5px;"><DArrowLeft @click="$emit('collapse-toogle')"/></el-icon>

</template>
<script setup lang="ts">
defineProps(['collapse'])
defineEmits(['collapse-toogle'])
</script>
<style>

</style>