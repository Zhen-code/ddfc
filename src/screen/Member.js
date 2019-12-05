import React from 'react';
import Header from "../components/common/Header"
import style from "../styles/member.css"
export default class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            ordinary_users:[],
            team_manager:[],
            team_director:[]
        }
    }

    componentDidMount() {

    }
    componentWillUpdate(nextProps, nextState, nextContext) {

    }
    move1(){
        let active=document.getElementById("active")
        active.style.left="10px"
    }
    move2(){
        let active=document.getElementById("active")
        active.style.left="140px"
    }
    move3(){
        let active=document.getElementById("active")
        active.style.left="260px"
    }

    render() {

        return (
            <div>
                <Header/>
                <ul className={style.role_list}>
                    <li onClick={this.move1}>普通用户</li>
                    <span>|</span>
                    <li onClick={this.move2}>团队经理</li>
                    <span>|</span>
                    <li onClick={this.move3}>团队总监</li>
                    <div className={style.active} id={"active"}></div>
                </ul>
                <div className={style.recommend}>
                    <span>直推人数:<label className={style.number}>3</label>人</span>
                    <span>间推人数:<label className={style.number}>12</label>人</span>
                </div>
                <div className={style.recommend_list}>
                    <p>
                        <span>推荐类型:<span>直接</span></span>
                        <span className={style.time}>
                            2019-10-12 18:56:44
                        </span>
                    </p>
                    <p>用户信息:<span className={style.info}>欧阳 139****4472</span></p>
                </div>
                <div className={style.recommend_list}>
                    <p>
                        <span>推荐类型:<span>直接</span></span>
                        <span className={style.time}>
                            2019-10-12 18:56:44
                        </span>
                    </p>
                    <p>用户信息:<span className={style.info}>欧阳 139****4472</span></p>
                </div>
                <div className={style.recommend_list}>
                    <p>
                        <span>推荐类型:<span>直接</span></span>
                        <span className={style.time}>
                            2019-10-12 18:56:44
                        </span>
                    </p>
                    <p>用户信息:<span className={style.info}>欧阳 139****4472</span></p>
                </div>
            </div>
        )
    }

}
