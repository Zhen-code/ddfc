import React from 'react';
import Header from "../components/common/Header";
import style from "../styles/alterbankcard.css";
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
            <div className={style.container}>
                <Header/>
                <div className={style.bank_info}>
                    <p className={style.write_info}>请填写银行卡信息</p >
                    <div className={style.info_input}>
                        <p><label>银行卡帐号：</label><input type="text" placeholder={"账号"} className={style.zhanghao}/></p >
                        <p><label>开户人姓名：</label><input type="text" placeholder={"姓名"} className={style.xingming}/></p >
                    </div>
                    <div className={style.ok_btn}>确认添加</div>
                </div>
            </div>
        )
    }

}
