import React from 'react';
import style from '../../styles/userinfo.css'
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
                <div className={style.userInfo}>
                    <p>用户姓名：欧阳</p>
                    <p>用户手机号：155-2790-4092</p>
                    <p>邀请人手机号：130-0611-1487</p>
                </div>
            </div>
        )
    }

}
