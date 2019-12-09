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
            list:[]
        }
        this.token=storage.getItem('token')
    }
    componentDidMount() {
        window.axios({
            url:window.API.Crowd_funding.crowd_funding_list+'?pageIndex='+1+'&pageSize='+12,
            method: 'GET',
            headers:{
                'Authorization': this.token
            }
        }).then(res=>{
           if(res.code===200){
               console.log(res.data.list)
               this.setState({
                   list: res.data.list
               })
           }
        }).catch(err=>{
            console.log(err)
        })
    }

    render() {
        const {list} =this.state;
        return (
            <Fragment>
                <Header/>
                <div className={style.container}>
                    <ul>
                        {
                            list.map((item,index)=>{
                               return (<li
                               key={index}
                               >
                                    <div className={style.image}>
                                        <img src={item.cover} alt={item}/>
                                    </div>
                                    <div className={style.content}>
                                        <div>{item.name}</div>
                                        <div>已认筹：{item.sell}份</div>
                                        <div>单价：{item.crowdfundingPartPrice}元／份</div>
                                    </div>
                                    <div className={style.right_price}>
                                        <p>¥{item.crowdfundingPrice}</p>
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
                            <div>¥80000.00</div>
                            <div className={style.number}>共8份</div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

}
