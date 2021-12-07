import logo from './logo.svg';
import './App.css';
import Aboutus from './Components/Aboutus';
// import Index from'./Components/Index';
import Index from './Components/Index'
import blog from './Components/blog';
import Blogdetail from './Components/Blogdetail';
import Contact from './Components/Contact';
import Rooms from './Components/Rooms';
import Roomdetails from './Components/Roomdetails';



import {
  BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   {/* <Index/> */}
    //   <Aboutus/>
    // </div>

    <Router>

       <Switch>
       <Route exact path="/">
            <Index />
          </Route>
          <Route path="/about">
            <Aboutus />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/rooms">
            <Rooms/>
          </Route>
        </Switch>

</Router>
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
