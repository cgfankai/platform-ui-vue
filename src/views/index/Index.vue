<template>

    <div class="head">
        <Head @collapse-toogle="collapseToogle()" :collapse="collapse"></Head>
    </div>
    <div class="aside" :style="{ 'width': mainLeftPx }">
        <Aside :collapse=collapse></Aside>
    </div>
    <div class="tags" :style="{ 'left': mainLeftPx }">
        <Tag></Tag>
    </div>
    <div class="main" :style="{ 'left': mainLeftPx }">
        <el-scrollbar height="110%">
            <RouterView></RouterView>
        </el-scrollbar>
    </div>
    <div class="bottom">
        <Bottom></Bottom>
    </div>

</template>
<script setup lang="ts">
import { RouterView } from 'vue-router';
import Head from './component/Head.vue';
import Aside from './component/Aside.vue';
import Bottom from './component/Bottom.vue';
import Tag from './component/Tag.vue';
import { ref, computed } from "vue";
const collapse = ref(false);
const mainLeftPx = computed(() => {
    return collapse.value ? "64px" : "200px"
})
function collapseToogle(){
    console.info(111)
    collapse.value = !collapse.value;
}

</script>
<style>
.head {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    height: 60px;
    background-color: #157FCC;
    color: white;
    line-height: 60px;
    padding: 0 10px;
}

.aside {
    position: absolute;
    top: 60px;
    left: 0px;
    bottom: 30px;
    background-color: #F2F5F7;
}

.tags {
    position: absolute;
    top: 60px;
    right: 0px;
    height: 30px;
    border-bottom: solid 1px #ddd;
}

.main {
    position: absolute;
    top: 90px;
    right: 0px;
    bottom: 30px;
    padding: 10px;
    border: solid 1px #ddd; 
    border-top: none;
}

.bottom {
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    height: 30px;
    background-color: #F2F5F7;
    padding-left: 10px;
    padding-right: 10px;
    line-height: 30px;
}
</style>