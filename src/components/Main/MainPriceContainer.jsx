import Main from "./Main";
import {connect} from 'react-redux'
let mapStateToProps = (state) => {
 
    return {
        newsPrice: state.MainPage.sale
    }
}


const MainPriceContainer = connect(mapStateToProps)(Main);

export default MainPriceContainer;