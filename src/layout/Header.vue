<template>
    <div style="line-height: 60px;color: white;">
        <h2>Java开发脚手架
            <el-icon v-if="!sideBarIsExpand" @click="$emit('change-sideIsExpand')">
                <Expand />
            </el-icon>
            <el-icon v-if="sideBarIsExpand" @click="$emit('change-sideIsExpand')">
                <Fold />
            </el-icon>
        </h2>
    </div>
</template>
<script setup lang="ts">
import { Expand, Fold } from '@element-plus/icons-vue'
const props = defineProps(['sideBarIsExpand'])

</script>
