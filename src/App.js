import React, {useState,useEffect,Suspense,lazy} from 'react';
import HashLoader from "react-spinners/HashLoader";
import './App.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    HashRouter,
    Redirect
  } from "react-router-dom";

const Sidebar= lazy(()=>import ('./Components/Sidebar/Sidebar.js'));
const CommercialProject = lazy(()=>import ('./Components/Categories/CommercialProject/CommercialProject.js'));
const ResidentialProject= lazy(()=>import ('./Components/Categories/ResidentialProject/ResidentialProject.js'));
const Footer= lazy(()=>import ('./Components/Footer/Footer.js'));
const ProjectDisplay= lazy(()=>import ('./Components/ProjectDisplay/ProjectDisplay.js'));
const HomePage= lazy(()=>import ('./Pages/HomePage/HomePage.js'));
const LatestPage= lazy(()=>import ('./Pages/LatestPage/LatestPage.js'));

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
         <HashRouter>
          <Suspense fallback={<div>Loading.....</div>}>
            <Sidebar />
          </Suspense>
          
             <Switch>
                 <Route exact path = '/'>
                 <Suspense fallback={<div>Loading home...</div>}>
                      <HomePage ProjectList={ProjectList} showCategories={this.showCategories} showTrending={this.showTrending} />
                 </Suspense>
                   
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
  </div>
    );
	}
}

export default App;
