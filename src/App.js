import React, {useState,useEffect} from 'react';
import Sidebar from './Components/Sidebar/Sidebar.js';
import CommercialProject from './Components/Categories/CommercialProject/CommercialProject.js';
import ResidentialProject from './Components/Categories/ResidentialProject/ResidentialProject.js';
import Footer from './Components/Footer/Footer.js';
import ProjectDisplay from './Components/ProjectDisplay/ProjectDisplay.js';
import HomePage from './Pages/HomePage/HomePage.js';
// import CategoryPage from './Pages/CategoryPage/CategoryPage.js';
import LatestPage from './Pages/LatestPage/LatestPage.js';
import ClipLoader from "react-spinners/ClipLoader";
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
           ProjectList: [],
           loading:false
			 }
	 }

   setLoading=()=>{
     this.setState({loading:true});
     setTimeout(()=>{
       this.setState({loading:false});
     },6000)
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

   setProjectList = (resp) =>{
     this.setState({ProjectList: resp})
   }

  componentDidMount(){
    this.setLoading();
    fetch('http://localhost:3000/project')
    .then(response=>response.json())
    .then(resp=>{
      if(resp[0].Client){
        this.setProjectList(resp);
      }
    })
    .catch(err => {
     console.log(err)
   })
  }

	render() {
    const {ProjectList,loading} = this.state;
    return (
      <div className="App" style={{backgroundColor:'#1b1c1b'}}>
      {
        loading ?
         <ClipLoader color={"#ffffff"} loading={loading} size={150} /> :
         <HashRouter>
           <Sidebar />
             <Switch>
                 <Route exact path = '/'>
                 <HomePage ProjectList={ProjectList} showCategories={this.showCategories} showTrending={this.showTrending} />
                 </Route>

                 <Route
                 exact path='/latest'
                 render = {
                   () => this.state.project.Client?(<LatestPage project={this.state.project} />):(<Redirect to="/" />)
                 }
                 />
                 <Route exact path='/residential' component={()=><ResidentialProject setProject={this.setProject} ProjectList={ProjectList}/>}/>
                 <Route exact path='/commercial' component={()=><CommercialProject setProject={this.setProject} ProjectList={ProjectList}/>}/>
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
      }
  </div>
    );
	}
}

export default App;
