import axiosUtils from "@/utils/axiosUtil"


export interface SysUser {
    code: string;
    passwd: string;
}

//查询用户列表
export function listUser(listParam:any) {
    return axiosUtils({
        url: '/api/v1/system/sysuser/list',
        method: 'post',
        data: listParam
    })
}


//查询用户列表
export function login(user: SysUser) {
    return axiosUtils({
        url: '/api/v1/system/sysuser/login',
        method: 'post',
        data: user
    })
}