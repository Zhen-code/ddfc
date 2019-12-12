import React from 'react';
import storage from "../util/setStorage";
import style from '../styles/aboutUs.module.css'

export default class AboutUs extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            // list: [],
            token: ''
        }
        this.token = storage.getItem('token')
    }

    render() {
        return (
            <div className={style.page}>
                {
                    // this.state.list.map((item,index)=>{
                    //     return(
                    //        <p key={index}>{item}</p>
                    //     )
                    // })
                }
            </div>
        )
    }
    getData(){
        window.axios({
            url: window.API.Mine.login,
            method:'POST',
            headers:{
                'Authorization': this.token
            },
            params:{
                password: '123456',
                phone: '17820563432'
            }
        }).then((res)=>{
            console.log(res)
            // let list = this.state.list;

            // this.setState({
            //     list: res.data
            // },()=>{})
            // this.setState((preState)=>{
            //     return {
            //        list: preState.list.push(1)
            //     }
            // })
        }).catch((err)=>{

        })
    }
    componentDidMount() {
        window.show()
        // window.hide();
        window.showToast('123')
        this.getData();

    }
}


