import Partner from "./Partner";
import {connect} from 'react-redux'
let mapStateToProps = (state) => {
 
    return {
        newsPrice: state.MainPage.sale
    }
}


const PartnerContainer = connect(mapStateToProps)(Partner);

export default PartnerContainer;