<template>

    <div style="display: flex;justify-content: flex-start;padding: 0 10px;">
        <div class="tag active">
            <RouterLink to="/main">● 门户</RouterLink>
        </div>
        <div class="tag">
            <RouterLink to="/system/sysuser">用户</RouterLink>
        </div>
        <div class="tag">
            <RouterLink to="/login">登录页</RouterLink>
        </div>
        <div class="tag" v-for="o in 10"  :key="o">
            <RouterLink to="/main">测试页面{{ o }}</RouterLink>
        </div>
    </div>






</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router';


</script>
<style scoped>
.tag {
    border: 1px solid #ddd;
    margin: 1px;
    padding: 0px 10px;
}

a:-webkit-any-link{
    color: #495060;
    text-decoration: none;
    line-height: 24px;
    font-size: 12px;
}
.active{
    background-color: #409EFF;
    border-color: #409EFF;
    color: white;
}
.active a:-webkit-any-link{
    background-color: #409EFF;
    border-color: #409EFF;
    color: white;
}
</style>