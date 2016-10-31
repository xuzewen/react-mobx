import React, { Component } from 'react'
import { render } from 'react-dom'
import {Router, Route, IndexRoute, IndexRedirect, browserHistory, hashHistory,useRouterHistory } from 'react-router'
import {createHashHistory} from 'history'
import Demo from './containers/App';
import AppState from './mobx/AppState';

const appState = new AppState();

const history = useRouterHistory(createHashHistory)({queryKey: false})

class Page extends Component{
    constructor(props){
        super(props)
    }

    render() {

        return (
            <div>
                <Demo appState={appState} />
                {
                    this.props.children
                }
            </div>
        )
    }
}

export default class App extends Component{
    constructor(props){
        super(props)
    }

     render() {
        return (
        	<Router history={history}>
			    <Route path="/" component={Page}>
                </Route>
			</Router>
        )
     }

}




render( <App />, document.getElementById('root'))