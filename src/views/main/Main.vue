<template>
    <el-row :gutter="20">
        <el-col :span="12">
            <el-card style="">
                <template #header>
                    <div class="card-header">
                        <span>我的待办</span>
                    </div>
                </template>
                <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
            </el-card>

        </el-col>
        <el-col :span="12">
            <el-card style="">
                <template #header>
                    <div class="card-header">
                        <span>我的已办</span>
                    </div>
                </template>
                <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
            </el-card>
        </el-col>
    </el-row>
    <el-row :gutter="20" style="margin-top: 10px;">
        <el-col :span="24">
            <el-card>
                <div id="chart1" style="height: 500px;"></div>
            </el-card>
        </el-col>
    </el-row>

</template>
<script lang="ts" setup>
import * as echarts from 'echarts';
import { onMounted } from 'vue';
onMounted(() => {
    var chartDom = document.getElementById('chart1');
    var myChart = echarts.init(chartDom);
    myChart.setOption({
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
            {
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }
        ]
    });
});

</script>