import React from 'react';
import style from '../../styles/order_item.css'
import shop from "../../assets/image/shop.png";
export default class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
                <div className={style.item}>
                    <p className={style.order_number}>
                        <span>订单号：602934253603</span>
                        <button>待确认</button>
                    </p>
                    <div className={style.containers}>
                        <div className={style.image}>
                            <img src={shop} alt={"商品"}/>
                        </div>
                        <div className={style.content}>
                            <p>DrF-高型房车<span>ｘ4</span></p>
                            <p>申请时间：2019-10-03</p>
                            <p className={style.price}>单价：20000.00元／份</p>
                        </div>
                        <div className={style.right_price}>
                            <p>¥80000.00</p>
                        </div>
                    </div>
                </div>
        )
    }

}
