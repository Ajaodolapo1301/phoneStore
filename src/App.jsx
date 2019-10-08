import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import AppNavBar from "./component/layout/AppNavbar"
import ProductList from "./component/pages/ProductList"
import Detail from "./component/pages/Detail"
import Cart from "./component/pages/cart/Cart"
import About from "./component/pages/About"
import Model from "./component/pages/Model"
import NotFoundPage from "./component/pages/NotFoundPage"
import "./App.css"
import {Provider} from "./Context"

class App extends Component {
    state = {  }
    render() { 
        return (
            <Provider>
            <Router>
             <div className="App">  
                    <AppNavBar/>   
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={ProductList}/>
                        <Route exact path="/cart" component={Cart}/>
                        <Route exact path="/detail" component={Detail}/>
                        <Route exact path="/about" component={About}/>
                        <Route  component={NotFoundPage}/>
                    </Switch>
                    < Model/>
                </div>
            </div>
            </Router>
            </Provider>
         );
    }
}
 
export default App;
