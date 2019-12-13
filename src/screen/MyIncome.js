import React from 'react';
import {Fragment} from 'react';
import Header from "../components/common/Header";
import style from "../styles/myicome.module.css";
export default class MyIncome extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            profitDay: 0,//收益天数
            sumProfit: 0,//总收益
            profitList:[]//收益列表数据
        }

    }
    componentDidMount() {
        let url=document.location.href;
        let new_url=url.substring(url.lastIndexOf('?')+1);
        let arr=new_url.split('=');
        let token=arr[1];
        window.axios({
            url: window.API.Dudu.profit_log,
            method:'GET',
            headers:{
                'Authorization': token
            }
        }).then(res=>{
            if(res.code===200){
                this.setState({
                    profitDay: res.data.profitDay,
                    sumProfit:res.data.sumProfit
                })
            }
        }).then(()=>{
            window.axios({//获取近一个月的收益数量
                url: window.API.Dudu.profit_list,
                method:'GET',
                headers:{
                    'Authorization': token
                }
            }).then(res=>{
                if(res.code===200){
                    if(res.data.length===0){
                        window.showToast('近一个月收益为空')
                    }else{
                        this.setState({
                            profitList:res.data
                        })
                    }
                }
            }).catch(err=>{
                console.log(err)
            })
        }).catch(err=>{
            console.log(err)
        })
    }

    render() {
        const {profitDay,sumProfit}=this.state;
        return (
            <Fragment>
                <Header/>
                <div className={style.profit}>
                    <span>总收益：<label>{sumProfit}</label>嘟嘟豆</span>
                    <span>已收益天数：<label>{profitDay}</label>天</span>
                </div>
                <div className={style.container}>
                    <div className={style.time}>
                        <span>2019-10-12</span>
                        <span>收入<span style={{fontSize:'20px', color:'#0072FF'}}>+20.2</span></span>
                    </div>
                    <ul className={style.list}>
                        <li>
                            <div>
                                <span>房车70万套餐购买返利</span>
                                <span>+8.7</span>
                            </div>
                            <div>类型：房车购买每月返利</div>
                        </li>
                        <li>
                            <div>
                                <span>房车70万套餐购买返利</span>
                                <span>+8.7</span>
                            </div>
                            <div>类型：房车购买每月返利</div>
                        </li>
                    </ul>
                </div>
            </Fragment>
        )
    }

}
