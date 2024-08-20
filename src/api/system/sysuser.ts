import axiosUtils from "@/utils/axiosUtil"

export class SysUser{
    code: string;
    passwd: string;
    constructor(code: string, passwd: string) {
        this.code = code;
        this.passwd = passwd
    }
}

//查询用户列表
export function listUser() {
    return axiosUtils({
        url: '/api/v1/system/sysuser/list',
        method: 'post',
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