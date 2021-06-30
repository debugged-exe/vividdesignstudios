import React, {useState,useEffect} from 'react';
import Sidebar from './Components/Sidebar/Sidebar.js';
import CommercialProject from './Components/Categories/CommercialProject/CommercialProject.js';
import ResidentialProject from './Components/Categories/ResidentialProject/ResidentialProject.js';
import Footer from './Components/Footer/Footer.js';
import ProjectDisplay from './Components/ProjectDisplay/ProjectDisplay.js';
import HomePage from './Pages/HomePage/HomePage.js';
// import CategoryPage from './Pages/CategoryPage/CategoryPage.js';
import LatestPage from './Pages/LatestPage/LatestPage.js';
import HashLoader from "react-spinners/HashLoader";
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
           loading:true
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

   setProjectList = (resp) =>{
     this.setState({ProjectList: resp})
   }

  componentDidMount(){
    fetch('https://lit-river-88777.herokuapp.com/project')
    .then(response=>response.json())
    .then(resp=>{
      if(resp[0].Client){
        this.setProjectList(resp);
        setTimeout(()=>{
            this.setState({loading:false});
          },3000)
      }
    })
    .catch(err => {
     console.log(err)
   })
  }

	render() {
    const {ProjectList,loading} = this.state;
    return (
      <div className="App" style={{backgroundColor:'white'}}>
      {
        loading ?
        <>
         <div className="loader">
          <HashLoader color={"gray"} loading={loading} size={150}>abc</HashLoader>
         </div>
         </> :
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
             <footer className="pv1 ph3 ph5-m ph6-l white flex justify-center footer_class" style={{backgroundColor: "black"}}>
               <small className="f5 db white" style={{textAlign: 'center'}}>
               <p style={{textTransform:'lowercase'}}> developed by <a href="https://debuggedexe.com" className="b grow">debugged.exe</a></p>
               </small>
             </footer>
         </HashRouter>
      }
  </div>
    );
	}
}

export default App;
