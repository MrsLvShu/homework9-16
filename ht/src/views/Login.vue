<template>
    <div class="loginn">
        <div class="box">
            <h1>Login Form</h1>
            <el-input placeholder="Username" prefix-icon="el-icon-user-solid" v-model="query.username">
            </el-input>
            <el-input placeholder="Password" prefix-icon="el-icon-lock" v-model="query.password" show-password>
            </el-input>
            <el-button type="primary" @click="login">Login</el-button>
        </div>

    </div>
</template>

<script>
import { getLogin } from '@/utils/api';
export default {
    data() {
        return {
            query: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
            getLogin(this.query).then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.data.token)
                this.$router.push('/')
            })
        }
    },
}
</script>

<style lang='scss' scoped>
.loginn {
    background-color: #2d3a4b;
    height: 100vh;
    overflow: hidden;
}

.box {
    color: #fff;
    width: 400px;
    margin: 150px auto;

    h1 {
        text-align: center;
        margin-bottom: 60px;
    }
    .el-input{
        margin-bottom: 30px;
    }
    .el-button{
        width: 100%;
    }
  ::v-deep .el-input__inner{
    background-color: #283443;
  }
}
</style>