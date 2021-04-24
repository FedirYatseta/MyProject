import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";


const App = () => {
 
  return (
    <div className='container' id="outer-container" >
      {/* <Menu left pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap"> */}

        <div className=''> <Header /></div>
        <div className=''> <Main /></div>
        <div className=''> <Footer /></div>
         

    </div>
  )
}

export default App;
