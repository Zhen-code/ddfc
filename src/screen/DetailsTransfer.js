import React from 'react';
import {Fragment} from 'react';
import storage from '../util/setStorage'
import Header from "../components/common/Header";
import style from '../styles/detailstransfer.module.css';
import icon_jingbi from '../assets/image/icon_jingbi.png';
export default class DetailsTransfer extends React.PureComponent{
    constructor(props) {
        super(props);
        this.state={
            withdraw_log: []
        }
        // this.token=storage.getItem('token')
    }
    componentDidMount() {
        let url=document.location.href;
        let new_url=url.substring(url.lastIndexOf('?')+1);
        let arr=new_url.split('=');
        let token=arr[1];
           window.axios({
               url: window.API.Withdraw.withdraw_log,
               method: 'GET',
               headers:{
                   'Authorization': token
               }
           }).then(res=>{
               // console.log(res)
               if(res.code===200){
                   window.showToast('获取提现记录成功!');
                   if(res.data.list.length===0){
                    window.showToast('记录为空!')
                   }else{
                       this.setState({
                           withdraw_log: res.data.list
                       })
                   }
               }
           }).catch(err=>{
               console.log(err)
           })
    }

    render() {
        return(
            <Fragment>
                <Header/>
            <div className={style.container}>
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
            </Fragment>
        )
    }
}