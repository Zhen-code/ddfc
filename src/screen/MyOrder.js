import React from 'react';
import Header from "../components/common/Header";
import style from "../styles/myorder.css";
import shop_url from "../assets/image/shop.png";
import picture_more from "../assets/image/picture_more.png"
export default class MyOrder extends React.PureComponent {
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
                    <ul className={style.container}>
                        <li className={style.item}>
                            <div className={style.image}>
                                <img src={shop_url} alt={"商品"}/>
                            </div>
                            <div className={style.content}>
                                <p>DrF-高型房车</p>
                                <p>已认筹：4份</p>
                                <p>单价：20000.00元／份</p>
                            </div>
                            <div className={style.right_price}>
                                <p>¥80000.00</p>
                            </div>
                        </li>
                    </ul>
                    <div className={style.total}>
                        <div className={style.image}>
                            <img src={shop_url}  alt={"商品"}/>
                        </div>
                        <div className={style.more}>
                            <img src={picture_more}  alt={"商品"}/>
                        </div>
                        <div className={style.right_price}>
                            <p>¥80000.00</p>
                            <p className={style.number}>共8份</p>
                        </div>
                </div>
            </div>
        )
    }

}
