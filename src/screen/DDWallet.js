import React from 'react';
import Header from "../components/common/Header"
import style from "../styles/ddwallet.css"
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
                <div className={style.content}>
                    <div className={style.container}>
                        <p className={style.content_head}>嘟嘟豆提现至银行卡</p>
                        <div className={style.content_center}>
                            <span>￥</span>
                            <input type={'text'} placeholder={"0"}/>
                        </div>
                        <div className={style.footer}>
                            <span className={style.dd}>嘟嘟豆：¥563.23</span>
                            <span className={style.tx}>全部提现</span>
                        </div>
                    </div>
                    <div className={style.cash_withdrawal}>提现到银行卡</div>
                </div>
            </div>

        )
    }

}
