import $axios from '@/utils/axios'

export const getLogin = (params) => $axios.post('/lejuAdmin/index/login',params)
export const getInitMenus = () => $axios.get('/admin/sysAuth/index/getInitMenus')
export const getTableList = (params) => $axios.post(`/lejuAdmin/product/productsByPage/${params.pagenum}/${params.pagesize}`)
export const getBrand = () => $axios.get('/lejuAdmin/brand/findAllBrand')

    
export const getCheck = (params) => ax({
    url: 'user/m/register',
    method: 'post',
    params: params,
})