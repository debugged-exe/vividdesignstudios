import Sidebar from './Components/Sidebar/Sidebar.js';
import HomePage from './Pages/HomePage/HomePage.js';
import './App.css';
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
      </HashRouter>
    </div>
  );
}

export default App;
