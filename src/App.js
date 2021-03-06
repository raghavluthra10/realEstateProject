import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import AboutUs from './pages/aboutUs/AboutUs';
import ContactUs from './pages/contactus/ContactUs';
import ListingsPage from './pages/listings/ListingsPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PropertyState from './context/PropertyState';


function App() {
  return (
    <>
    <Router>
      <Navbar  />
      <Switch>
        <PropertyState>
          <Route path='/' exact> <Home  />  </Route>
          <Route path='/aboutus' exact > <AboutUs  /> </Route>
          <Route path='/listings' exact > <ListingsPage  /> </Route>
          <Route path='/contactus' exact > <ContactUs  /> </Route>  
        </PropertyState>
      </Switch>
    </Router>
    </>
  );
}

export default App;



//omega estates to help you(link to the about section)
// real estate smplified(get started)
// make footer
