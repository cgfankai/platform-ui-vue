<template>
    <div id="table-contain" style="display: flex;flex-direction: column;" v-loading="loading">
        <div style="margin-bottom: 10px;" id="search-bar">
            <el-space wrap>
                <el-select placeholder="Select" style="width: 200px;" v-model="todoSelect">
                    <el-option key="1" label="待办事项" value="item.value" />
                    <el-option key="2" label="已办事项" value="item.value2" />
                    <el-option key="3" label="全部事项" value="item.value3" />
                </el-select>
                <el-button type="primary" :icon="Search" @click="getList()">搜索</el-button>
            </el-space>
        </div>
        <div style="flex: 1;overflow: hidden;display: flex;flex-direction: column;margin-bottom: 10px;">
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="trueName">
                    <template #header>
                        <span style="font-weight: bold;">姓名</span>
                        <el-input v-model="queryParam.trueName" size="small" placeholder="" />
                    </template>
                </el-table-column>
                <el-table-column prop="userCode">
                    <template #header>
                        <span style="font-weight: bold;display: block;">工号</span>
                        <el-input v-model="queryParam.userCode" size="small" placeholder="" />
                    </template>
                </el-table-column>
                <el-table-column prop="gender">
                    <template #header>
                        <span style="font-weight: bold;display: block;">性别</span>
                        <el-select v-model="queryParam.gender" placeholder="" size="small" style="width: 100%"
                            clearable>
                            <el-option key="1" label="男" value="1" />
                            <el-option key="2" label="女" value="2" />
                        </el-select>
                    </template>
                    <template #default="scope">
                        <el-tag :type="scope.row.tag == 1 ? 'primary' : 'success'" disable-transitions>{{
                            scope.row.gender }}</el-tag>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div>
            <el-pagination v-model:page-size="pageSize" :page-sizes="[100, 200, 300, 400]"
                v-model:current-page="currentPage" size="default" background
                layout="total, sizes, prev, pager, next, jumper" :total="tableDataTotal" style="float: right;" />
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
import { ref, onMounted, watch, computed } from 'vue';
import { Search } from '@element-plus/icons-vue'
import { listUser } from '@/api/system/sysuser';
const todoSelect = ref("item.value");
const loading = ref(false);
const queryParam = ref({
    gender: "",
    trueName: "",
    userCode: "",
})
const tableData = ref([]);
const tableDataTotal = ref(0);
const pageSize = ref(100)
const currentPage = ref(1)
const listParam = computed(() => {
    const filterRules: any[] = [];
    Object.entries(queryParam.value).forEach(([k, v]) => {
        if (v != null && v != "") {
            filterRules.push({
                field: k,
                op: "eq",
                value: v
            })
        }
    })
    return {
        filterRules: filterRules,
        currentPage: currentPage.value,
        pageSize: pageSize.value
    }
})
function resizeTableHeight() {
    let searchBarHeight = document.querySelector("#search-bar")?.clientHeight
    if (searchBarHeight == null) {
        searchBarHeight = 0
    }
    let tableContainElement = document.querySelector("#table-contain") as HTMLElement
    if (tableContainElement) {
        let tableContainElementStyle = tableContainElement.style;
        tableContainElementStyle.height = (window.innerHeight - searchBarHeight - 120) + 'px'
    }

}
function getList() {
    loading.value = true;
    listUser(listParam.value).then((response) => {
        tableData.value = response.data.data.records;
        tableDataTotal.value = response.data.data.total;
        loading.value = false;
    })
}
watch([pageSize, currentPage], ([newPageSize, newCurrentPage], [oldPageSize, oldCurrentPage]) => {
    getList();
})
onMounted(() => {
    resizeTableHeight();
    window.onresize = function () {
        resizeTableHeight();
    }
    getList()
});

</script>
<style>
.el-row {
    margin-bottom: 10px;
}
</style>