import React from 'react';
import Header from "../components/common/Header"
import style from "../styles/membershipdeclaration.css"
import wcpay from "../assets/image/wcpay.png";
import icon_cs from "../assets/image/icon_cs.png";
export default class MemberShipDeclaration extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {

    }

    render() {
        return (
            <div style={{backgroundColor:'#EDEDED'}}>
                <Header/>
                <div className={style.container}>
                    <div className={style.info}>
                        <p><label>*</label>真实姓名<input type={'text'}/></p>
                        <p><label>*</label>手机号<input type={'text'}/></p>
                        <p><label>*</label>邀请人手机号<input type={'text'}/></p>
                    </div>
                    <div className={style.selected}>
                        <div>
                            <span className={style.FilletRectangle}></span><span>已选套餐</span>
                        </div>
                    </div>
                    <ul className={style.list}>
                        <li className={style.item}>
                            <p>NTF 炫酷房车1-1</p>
                            <p>总价：700000.00元</p>
                            <p>单价：20000.00元</p>
                        </li>
                    </ul>
                    <div className={style.package}>
                        <div><span>共2个套餐包</span>支付订金：<span>¥7000.00元</span></div>
                        <p>需支付尾款：<span>¥133000.00元</span></p>
                    </div>
                    <div className={style.pay}>
                        <p>支付方式</p>
                        <p><img src={wcpay} className={style.left_img} alt={"支付"}/>微信支付<span className={style.right_img}><img src={icon_cs} alt={""}/></span></p>
                        <p className={style.agree}>
                          本人已阅读并同意<span>《嘟嘟平台服务协议》</span></p>
                        <div className={style.gopay}>去支付</div>
                    </div>
                </div>
            </div>
        )
    }

}
