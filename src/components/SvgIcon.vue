<script setup lang="ts">
import { computed, defineProps } from 'vue';

const prop = defineProps({
    icon: {
        type: String,
        required: true
    }
})
const iconName = computed(() => {
    return "#icon-" + prop.icon
})

</script>
<template>
    <svg class="svg-icon" aria-hidden="true">   
        <use :xlink-href="iconName"></use>
    </svg>
</template>
<style>
    .svg-icon{
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>