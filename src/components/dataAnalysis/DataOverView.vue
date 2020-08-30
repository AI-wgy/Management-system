<template>
    <div class="data-over-view">
        <el-card>
            <div id="main1"></div>
        </el-card>
        <el-card>
            <div id="main2"></div>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return{

        }
    },
    mounted(){
        //echarts是用canvas写的，canvas属于html5标签，属于dom结构，所以要用的话需要放到mounted里

        // 基于准备好的dom，初始化echarts实例
        var myChart1 = this.echarts.init(document.getElementById('main1'));
        // 绘制图表
        myChart1.setOption({
            title: {
                text: 'echarts-demo1'
            },
            tooltip: {},
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });

        var myChart2 = this.echarts.init(document.getElementById('main2'));
        myChart2.setOption({
            color: ["blue"],
            textStyle: {
                color: 'green'
            },
            title: {
                text: 'echarts-demo2'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                // boundaryGap: [0, 0.01],
                min: 0,
                max: 100,
                interval: 25
            },
            yAxis: {
                type: 'category',
                data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
            },
            series: [
                {
                    name: '2011年',
                    type: 'bar',
                    data: [18, 23, 29, 10, 13, 63]
                }
            ]
        })

    }
}
</script>

<style lang="scss">
.data-over-view {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    .el-card {
        width: 50%;
        #main1, #main2 {
            height: 500px;
        }
    }
    // 使用echarts必须给宽高
}
</style>