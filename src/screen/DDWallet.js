import React from 'react';
import Header from "../components/common/Header"
import style from "../styles/ddwallet.module.css"
export default class DDWallet extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            money: 0,
            duduDou: 0,
            token:''
        }

        this.goCommit=this.goCommit.bind(this)
    }
    componentDidMount() {
        // let token=window.token;
        // let token=storage.getItem('token')
        let url=document.location.href;
        let new_url=url.substring(url.lastIndexOf('?'));
        let arr=new_url.split('=');
        window.token=arr[1];
        this.setState({
            token: arr[1]
        })
        window.axios({
            url: window.API.Mine.info,
            method:'GET',
            headers:{
                'Authorization': arr[1]
            }
        }).then(res=>{
            if(res.code===200){
                this.setState({
                    duduDou:res.data.duduDou
                })
            }
        }).catch(err=>{
            console.log(err)
        })

    }

    handler=(e)=>{
        const money=e.target.value;
        this.setState((preState)=>{
            preState.money=money
        })
    }
    goCommit(){
        const {money,token} =this.state;
        this.props.history.push({pathname:"/BankCard/"+money})
    }
    check(e){
        let temp=/^\d+\.?\d{0,2}$/
        if(temp.test(e.target.value)){

        }else{
            let str=e.target.value.substr(0,e.target.value.length-1)
            e.target.value=str
        }
    }
    checked(e){
        if(e.target.value.indexOf('.')!=-1){
            let end=e.target.value.indexOf('.')
            if(end===e.target.value.length-1){
                let newStr=e.target.value+'00'
                e.target.value=newStr
            }
        }



    }
    render() {
        const {duduDou}=this.state;
        return (
            <div>
                <Header/>
                <div className={style.container}>
                    <div className={style.content}>
                        <div className={style.content_head}>嘟嘟豆提现至银行卡</div>
                        <div className={style.content_center}>
                            <span>￥</span>
                            <input type={'text'} placeholder={"0"} onChange={this.handler.bind(this)} style={{width:'200px'}} maxLength={6} onKeyUp={this.check.bind(this)} onBlur={this.checked.bind(this)}/>
                        </div>
                        <div className={style.footer}>
                            <div className={style.dd}>嘟嘟豆：¥{duduDou}</div>
                            <div className={style.tx}>全部提现</div>
                        </div>
                    </div>
                    <div className={style.cash_withdrawal} onClick={this.goCommit}>提现到银行卡</div>
                </div>
            </div>

        )
    }

}
