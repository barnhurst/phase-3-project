import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
// import Cars from './components/Cars';
import Owners from './components/Owners';
import DeleteCar from './components/DeleteCar';
import CreateOrDelete from './components/CreateOrDelete';
import CreateNewCar from './components/CreateNewCar';
import CreateOwner from './components/CreateOwner';
import DeleteOwnerByID from './components/DeleteOwner';
function App() {
  return (
    <Router>
      <Header className='header' />
      <Route exact path='/'>
        <Redirect to='/home' />
      </Route>
      <Route exact path='/home'>
        <Home />
      </Route>
      {/* <Route exact path='/cars'>
        <Cars />
      </Route> */}
      <Route exact path='/owners'>
        <Owners />
      </Route>
      <Route exact path='/updateList'>
        <CreateOrDelete />
      </Route>
      <Route exact path='/createCar'>
        <CreateNewCar />
      </Route>
      <Route exact path='/removeCar'>
        <DeleteCar />
      </Route>
      <Route exact path='/createOwner'>
        <CreateOwner />
      </Route>
      <Route exact path='/deleteOwner'>
        <DeleteOwnerByID />
      </Route>
    </Router>
  );
}

export default App;
