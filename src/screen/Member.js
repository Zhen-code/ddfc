import React from 'react';
import Header from "../components/common/Header"
import style from "../styles/member.module.css"
import storage from "../util/setStorage";
export default class Member extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            ordinary_users:[],
            team_manager:[],
            team_director:[],
            left: 6,
            pageIndex: 1,
            pageSize: 12,
            token: ''
        }
        // this.token=storage.getItem('token')
    }
    getMember=(id)=>{
        window.show();
        const {pageIndex,pageSize,token}=this.state;
        window.axios({
            url:window.API.Inviter.iniviter_list+`?pageIndex=${pageIndex}&pageSize=${pageSize}`,
            method: 'GET',
            headers:{
                'Authorization': token
            }
        }).then(res=>{
               if(res.code===200){
                   if(res.data.list.length===0){
                       window.showToast('暂无数据')
                   }else{
                       window.hide();
                   }
               }
        }).catch(err=>{
            console.log(err)
        })
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

    render() {
        return (
            <div>
                <Header/>
                <ul className={style.role_list}>
                    <li onClick={()=>{this.setState({left:6},()=>{this.getMember(1)})}}>普通用户</li>
                    <span></span>
                    <li onClick={()=>{this.setState({left:128},()=>{this.getMember(2)})}}>团队经理</li>
                    <span></span>
                    <li onClick={()=>{this.setState({left:246},()=>{this.getMember(3)})}}>团队总监</li>
                    <div className={style.line} style={{left:this.state.left+'px'}}></div>
                </ul>
                <div className={style.recommend}>
                    <div>直推人数：<span>3</span>人</div>
                    <div>间推人数：<span>12</span>人</div>
                </div>
                <ul className={style.recommend_List}>
                    <li className={style.item}>
        `           <div>
                        <span>推荐类型：直推</span>
                        <span>2019-10-12 18:56:44</span>
                    </div>
                        <div>用户信息：欧阳  13954474472</div>
                    </li>
                </ul>
            </div>
        )
    }

}
