import Sidebar from './Components/Sidebar/Sidebar.js';
import HomePage from './Pages/HomePage/HomePage.js';
import './App.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    HashRouter
  } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
      	<Sidebar />
          <Switch>
            <Route exact path = '/'>
              <HomePage />
            </Route>
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

export default App;
