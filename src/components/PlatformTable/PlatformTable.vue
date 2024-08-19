<template>
    <div id="table-contain" style="display: flex;flex-direction: column;">
        <div style="margin-bottom: 10px;" id="search-bar">
            <el-space wrap>
                <el-select placeholder="Select" style="width: 120px;" v-model="select1">
                    <el-option key="1" label="待办事项" value="item.value" />
                    <el-option key="2" label="已办事项" value="item.value2" />
                    <el-option key="3" label="全部事项" value="item.value3" />
                </el-select>
                <el-input style="max-width: 300px" placeholder="请输入职业">
                    <template #prepend>职业：</template>
                </el-input>
                <el-input style="max-width: 300px" placeholder="请输入姓名">
                    <template #prepend>姓名：</template>
                </el-input>
                <el-button type="primary" :icon="Search">搜索</el-button>
                <el-button type="">重置</el-button>
            </el-space>
        </div>
        <div style="flex: 1;overflow: hidden;display: flex;flex-direction: column;margin-bottom: 10px;">
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="date" label="Date" width="180" />
                <el-table-column prop="name" label="Name" width="180" />
                <el-table-column prop="address" label="Address" />
            </el-table>
        </div>
        <div>
            <el-pagination current-page='1' :page-sizes="[100, 200, 300, 400]" size="default"
                layout="total, sizes, prev, pager, next, jumper" :total="400" style="float: right;"/>
        </div>
    </div>
    <el-row id="search-bar">

    </el-row>
    <el-row>

    </el-row>
    <el-row>

    </el-row>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Search } from '@element-plus/icons-vue'
const select1 = ref("item.value");
const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
]
for (let i = 0; i < 100; i++) {
    tableData.push({
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    })
}
function resizeTableHeight() {
    let searchBarHeight = document.querySelector("#search-bar")?.clientHeight
    if (searchBarHeight == null) {
        searchBarHeight = 0
    }
    document.querySelector("#table-contain").style.height =  (window.innerHeight - searchBarHeight - 120) + 'px'
}
onMounted(() => {
    resizeTableHeight();
    window.onresize = function () {
        resizeTableHeight();
    }
});

</script>
<style>
.el-row {
    margin-bottom: 10px;
}
</style>