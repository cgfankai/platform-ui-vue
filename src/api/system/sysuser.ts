import axiosUtils from "@/utils/axiosUtil"


export interface SysUser {
    userCode: string;
    passwd?: string;
}

//查询用户列表
export function listUser(listParam:any) {
    return axiosUtils({
        url: '/api/framework/sysuser/list',
        method: 'post',
        data: listParam
    })
}


//查询用户列表
export function login(user: SysUser) {
    return axiosUtils({
        url: '/api/framework/sysuser/login',
        method: 'post',
        data: user
    })
}