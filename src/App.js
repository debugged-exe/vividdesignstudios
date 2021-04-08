import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar.js';
import HomePage from './Pages/HomePage/HomePage.js';
import CategoryPage from './Pages/CategoryPage/CategoryPage.js';
import './App.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    HashRouter
  } from "react-router-dom";


class App extends React.Component {
	constructor(){
			 super();
			 this.state = {
					 product:'',
			 }
	 }

	 showCategories=(product)=>{
			 this.setState({product:product});
	 }


	render() {
    return (
      <div className="App">
        <HashRouter>
          <Sidebar />
            <Switch>
                <Route exact path = '/'>
                <HomePage showCategories={this.showCategories} />
                </Route>
                <Route exact path='/Categoriesdecision' component={()=><CategoryPage product={this.state.product} />} />
              </Switch>
            <footer className="pv3 ph3 ph5-m ph6-l white flex justify-center footer_class" style={{backgroundColor: "black"}}>
              <small className="f6 db white" style={{textAlign: 'center'}}>© 2021
              <b className="ttu"> Developed by Debugged.exe</b>. All Rights Reserved
              </small>
            </footer>
        </HashRouter>
      </div>
    );
	}
}

export default App;
