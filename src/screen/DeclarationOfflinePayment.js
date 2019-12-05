import React from 'react';
import Header from "../components/common/Header"
import style from "../styles/declarationofflinepayment.css"
export default class DeclarationOfflinePayment extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {

    }

    render() {
        return (
            <div style={{background:'#EDEDED'}}>
                <Header/>
                <div>
                    <div className={style.seperate}></div>
                    <span className={style.selected_packages}>已选套餐</span>
                </div>
                <div className={style.container}>
                    <ul className={style.list}>
                        <li className={style.item}>
                            <p>NTF 炫酷房车1-1</p>
                            <p>总价：700000.00元</p>
                            <p>单价：20000.00元</p>
                        </li>
                    </ul>
                    <div className={style.package}>
                        <div><span>共2个套餐包</span><label>需支付尾款:</label><span style={{color:'#FF2424',fontSize:'16px'}}>¥133000.00元</span></div>
                    </div>
                    <div className={style.order_num}>
                        <p>订单号：5445464545245223</p>
                        <p>用户姓名：杨坤</p>
                        <p>用户手机号：130-0611-1487</p>
                        <p>申请时间：2019-10-15 15:45</p>
                    </div>
                    <div className={style.confirm_info}>
                        <p>确认付款信息（长按以下信息复制，打开网银转账）</p>
                        <p>企业名称： 深圳市杰迈科技有限公司</p>
                        <p>开户银行：深圳分行</p>
                        <p>银行账号：2457663214562144</p>
                    </div>
                </div>
                <div className={style.commit}>确认提交</div>
            </div>
        )
    }

}
