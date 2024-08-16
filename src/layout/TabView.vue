<template>
    <RouterLink to="/4041" style="border: 1px solid #d8dce5;" @contextmenu.prevent.native="rightClickHandler($event)">
        <span>首页</span>
    </RouterLink>
    <RouterLink to="/system/sysuser" style="border: 1px solid #d8dce5;" @contextmenu.prevent.native="rightClickHandler($event)">
        <span>sysuser</span>
    </RouterLink>

    <ul v-show="tagMenuVisible" :style="{ left: left + 'px', top: top + 'px' }" class="contextmenu">
        <li><el-icon>
                <RefreshRight />
            </el-icon> 刷新页面</li>
        <li><el-icon>
                <Close />
            </el-icon> 关闭当前</li>
        <li><el-icon>
                <CircleClose />
            </el-icon> 关闭其他</li>
        <li><el-icon>
                <Back />
            </el-icon> 关闭左侧</li>
        <li><el-icon>
                <Right />
            </el-icon> 关闭右侧</li>
        <li><el-icon>
                <CircleClose />
            </el-icon> 全部关闭</li>
    </ul>


</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import { RefreshRight, Close, CircleClose, Back, Right } from '@element-plus/icons-vue'
const tagMenuVisible = ref(false)
const left = ref(0)
const top = ref(0)
const rightClickHandler = function (e: PointerEvent) {
    tagMenuVisible.value = true;
    left.value = e.clientX
    top.value = e.clientY
}
function closeMenu() {
    tagMenuVisible.value = false;
}
watch(tagMenuVisible, (value) => {
    if (value) {
        document.body.addEventListener('click', closeMenu)
    } else {
        document.body.addEventListener('click', closeMenu)
    }
})
</script>
<style scoped>
.contextmenu {
    margin: 0;
    background: #fff;
    z-index: 3000;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);

    li {
        margin: 0;
        padding: 7px 16px;
        cursor: pointer;

        &:hover {
            background: #eee;
        }
    }
}
</style>