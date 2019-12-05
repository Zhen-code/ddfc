import React from 'react';
import Header from "../components/common/Header"
import style from "../styles/ddlist.css"
export default class Home extends React.PureComponent {
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
                <ul className={style.dd_list}>
                    <li>发生日期</li>
                    <li>|</li>
                    <li>行为动作</li>
                    <li>|</li>
                    <li>数量</li>
                    <li className={style.balance}>余额</li>
                </ul>
                    <ul className={style.list_item}>
                        <li className={style.item}>
                            <span>2019-10-11</span>
                            <span>购买套餐</span>
                            <span>+2000</span>
                            <span>12000</span>
                        </li>
                        <li className={style.item}>
                            <span>2019-10-11</span>
                            <span>购买套餐</span>
                            <span>+2000</span>
                            <span>12000</span>
                        </li>
                        <li className={style.item}>
                            <span>2019-10-11</span>
                            <span>购买套餐</span>
                            <span>+2000</span>
                            <span>12000</span>
                        </li>
                    </ul>
                </div>

            </div>
        )
    }

}
