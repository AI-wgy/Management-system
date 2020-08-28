<template>
    <div class="login">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span class="title">教务后台管理系统</span>
            </div>
            <el-form :rules="rules" ref="form" :model="form" label-width="80px" class="form-box">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login('form')" class="loginBtn">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
    data(){
        return {
            form: {
                username: '',
                password: '',
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 3, max: 7, message: '长度在 3 到 7 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        login(form) {
            //表单验证
            // var _this = this
            this.$refs[form].validate((valid) => {
                if (valid) {
                this.axios.post('http://rap2.taobao.org:38080/app/mock/265301/login',this.form)
                .then((res) => {
                    if (res.data.status === '200') {
                        this.$message({
                        message: res.data.msg,
                        type: 'success'
                        });
                        setTimeout(() => {
                            this.$router.push('/home')
                        },1000)
                    }else {
                        console.log(res.data.msg)
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
                    
                } else {
                    
                    return false;
                }
            });
        }
    }
}
</script>

<style lang="scss">
//npm i --save-dev sass sass-loader  package.json change low-type  npm i
.login {
    width: 100%;
    height: 100%;
    // background: #00b8ff;
    .box-card {
        width: 480px;
        position: absolute;
        top: 200px;
        left: 50%;
        transform: translateX(-50%);
        .title {
            font-size: 26px;
        }
        .form-box {
            width: 350px;
        }
        .loginBtn {
            width: 100%;
        }
    }
}
</style>