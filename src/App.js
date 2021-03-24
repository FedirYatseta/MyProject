
import { Route } from 'react-router';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav"
import Project from "./components/Project/Project";
import MainPriceContainer from "./components/Main/MainPriceContainer";
import Blog from "./components/Blog/Blog"
import Teams from "./components/Teams/Teams"
import Contacts from "./components/Contact/Contact"

const App = () => {
  return (
    <div className='app-wrapper'>
      <div className='app-header'><Header /></div>
      <div className='app-nav'> <Nav /></div>
      <Route path="/main" render={() => <MainPriceContainer />} />
      <Route path="/project" render={() => <Project />} />
      <Route path="/teams" render={() => <Teams />} />
      <Route path="/blog" render={() => <Blog />} />
      <Route path="/contact" render={() => <Contacts />} />
    </div>
  )
}

export default App;
