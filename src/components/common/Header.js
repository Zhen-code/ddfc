import React from 'react';
import style from '../../styles/header.css';
import fan_hui from '../../assets/image/icon_fanhui.png';
import more from '../../assets/image/more.png'
export default class Header extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state={
            title:''
        }
    }
    componentDidMount() {
      let url=document.location.href;
        let start=url.indexOf('#')+2;
        let title=url.substring(start);
        switch (title){
            case 'MyOrder' :
                title='我的订单';
                break;
            case 'BankCard' :
                title='嘟嘟钱包';
                break;
            case 'Propaganda':
                title='宣传页';
                break;
            case 'Member' :
                title='嘟嘟会员';
                break;
            case 'OfflineOrder' :
                title='我的订单';
                break;
            case 'DDWallet' :
                title='嘟嘟钱包';
                break;
            case 'DDList' :
                title='嘟嘟豆列表统计';
                break;
            case 'DetailsTransfer' :
                title='提现转账明细';
                break;
            case 'DeclarationOfflinePayment':
                title='嘟嘟会员报单线下付款';
                break;
            case 'AlterBankCard':
                title='嘟嘟钱包';
                break;
            case 'MyIncome':
                title='我的收益';
                break;
            case 'MemberShipDeclaration':
                title='嘟嘟会员报单';
                break;
            default:
                title='首页';
                break;
        }
        this.setState((preState)=>{
            return {
                title
            }
        })
    }
    render() {
        const {title} =this.state
        return (
            <div>
                <div className={style.header}>
                    <span><img src={fan_hui} alt={"返回"}/></span>
                    <span>{title}</span>
                    <span><img src={more} alt={"更多"}/></span>
                </div>
            </div>
        )
    }

}