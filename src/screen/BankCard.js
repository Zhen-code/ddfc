import React from 'react';
// import {BrowserRouter as Router, Link, useLocation} from 'react-router-dom';
import storage from "../util/setStorage";
import style from '../styles/bankcard.module.css';
import Header from "../components/common/Header";

export default class AlterBankCard extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            phone: '17820563432',
            token:'',
            dududou:'',
            captcha: '',
            bankCardNo:'',
            bankName:'',
            holder:''
        }
    }
    getCaptcha(){
        const {token}=this.state;
        window.axios({
            url: window.API.Withdraw.withdraw_captcha,
            method: 'POST',
            headers: {
                'Authorization': token
            }
        }).then((res)=>{
            if(res.code===200){
                window.showToast('验证码发送成功!')
            }
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }
    handleCaptcha(e){//处理输入的验证码
        this.setState({
            captcha: e.target.value
        })
    }
    alterBank=()=>{
        const {token}=this.state;
        this.props.history.push({pathname:'/AlterBankCard',query:{token:token}})
    }
    // 提交申请
    commit=()=>{
        const {token,captcha,dududou}=this.state;
        if(captcha===''){
            window.showToast('验证码不能为空!')
            return
        }
        window.axios({
            url: window.API.Withdraw.withdraw+'?captcha='+captcha+'&dudu='+dududou,
            method: 'POST',
            headers:{
                'Authorization': token
            }
        }).then(res=>{
            if(res.code===200){
                window.showToast('提现成功!')
            }else{
                window.showToast('提现失败!')
            }
        }).catch(err=>{

        })
    }
    componentDidMount() {
        let money=this.props.location.query.money;
        if(money){
            money=this.props.location.query.money
        }else{
            money=0
        }
        const dududou=money;//获取嘟嘟豆提现跳转过来的数据
        const token=this.props.location.query.token;
        // const token=storage.getItem('token')
        this.setState({
            token,
            dududou
        })
        window.axios({
            url:window.API.BankCard.bank_card,//获取绑定的银行卡
            headers: {
                'Authorization': token
            }
        }).then((res)=>{
            console.log(res);
            if(res.code===200){
               const {bankCardNo,bankName,holder}=res.data;
               const start=bankCardNo.substring(0,4);
                const end=bankCardNo.substring(14,18);
                console.log(end)
                const newBankNo=start+'**** ****'+end;
                this.setState({
                    bankCardNo:newBankNo,
                    bankName,
                    holder
                })
            }
        }).catch((err)=>{
            console.log(err)
        })
    }
    render() {
        const {bankCardNo,bankName}=this.state;
        return (
            <div>
                <Header/>
                <div className={style.container}>
                    <div className={style.bank_card}>
                        <div>{bankName}</div>
                        <div className={style.bankCardNo}>
                            <div>{bankCardNo}</div>
                            <div onClick={this.alterBank.bind(this)}>修改银行卡</div>
                        </div>
                    </div>
                    <div className={style.get_code}>
                        <input placeholder={"验证码"} className={style.get_Input} onChange={this.handleCaptcha.bind(this)}/>
                        <span className={style.btn} onClick={this.getCaptcha.bind(this)}>获取验证码</span>
                    </div>
                    <div className={style.commit} onClick={this.commit}>提交</div>
                </div>
            </div>
        )
    }

}
