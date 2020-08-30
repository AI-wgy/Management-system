<template>
    <div class="student-list">
        <el-card>
            <el-form :inline="true" :model="formInline" class="demo-form-inline" size="small">
                <el-form-item>
                    <el-button type="primary" @click="addStudent">新增</el-button>
                </el-form-item>
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
                <el-table-column prop="name" label="姓名" align="center" width="100px"></el-table-column>
                <el-table-column prop="number" label="学号" align="center"></el-table-column>
                <el-table-column prop="age" label="年龄" align="center" width="100px"></el-table-column>
                <el-table-column prop="sex_text" label="性别" align="center" width="100px"></el-table-column>
                <el-table-column prop="class" label="班级" align="center" width="140px"></el-table-column>
                <el-table-column prop="state" label="状态" align="center" width="100px"></el-table-column>
                <el-table-column prop="address" label="地址" align="center"></el-table-column>
                <el-table-column prop="tel" label="联系方式" align="center"></el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <el-button type="primary size='mini" icon="el-icon-edit" @click="updateInfo(scope.row)"></el-button>
                        <el-button type="danger size='mini" icon="el-icon-delete" @click="del"></el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 弹窗区域 -->
            <el-dialog :title="state ? '修改学生信息' : '新增学生信息'" :visible.sync="dialogFormVisible" width="500px">
                <el-form :model="form">
                    <el-form-item label="姓名" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="学号" :label-width="formLabelWidth">
                        <el-input v-model="form.number" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="年龄" :label-width="formLabelWidth">
                        <el-input v-model="form.age" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="性别" :label-width="formLabelWidth">
                        <el-radio v-model="form.sex" label="1">男</el-radio>
                        <el-radio v-model="form.sex" label="2">女</el-radio>
                    </el-form-item>
                    <el-form-item label="班级" :label-width="formLabelWidth">
                        <!-- <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option> -->
                        <el-input v-model="form.class" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="地址" :label-width="formLabelWidth">
                        <el-input v-model="form.address" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="联系方式" :label-width="formLabelWidth">
                        <el-input v-model="form.tel" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="sure">确 定</el-button>
                </div>
            </el-dialog>
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
                
            ],
            formInline: {
                user: '',
            },
            dialogTableVisible: false,
            dialogFormVisible: false,
            form: {},
            formLabelWidth: '80px',
            state: false
        }
    },
    created() {
        this.getDataList()
    },
    methods: {
        sure(){
            // console.log(this.form)
            if(this.state) {
                //调用修改接口
                // this.service.put('接口地址', this.form)
                // .then(res => {

                // })
                // .catch(err => {
                //     console.log(err)
                // })
            }else{
                //调用新增接口
                // this.service.post('接口地址', this.form)
                // .then(res => {

                // })
                // .catch(err => {
                //     console.log(err)
                // })
            }
            this.dialogFormVisible = false
        },
        // 点击新增
        addStudent(){
            this.state = false
            // 新增之前先清空表单里的内容
            this.form = {
                sex: '1'
            }
            this.dialogFormVisible = true
        },
        // 点击修改
        updateInfo(row) {
            this.state = true
            this.dialogFormVisible = true
            // 把信息传入到修改弹窗
            this.form = {...row}
            console.log(row)
        },
        del(){
            this.$alert('您确定要删除吗？', '删除提示', {
                confirmButtonText: '确定',
                callback: action => {

                }
            });
        },
        onSubmit() {
            console.log('submit!');
        },
        getDataList(){
            this.service
            .get('/studentList')
            .then(res => {
                // 挡状态值等于200 的时候 把数据导入到列表界面
                if(res.data.status === '200') {
                    res.data.data.forEach(item => {
                        item.sex === "1" ? item.sex_text = "男" : item.sex_text = "女"
                    })
                    this.tableData = [...res.data.data]
                }
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
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
.el-form {
    text-align: left;
}
</style>