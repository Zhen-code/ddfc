import React from 'react';
import Header from "../components/common/Header";
import style from "../styles/myicome.css";
export default class MyIncome extends React.PureComponent {
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
                <div className={style.total}>
                    <div>总收益：<span>4565</span>嘟嘟豆</div>
                    <div>已收益天数：<span>56</span>天</div>
                </div>
                <p className={style.time}>
                    <span>2019-10-12</span><span>收入<span className={style.income}>+20.2</span></span>
                </p>
                <ul className={style.list}>
                    <li className={style.item}>
                        <p><span>房车70万套餐购买返利</span><span className={style.increment}>+8.7</span></p>
                        <p>类型：房车购买每月返利</p>
                    </li>
                    <li className={style.item}>
                        <p><span>房车70万套餐购买返利</span><span className={style.increment}>+8.7</span></p>
                        <p>类型：房车购买每月返利</p>
                    </li>
                </ul>
            </div>
        )
    }

}
