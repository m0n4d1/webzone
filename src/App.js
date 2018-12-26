import React, {Component} from 'react';
import H from './header';
import {Menu} from 'semantic-ui-react';


const a = [{key: 'navBar', active: true, name: 'NavBar'}, {key: 'home', name:'Home'}, {key: 'event', name:'Events'}, { key: 'about', name:'About us' },]
const M = () => <Menu items={a} />


class App extends Component {
    
    render() {
        return (<div className="root">
                    <H/>
                    <M/>
                </div>);
    }

}

 export default App;