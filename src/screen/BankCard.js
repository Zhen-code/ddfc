import React from 'react';
import style from '../styles/bankcard.css';
import Header from "../components/common/Header";
import icon_qianbao from "../assets/image/icon_qianbao.png"
export default class AlterBankCard extends React.PureComponent {
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
                    <div>
                        <img className={style.bank_card} src={icon_qianbao} alt={"钱包"}/>
                    </div>
                    <div className={style.get_code}>
                        <input placeholder={"验证码"} className={style.get_Input}/>
                        <span className={style.btn}>获取验证码</span>
                    </div>
                    <div className={style.commit}>提交</div>
                </div>
            </div>
        )
    }

}
