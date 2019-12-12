import React from 'react';
import Header from "../components/common/Header"
import style from "../styles/ddwallet.module.css"
import storage from "../util/setStorage";
export default class Home extends React.PureComponent {
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
        // let token=storage.getItem('token')
        let url=document.location.href;
        let new_url=url.substring(url.lastIndexOf('?'));
        let arr=new_url.split('=');
        let token=arr[1];
        this.setState({
            token
        })
        window.axios({
            url: window.API.Mine.info,
            method:'GET',
            headers:{
                'Authorization': token
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
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevState)
    }

    handler=(e)=>{
        const money=e.target.value;
        this.setState((preState)=>{
            preState.money=money
        })
    }
    goCommit(){
        const {money,token} =this.state;
        this.props.history.push({pathname:"/BankCard",query:{money:money,token:token}})
    }
    render() {
        const {duduDou}=this.state;
        return (
            <div>
                <Header/>
                <div className={style.content}>
                    <div className={style.container}>
                        <div className={style.content_head}>嘟嘟豆提现至银行卡</div>
                        <div className={style.content_center}>
                            <span>￥</span>
                            <input type={'text'} placeholder={"0"} onChange={this.handler.bind(this)} />
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
