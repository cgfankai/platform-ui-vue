<template>

    <div class="full-screen">
        <el-card style="width: 400px;" class="login-panel">
            <div style="width: 100px; margin: 10px auto;">
                <img src="@/assets/crcc tsy logo.png" style="width: 100px;"></img>
            </div>

            <el-form :model="form" label-width="auto" style="width: 100%;" :rules="rules" ref="ruleFormRef">
                <el-form-item label="工号：" prop="userCode">
                    <el-input v-model="form.userCode" />
                </el-form-item>
                <el-form-item label="密码：" prop="passwd">
                    <el-input v-model="form.passwd" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" style="width: 100%;" @click="loginHandler(ruleFormRef)"
                        :disabled="loginButtonDisabled">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>

</template>
<script setup lang="ts">
import { ref } from "vue"
import { login } from '@/api/system/sysuser'
import type { SysUser } from '@/api/system/sysuser'
import { ElNotification } from 'element-plus'
import type { FormRules, FormInstance } from 'element-plus'
import { useJwtTokenStore } from '@/stores/store'
import { useRouter } from 'vue-router'
const route = useRouter()
const jwtToken = useJwtTokenStore();
const loginButtonDisabled = ref(false)
const ruleFormRef = ref<FormInstance>()
const form = ref<SysUser>({ userCode: "",passwd:""})
const rules = ref<FormRules>({
    userCode: [
        { required: true, message: '请输入工号', trigger: 'blur' },
    ],
    passwd: [
        { required: true, message: '请输入密码', trigger: 'blur' },
    ],
});
async function loginHandler(formEl: FormInstance | undefined) {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            loginButtonDisabled.value = true;
            login(form.value).then((res) => {
                console.info(res)
                if (res.data.code == 200) {
                    jwtToken.setJwtToken(res.data.data);
                    jwtToken.setAuthenticate(true);
                    route.push({ name: "main" })
                } else {
                    ElNotification({
                        title: '错误',
                        message: res.data.msg,
                        type: 'error',
                    })
                }
                loginButtonDisabled.value = false;
            })
        } else {
            console.log('error submit!', fields)
        }
    })


}


</script>
<style>
.full-screen {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #888;
    background-image: url("@/assets/loginbackground.jpg");
    background-size: cover;
    background-repeat: no-repeat;
}

.login-panel {
    margin: 0 auto;
    margin-top: calc(50vh - 200px);
}
</style>