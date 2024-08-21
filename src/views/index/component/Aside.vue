<template>
    <el-menu :collapse-transition="false" default-active="2" class="el-menu-vertical-demo" background-color="#F2F5F7" style="border-right: 0;" :collapse="collapse">
        <el-sub-menu index="1">
            <template #title>
                <el-icon>
                    <location />
                </el-icon>
                <span>一级导航-1</span>
            </template>
            <el-menu-item index="1-1">一级导航-1-1</el-menu-item>
            <el-sub-menu index="1-4">
                <template #title><span>一级导航-1-2</span></template>
                <el-menu-item index="1-4-1">一级导航 1-2-1</el-menu-item>
                <el-menu-item index="1-4-1">一级导航 1-2-2</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <template #title>二级导航</template>
        </el-menu-item>

    </el-menu>
</template>

<script lang="ts" setup>
import { ref, } from 'vue'
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'

const props = defineProps(['collapse'])

const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
}
</style>