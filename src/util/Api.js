const domain = 'http://dev.lux1.beiru168.com';

const API = {
    // 个人信息
    Mine: {
        info: `${domain}/api/access/v1/member/info`,//获取用户信息
    },
};
export default API;
window.API = API;
