import React from 'react';
import Header from "../components/common/Header";
import OrderItem from "../components/common/Order_Item";
import UserInfo from "../components/common/UserInfo";
import style from "../styles/offlineorder.css";
export default class OfflineOrder extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {

    }
    render() {
        return (
            <div>
                <Header/>
                <div className={style.container}>
                    <OrderItem/>
                </div>
                <p className={style.total_orders}>订单总额：<span style={{fontSize:'0.26rem'}}>¥80000.00</span></p>
                    <UserInfo/>
            </div>
        )
    }

}
