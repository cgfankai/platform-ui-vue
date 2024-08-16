<template>

    <el-container style="height: 100vh;">
        <el-header style="background-color: #409EFF;">
            <Header :sideBarIsExpand="sideBarIsExpand" @change-sideIsExpand="sideBarIsExpand = !sideBarIsExpand">
            </Header>
        </el-header>
        <el-container>
            <el-aside :width="sideBarIsExpand ? '200px' : '64px'">
                <SideBar :sideBarIsExpand="sideBarIsExpand"></SideBar>
            </el-aside>
            <el-container>
                <el-header style="height: 30px;padding: 5px;">
                    <TabRow></TabRow>
                </el-header>
                <el-main style="">
                    <RouterView />
                </el-main>
            </el-container>
        </el-container>
    </el-container>

</template>
<script setup lang="ts">
import SideBar from '@/layout/Sidebar.vue';
import Header from '@/layout/Header.vue';
import TabRow from '@/layout/TabRow.vue';
import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue';
import { getRouters } from "@/api/menu"
const sideBarIsExpand = ref(true);
getRouters()
</script>
<style lang="">

</style>