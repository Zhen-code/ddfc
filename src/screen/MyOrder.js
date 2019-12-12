import React from 'react';
import {Fragment} from 'react';
import Header from "../components/common/Header";
import storage from "../util/setStorage";
import style from "../styles/myorder.module.css";
import shop_url from "../assets/image/shop.png";
import picture_more from "../assets/image/picture_more.png"
export default class MyOrder extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            list:[],
            countAll: 0,
            countMoney:0,
            token: ''
        }
        // this.token=storage.getItem('token')
    }
    componentDidMount() {
        let url=document.location.href;
        let new_url=url.substring(url.lastIndexOf('?')+1);
        let arr=new_url.split('=');
        let token=arr[1];
        let countAll=0,countMoney=0;
        this.setState({
            token
        })
        window.axios({
            url:window.API.Crowd_funding.order_list+'?pageIndex='+1+'&pageSize='+12,
            method: 'GET',
            headers:{
                'Authorization': token
            }
        }).then(res=>{
           if(res.code===200){
               if(res.data.list){
                   res.data.list.map(item=>{
                       countAll+=item.crowdfundingSell;
                       countMoney+=(item.crowdfundingSell*item.crowdfundingPartPrice)//获取总数量//获取总钱数
                   })
               }
               // console.log(res.data.list)
               this.setState({
                   list: res.data.list,
                   countAll,
                   countMoney
               })
           }
        }).catch(err=>{
            console.log(err)
        })
    }
    goDetail(id){
        const {token}=this.state
        this.props.history.push({pathname:'/OfflineOrder',query:{id:id,token:token}});
    }
    render() {
        const {list,countAll,countMoney} =this.state;
        return (
            <Fragment>
                <Header/>
                <div className={style.container}>
                    <ul>
                        {
                            list.map((item,index)=>{
                               return (<li
                                   onClick={this.goDetail.bind(this,item.id)}
                               key={index}
                               >
                                    <div className={style.image}>
                                        <img src={item.crowdfundingCover} alt={item}/>
                                    </div>
                                    <div className={style.content}>
                                        <div>{item.name}</div>
                                        <div>已认筹：{item.crowdfundingSell}份</div>
                                        <div>单价：{item.crowdfundingPartPrice}元／份</div>
                                    </div>
                                    <div className={style.right_price}>
                                        <p>¥{item.crowdfundingSell*item.crowdfundingPartPrice}</p>{/*每个订单总价*/}
                                    </div>
                                </li>)
                            })
                        }
                    </ul>
                    <div className={style.total}>
                        <div className={style.image}>
                            <img src={shop_url}  alt={"商品"}/>
                        </div>
                        <div className={style.more}>
                            <img src={picture_more}  alt={"商品"}/>
                        </div>
                        <div className={style.price}>
                            <div>¥{countMoney}</div>
                            <div className={style.number}>共{countAll}份</div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

}
