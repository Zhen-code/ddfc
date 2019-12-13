import React from 'react';
import Header from "../components/common/Header"
import style from "../styles/member.module.css"
export default class Member extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            ordinary_users:[],
            team_manager:[],
            team_director:[],
            left: 6,//设置下滑线左移值
            pageIndex: 1,
            pageSize: 12,
            token: '',
            index: 0
        }
        // this.token=storage.getItem('token')
    }
    componentDidMount() {
        let url=document.location.href;
        let new_url=url.substring(url.lastIndexOf('?')+1);
        let arr=new_url.split('=');
        let token=arr[1];
        this.setState({
            token
        })

    }
    getMember=(id)=>{
        this.setState({
            index: id
        })

    }
    render() {
        const {index}=this.state
        return (
            <div>
                <Header/>
                <ul className={style.role_list}>
                    <li className={style.role_list_item}>普通用户</li>
                    <li className={style.role_list_item}  onClick={this.getMember(1)}>团队经理</li>
                    <li className={style.role_list_item}  onClick={this.getMember(2)}>团队总监</li>
                </ul>
                <div className={style.recommend}>
                    <div>直推人数：<span>3</span>人</div>
                    <div>间推人数：<span>12</span>人</div>
                </div>
                <ul className={style.recommend_List}>
                    <li className={style.item}>
                        <div className={style.recommend_type}>
                        <div>推荐类型：直推</div>
                        <div>2019-10-12 18:56:44</div>
                    </div>
                        <div>用户信息：欧阳  13954474472</div>
                    </li>
                    <li className={style.item}>
                        <div className={style.recommend_type}>
                            <div>推荐类型：直推</div>
                            <div>2019-10-12 18:56:44</div>
                        </div>
                        <div>用户信息：欧阳  13954474472</div>
                    </li>
                </ul>
            </div>
        )
    }

}
