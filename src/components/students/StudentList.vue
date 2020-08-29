<template>
    <div class="student-list">
        <el-card>
            <el-form :inline="true" :model="formInline" class="demo-form-inline" size="small">
                <el-form-item label="姓名">
                    <el-input v-model="formInline.name" placeholder="姓名"></el-input>
                </el-form-item>
                <el-form-item label="学号">
                    <el-input v-model="formInline.number" placeholder="学号"></el-input>
                </el-form-item>
                <el-form-item label="班级">
                    <el-select v-model="formInline.region" placeholder="班级">
                    <el-option label="一班" value="1"></el-option>
                    <el-option label="二班" value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>
            <el-table :data="tableData" border style="width: 100%" >
                <el-table-column prop="name" label="姓名" align="center"></el-table-column>
                <el-table-column prop="number" label="学号" align="center"></el-table-column>
                <el-table-column prop="age" label="年龄" align="center"></el-table-column>
                <el-table-column prop="sex" label="性别" align="center"></el-table-column>
                <el-table-column prop="class" label="班级" align="center"></el-table-column>
                <el-table-column prop="address" label="地址" align="center"></el-table-column>
                <el-table-column prop="tel" label="联系方式" align="center"></el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <el-button type="primary size='mini" icon="el-icon-edit" @click="updateInfo(scope.row)"></el-button>
                        <el-button type="danger size='mini" icon="el-icon-delete"></el-button>
                    </template>
                </el-table-column>
            </el-table>
            <Page></Page>
        </el-card>
    </div>
</template>

<script>
import Page from '../common/Pageing'
export default {
    components: {
        Page
    },
    data(){
        return {
            tableData: [
                {
                name: 'wgy',
                number: '11',
                age: '11',   
                sex: '11',
                class: '11',
                address: '11',
                tel: '11'
                },
                {
                name: '11',
                number: '11',
                age: '11',   
                sex: '11',
                class: '11',
                address: '11',
                tel: '11'
                },
                {
                name: '11',
                number: '11',
                age: '11',   
                sex: '11',
                class: '11',
                address: '11',
                tel: '11'
                },
                {
                name: '11',
                number: '11',
                age: '11',   
                sex: '11',
                class: '11',
                address: '11',
                tel: '11'
                },
                {
                name: '11',
                number: '11',
                age: '11',   
                sex: '11',
                class: '11',
                address: '11',
                tel: '11'
                },
            ],
            formInline: {
                user: '',
            }
        }
    },
    created() {
        this.service.get('/studentList')
        .then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    },
    methods: {
        updateInfo(row) {
            console.log(row)
        },
        onSubmit() {
            console.log('submit!');
        }
    }
}
</script>

<style lang="scss">
.student-list {
    margin: 20px 0 ;
}
.demo-form-inline {
    text-align: left;
}
</style>