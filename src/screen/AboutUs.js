import React from 'react';
import style from'../styles/aboutUs.css'

export default class AboutUs extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            token: ''
        }
        this.token = ''
    }

    render() {
        return (
            <div className={style.page}>
                {
                    this.state.list.map((item,index)=>{
                        return(
                           <p key={index}>{item}</p>
                        )
                    })
                }
            </div>
        )
    }
    getData(){

        window.axios({
            url: window.API.Mine.info,
            method:'GET',
            headers:{
                'Authorization': this.token
            }
        }).then((res)=>{

            console.log(res)
            let list = this.state.list;

            this.setState({
                list: res.data
            },()=>{})
            this.setState((preState)=>{
                return {
                   list: preState.list.push(1)
                }
            })
        }).catch((err)=>{

        })
    }
    componentDidMount() {
        // window.show();
        // window.hide();
        // window.showToast('123')
        this.getData();

    }
}


