import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import AboutUs from './pages/aboutUs/AboutUs';
import ContactUs from './pages/contactus/ContactUs';
import ListingsPage from './pages/listings/ListingsPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PropertyState from './context/PropertyState';
import FullInfo from './pages/Fullinfo/FullInfo';
import FullInfoState from './FullInfoContext/FullInfoState'
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Router>
      <Navbar  />
      <Switch>
        <PropertyState>
        <FullInfoState>
          <Route path='/' exact> <Home  />  </Route>
          <Route path='/aboutus' exact > <AboutUs  /> </Route>
          <Route path='/listings' exact > <ListingsPage  /> </Route>
          <Route path='/contactus' exact > <ContactUs  /> </Route>  
          <Route path='/fullInformation' exact > <FullInfo /> </Route>  
        </FullInfoState>
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
