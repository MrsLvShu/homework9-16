import $axios from '@/utils/axios'

export const getLogin = (params) => $axios.post('/lejuAdmin/index/login',params)
export const getInitMenus = () => $axios.get('/admin/sysAuth/index/getInitMenus')
export const getCheck = (params) => ax({
    url: 'user/m/register',
    method: 'post',
    params: params,
})