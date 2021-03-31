import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Sidebar from './Sidebar';

const App = () => {
  return (
    <div className='app-wrapper' id="outer-container" >
       <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
       
      <div className='app-header' id="page-wrap"><Header /></div>
      <div className='app-nav'> <Main /></div>
      <div className='app-contact-row'> <Footer /></div>
    </div>
  )
}

export default App;
