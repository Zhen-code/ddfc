import React from 'react';
import storage from "../util/setStorage";
import style from '../styles/bankcard.module.css';
import Header from "../components/common/Header";

export default class AlterBankCard extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            phone: '17820563432',
            token:'',
            captcha: '',
            bankCardNo:'',
            bankName:'',
            holder:''
        }
    }
    getCaptcha(){
        const {phone,token}=this.state
        window.axios({
            url: window.API.Mine.captcha+`?${phone}`,
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
    // 银行卡修改提交
    commit=()=>{
        const {token,captcha}=this.state
    }
    alterBank=()=>{
        this.props.history.push('/AlterBankCard')
    }
    componentDidMount() {
        const dududou=this.props.match.params.dd;//获取嘟嘟豆提现跳转过来的数据
        const token=storage.getItem('token')
        this.setState({
            token
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
        const {bankCardNo,bankName,holder}=this.state;
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
