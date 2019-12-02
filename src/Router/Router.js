import React, {Component} from 'react';
import {HashRouter,Switch,Route} from 'react-router-dom'
import dynamicComponent from './AsyncComponent'

const Home = dynamicComponent(()=>import(/* webpackChunkName: "Home" */ '../screen/Home'));
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
                </Switch>
            </HashRouter>
        )
    }
}
