import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Menu from './Sidebar_2';


const App = () => {
 
  return (
    <div className=' container app-wrapper' id="outer-container" >
      <Menu left pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap">
        <div className='container'> <Header /></div>
        <div className='container'> <Main /></div>
        <div className='container'> <Footer /></div> </div>

    </div>
  )
}

export default App;
