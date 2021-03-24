
import { Route } from 'react-router';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import MainPriceContainer from "./components/Main/MainPriceContainer";
import Blog from "./components/Blog/Blog"
import Teams from "./components/Teams/Teams"
import MapContainer from "./components/Contact/Contact"
import ProjectContainerPage from "./components/Project/ProjectContainer"

const App = () => {
  return (
    <div className='app-wrapper'>
      <div className='app-header'><Header /></div>
      <div className='app-nav'> <Nav /></div>
      <Route path="/main" render={() => <MainPriceContainer />} />
      <Route path="/project" render={() => <ProjectContainerPage />} />
      <Route path="/teams" render={() => <Teams />} />
      <Route path="/blog" render={() => <Blog />} />
      <Route path="/contact" render={() => <MapContainer />} />
      <div className='app-contact'>
          Контакти
      </div>
    </div>
  )
}

export default App;
