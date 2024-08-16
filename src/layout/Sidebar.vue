<template>

    <el-menu active-text-color="#157FCC" background-color="#F2F5F7" class="el-menu-vertical-demo" default-active="2"
        :collapse="!sideBarIsExpand" text-color="#000" @open="handleOpen" @close="handleClose"
        :collapse-transition="false"
        style="height: 100%;border-right-width: 0;">
        <el-sub-menu index="1">
            <template #title>
                <el-icon>
                    <location />
                </el-icon>
                <span>Navigator One</span>
            </template>
            <el-menu-item index="1-3">item three</el-menu-item>
            <el-sub-menu index="1-4">
                <template #title>item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
            <el-icon>
                <document />
            </el-icon>
            <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
            <el-icon>
                <setting />
            </el-icon>
            <span>Navigator Four</span>
        </el-menu-item>
    </el-menu>
</template>
<script lang="ts" setup>
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'
const props = defineProps(['sideBarIsExpand'])
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>
<style></style>