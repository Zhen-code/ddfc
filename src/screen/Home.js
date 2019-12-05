import React from 'react';
import style from '../styles/home.css'
import Header from "../components/common/Header"
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
            <h6 className={style.center}>欢迎来到嘟嘟房车首页!</h6>
            </div>
        )
    }

}
