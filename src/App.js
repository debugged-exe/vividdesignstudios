import Sidebar from './Components/Sidebar/Sidebar.js';
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
      </HashRouter>
    </div>
  );
}

export default App;
