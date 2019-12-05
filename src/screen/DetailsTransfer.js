import React from 'react';
import Header from "../components/common/Header";
import style from '../styles/detailstransfer.css';
import icon_jingbi from '../assets/image/icon_jingbi.png';
export default class DetailsTransfer extends React.PureComponent{
    constructor(props) {
        super(props);
        this.state={

        }
    }
    render() {
        return(
            <div>
                <Header/>
                <ul className={style.list}>
                    <li className={style.item}>
                        <div className={style.image}>
                            <img src={icon_jingbi} alt={"金币"}/>
                        </div>
                        <div className={style.content}>
                            <p>嘟嘟豆提现</p>
                            <p>2019年10月12日 13:56</p>
                        </div>
                        <div className={style.money}>-100.00</div>
                    </li>
                    <li className={style.item}>
                        <div className={style.image}>
                            <img src={icon_jingbi} alt={"金币"}/>
                        </div>
                        <div className={style.content}>
                            <p>嘟嘟豆提现</p>
                            <p>2019年10月12日 13:56</p>
                        </div>
                        <div className={style.money}>-100.00</div>
                    </li>
                </ul>
            </div>
        )
    }
}