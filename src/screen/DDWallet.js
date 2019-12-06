import React from 'react';
import Header from "../components/common/Header"
import style from "../styles/ddwallet.module.css"
import storage from "../util/setStorage";
export default class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            money: 0,
            duduDou: 0
        }
        this.token=storage.getItem('token')
    }
    componentDidMount() {
        window.axios({
            url: window.API.Mine.info,
            method:'GET',
            headers:{
                'Authorization': this.token
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
        const money=e.target.value
        this.setState((preState)=>{
            preState.money=money
        })
    }
    goCommit(){
        const {duduDou} =this.state
        this.props.history.push('/BankCard/'+duduDou)
    }
    render() {
        const {money,duduDou}=this.state;
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
                    <div className={style.cash_withdrawal} onClick={this.goCommit.bind(this)}>提现到银行卡</div>
                </div>
            </div>

        )
    }

}
