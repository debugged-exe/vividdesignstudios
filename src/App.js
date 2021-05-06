import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar.js';
import CommercialProject from './Components/Categories/CommercialProject/CommercialProject.js';
import ResidentialProject from './Components/Categories/ResidentialProject/ResidentialProject.js';
import Footer from './Components/Footer/Footer.js';
import ProjectDisplay from './Components/ProjectDisplay/ProjectDisplay.js';
import HomePage from './Pages/HomePage/HomePage.js';
import CategoryPage from './Pages/CategoryPage/CategoryPage.js';
import LatestPage from './Pages/LatestPage/LatestPage.js';
import './App.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    HashRouter,
    Redirect
  } from "react-router-dom";


class App extends React.Component {
	constructor(){
			 super();
			 this.state = {
					 product:'',
           project:{},
			 }
	 }

	 showCategories=(product)=>{
			 this.setState({product:product});
	 }

   showTrending=(project)=>{
			 this.setState({project:project});
	 }

   setProject = (project) => {
     this.setState({project: project});
   }

	render() {
    return (
      <div className="App" style={{backgroundColor:'#1b1c1b'}}>
        <HashRouter>
          <Sidebar />
            <Switch>
                <Route exact path = '/'>
                <HomePage showCategories={this.showCategories} showTrending={this.showTrending} />
                </Route>

                <Route
                exact path='/Latest'
                render = {
                  () => this.state.project.Client?(<LatestPage project={this.state.project} />):(<Redirect to="/" />)
                }
                />
                <Route exact path='/residential' component={()=><ResidentialProject setProject={this.setProject}/>}/>
                <Route exact path='/commercial' component={()=><CommercialProject setProject={this.setProject}/>}/>
                <Route exact path='/aboutus' component={()=><Footer/>}/>
                <Route exact path='/projectview'
                render = {
                  () => this.state.project.Client?(<ProjectDisplay project={this.state.project}/>):(<Redirect to="/" />)
                }
                />
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
  // <Route exact path='/Categoriesdecision' component={()=><CategoryPage product={this.state.product} />} />
