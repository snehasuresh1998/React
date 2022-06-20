
import './App.css';
import FooterComponent from './Components/FooterComponent';
import HeaderComponent from './Components/HeaderComponent';
import ListUser from './Components/ListUser'
import CreateUser from './Components/CreateUser'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'


function App() {
  return (
    <div>
      <Router>
      <div className="container">
      <HeaderComponent/>
      <div className="container">
        <Switch>
      {/* <ListUser/> */}
      <Route path="/"  exact component={ListUser}></Route>
      <Route path="/patients" component={ListUser}></Route>
      <Route path="/add-user" component={CreateUser}></Route>
      </Switch>
    </div>
    <FooterComponent/>
    </div>
    </Router>
    
    </div>
  );
}

export default App;
