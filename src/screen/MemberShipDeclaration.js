import React from 'react';
import {Fragment} from 'react';
import Header from "../components/common/Header"
import style from "../styles/membershipdeclaration.module.css"
import wcpay from "../assets/image/wcpay.png";
import icon_cs from "../assets/image/icon_cs.png";
import storage from "../util/setStorage";
export default class MemberShipDeclaration extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: '',//真实姓名
            phone: '',//手机号
            inviteName: '',//邀请人手机号
            isChecked: false,//是否勾选协议
            orderList: [],//已选套餐列表
            crowdfundingPrice: 0,//众筹房车总价
            partPrice: 0,//单价
            countAll: 0,//订单数量
            balancePayment: 0,//尾款
            crowdfundingCashPledgePrice: 0//众筹房车定金
        }
        this.token=storage.getItem('token')
        this.addInvite=this.addInvite.bind(this)
        this.goPay=this.goPay.bind(this)
    }
    addInvite(){
        const {name,phone,inviteName} =this.state
        if(name===''||inviteName===''){
            window.showToast('姓名不能为空!')
            return
        }else if(phone.length!=11){
            window.showToast('请输入正确的手机号码!')
            return
        }
        window.axios({
            url:window.API.Inviter.member+'?inviterPhone='+phone+'&realName='+inviteName,
            method:'POST',
            headers:{
                'Authorization':this.token
            }
        }).then(res=>{
            window.showToast(res.msg)
        }).catch(err=>{
                console.log(err)
        })
    }
    goPay(){
        const {isChecked} =this.state;
        if(isChecked){
           window.alert('进入支付')
        }else{
            window.alert('请先阅读并同意协议');
            return
        }
    }
    componentDidMount() {
        let balancePayment=0,crowdfundingCashPledgePrice=0;
            window.axios({
                url: window.API.Crowd_funding.order_list+'?pageIndex='+1+'&pageSize='+12,//查询已选订单
                method: 'GET',
                headers: {
                    'Authorization': this.token
                }
            }).then(res=>{
                   const newList=res.data.list.filter(function (item) {
                        if(item.status==1){
                            return item;//获取已选套餐数组
                        }
                   });
                   newList.map(item=>{
                       balancePayment+= item.balancePayment;//获取尾款
                       crowdfundingCashPledgePrice+=item.crowdfundingCashPledgePrice//获取定金
                   });
                this.setState({
                    orderList:newList,
                    countAll: newList.length,
                    balancePayment,
                    crowdfundingCashPledgePrice
                });
                // console.log(newList)
            }).catch(err=>{
                console.log(err)
            })
    }

    render() {
        const {orderList,countAll,balancePayment,crowdfundingCashPledgePrice,isChecked}=this.state;
        console.log(isChecked)
        return (
            <Fragment>
                <Header/>
                <div className={style.container}>
                    <div className={style.info}>
                        <div><p><span>*</span><label>真实姓名</label></p><input type={'text'} onChange={(e)=>{this.setState({name:e.target.value})}}/></div>
                        <div><p><span>*</span><label>手机号</label></p><input type={'text'} onChange={(e)=>{this.setState({phone:e.target.value})}}/></div>
                        <div><p><span>*</span><label>邀请人手机号</label></p><input type={'text'} onChange={(e)=>{this.setState({inviteName:e.target.value})}}/></div>
                        <div className={style.add_invite} onClick={this.addInvite}>添加</div>
                    </div>
                    <div className={style.selected}>
                        <div>
                            <span className={style.FilletRectangle}></span><span>已选套餐</span>
                        </div>
                    </div>
                    <div className={style.list} >
                        <ul className={style.listItem}>
                        {
                            orderList.map((item,index)=>{
                                return(
                                    <li
                                        key={index}
                                        className={style.item}>
                                        <p><span>{item.crowdfundingName}</span><span>x1</span></p>
                                        <p>总价：{item.crowdfundingPrice}.00元</p>
                                        <p>单价：{item.crowdfundingPartPrice}.00元</p>
                                    </li>
                                )
                            })
                        }
                        </ul>
                        <div className={style.package}>
                            <div><span>共{countAll}个套餐包</span><span>支付订金：<label>¥{crowdfundingCashPledgePrice}元</label></span></div>
                            <p>需支付尾款：<label>¥{balancePayment}元</label></p>
                        </div>
                        <div className={style.pay}>
                            <p>支付方式</p>
                            <p><span><img src={wcpay} alt={"支付"}/>微信支付</span><span><img src={icon_cs} alt={""}/></span></p>
                            <p className={style.agree}><input type={"radio"} className={style.checkRadio} checked={isChecked} onChange={(e)=>{this.setState({isChecked:true})}}/>本人已阅读并同意<span>《嘟嘟平台服务协议》</span></p>
                            <div className={style.gopay}  onClick={this.goPay}>去支付</div>
                        </div>
                    </div>
                </div>
                <div style={{width:'100%',height:'12px',background:'#ccc'}}></div>
            </Fragment>
        )
    }

}
