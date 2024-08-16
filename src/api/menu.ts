import axiosUtil from '@/utils/axiosUtil'

export const getRouters = ()=>{
    return axiosUtil({
        method:"get",
        url:"/api/v1/system/sysmenu/getRouters"
    })
}