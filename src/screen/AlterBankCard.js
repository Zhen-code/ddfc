import React from 'react';
import Header from "../components/common/Header";
import style from "../styles/alterbankcard.module.css";
import storage from "../util/setStorage";
export default class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            bankCardNo: '',
            holder: '',
            token:''
        }
    }
    handelCardNo(e){
        if(e.target.value!==''){
            this.setState({
                bankCardNo: e.target.value
            })
        }
    }
    handelName(e){
        if(e.target.value!==''){
            this.setState({
                holder: e.target.value
            })
        }
    }
     add(){
        const {bankCardNo,holder,token}=this.state;
        if(bankCardNo.length!==18 && holder===''){
            window.showToast('银行卡号或持卡人姓名有误！')
            return;
        }
        if(bankCardNo!==''&&holder!==''){
            window.axios({
                url: window.API.BankCard.bind+`?bankCardNo=${bankCardNo}&holder=${holder}`,
                method:'POST',
                headers:{
                    'Authorization': token
                },
            }).then((res)=>{
                if(res.code===200){
                    window.showToast('添加成功!')

                }
            }).then(call=>{
                setTimeout(()=>{
                    this.props.history.goBack()
                },1000)
            }).catch((err)=>{

            })
        }
    }
     componentDidMount() {
        const token=  this.props.location.query.token;
        // storage.setItem('token',token);
            this.setState({
                token
            })
    }
    render() {
        return (
            <div>
                <Header/>
                <div className={style.bank_info}>
                    <div className={style.write_info}>请填写银行卡信息</div >
                    <div className={style.info_input}>
                        <div><label>银行卡帐号：</label><input type="text" placeholder={"账号"} className={style.zhanghao} onChange={this.handelCardNo.bind(this)}/></div >
                        <div><label>开户人姓名：</label><input type="text" placeholder={"姓名"} className={style.xingming} onChange={this.handelName.bind(this)}/></div >
                    </div>
                    <div className={style.ok_btn} onClick={this.add.bind(this)}>确认添加</div>
                </div>
            </div>
        )
    }

}
