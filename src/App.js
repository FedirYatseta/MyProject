
import { Route } from 'react-router';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import MainPriceContainer from "./components/Main/MainPriceContainer";
import Blog from "./components/Blog/Blog"
import Teams from "./components/Teams/Teams"
import MapContainer from "./components/Map/MapGoogle"
import ProjectContainerPage from "./components/Project/ProjectContainer"
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <div className='app-wrapper'>
      <div className='app-header'><Header /></div>
      <div className='app-nav'> <Nav /></div>
      <div className='app-container'>
      <Route path="/main" render={() => <MainPriceContainer />} />
      <Route path="/project" render={() => <ProjectContainerPage />} />
      <Route path="/teams" render={() => <Teams />} />
      <Route path="/blog" render={() => <Blog />} />
      <Route path="/contact" render={() => <Contact />} />
      </div>
      
      <div className='app-contact-row'>
         <div className="contact block__element_1">контакти</div>
         <div className="logo block__element_2">лого</div>
         <div className="map block__element_3"><MapContainer /></div>
      </div>
    </div>
  )
}

export default App;
