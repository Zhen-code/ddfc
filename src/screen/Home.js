import React from 'react';
// import axios from 'axios';
import style from '../styles/home.module.css'
import Header from "../components/common/Header"
import storage from "../util/setStorage"
export default class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            token:'',
            phone:'17820563432',
            password:'123456',
        }
        this.login=this.login.bind(this)
        this.register=this.register.bind(this)
    }
    show=()=>{
        window.showToast('6666666')
    }
    componentDidMount() {

    }
    login(){
        // const {token} =this.state;
        window.axios({
            url: 'http://dev.lux1.beiru168.com/api/v1/member/login?phone='+this.state.phone+'&password='+this.state.password,
            method:'POST',
            // headers:{
            //     'Authorization': token
            // },
    }).then((res)=>{
            if(res.code ===200){
                window.showToast('登录成功!')
                const token=res.data.token
                storage.setItem('token',token)
            }
        }).catch((err)=>{
                console.log(err)
        })
    }
    register(){
            const list=storage.getItem('token')
            console.log(list)
    }
    render() {
        return (
            <div>
            <Header/>
            <h3 className={style.center}>欢迎来到嘟嘟房车首页!</h3>
                <span className={style.btn1}><button type="button" className={"btn btn-primary"} onClick={this.login}>登录</button></span>
                <span className={style.btn2}><button type="button" className="btn btn-primary" onClick={this.register}>注册</button></span>
            </div>
        )
    }

}
