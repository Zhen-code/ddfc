import React, {Component} from 'react';
import { HashRouter ,Switch,Route} from 'react-router-dom'
import dynamicComponent from './AsyncComponent'

const Home = dynamicComponent(()=>import(/* webpackChunkName: "Home" */ '../screen/Home'));
const AboutUs = dynamicComponent(()=>import(/* webpackChunkName: "Home" */ '../screen/AboutUs'));
const BankCard = dynamicComponent(()=>import(/* webpackChunkName: "BankCard" */ '../screen/BankCard'));
const AlterBankCard = dynamicComponent(()=>import(/* webpackChunkName: "AlterBankCard" */ '../screen/AlterBankCard'));
const Member = dynamicComponent(()=>import(/* webpackChunkName: "Member" */ '../screen/Member'));
const DDList = dynamicComponent(()=>import(/* webpackChunkName: "DDList" */ '../screen/DDList'));
const DDWallet = dynamicComponent(()=>import(/* webpackChunkName: "DDWallet" */ '../screen/DDWallet'));
const Propaganda = dynamicComponent(()=>import(/* webpackChunkName: "Propaganda" */ '../screen/Propaganda'));
const DetailsTransfer = dynamicComponent( ()=>import(/* webpackChunkName: "DetailsTransfer" */'../screen/DetailsTransfer'));
const MyOrder = dynamicComponent( ()=>import(/* webpackChunkName: "MyOrder" */'../screen/MyOrder'));
const OfflineOrder = dynamicComponent( ()=>import(/* webpackChunkName: "OfflineOrder" */'../screen/OfflineOrder'));
const MemberShipDeclaration = dynamicComponent( ()=>import(/* webpackChunkName: "MemberShipDeclaration" */'../screen/MemberShipDeclaration'));
const MyIncome = dynamicComponent( ()=>import(/* webpackChunkName: "MyIncome" */'../screen/MyIncome'));
const DeclarationOfflinePayment = dynamicComponent( ()=>import(/* webpackChunkName: "DeclarationOfflinePayment" */'../screen/DeclarationOfflinePayment'));
export default class Router extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <HashRouter>
                <Switch>
                    <Route path={'/'} exact component={Home}/>
                    <Route path={'/AboutUs'} exact component={AboutUs}/>
                    <Route path={'/BankCard'} exact component={BankCard}/>
                    <Route path={'/Member'} exact component={Member}/>
                    <Route path={'/AlterBankCard'} exact component={AlterBankCard}/>
                    <Route path={'/DDList'} exact component={DDList}/>
                    <Route path={'/DDWallet'} exact component={DDWallet}/>
                    <Route path={'/Propaganda'} exact component={Propaganda}/>
                    <Route path={'/DetailsTransfer'} exact component={DetailsTransfer}/>
                    <Route path={'/MyOrder'} exact component={MyOrder}/>
                    <Route path={'/OfflineOrder'} exact component={OfflineOrder}/>
                    <Route path={'/MemberShipDeclaration'} exact component={MemberShipDeclaration}/>
                    <Route path={'/MyIncome'} exact component={MyIncome}/>
                    <Route path={'/DeclarationOfflinePayment'} exact component={DeclarationOfflinePayment}/>
                </Switch>
            </HashRouter>
        )
    }
}
