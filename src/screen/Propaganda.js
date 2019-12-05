import React from 'react';
import Header from "../components/common/Header";
import style from "../styles/propaganda.css";
import shop from "../assets/image/shop.png";
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
                    <div className={style.img}>
                        <img src={shop} alt={"商品"}/>
                    </div>
                    <div className={style.content}>
                        美好嘟嘟房车宣传页
                    </div>
                </div>
            </div>
        )
    }

}
