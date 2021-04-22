import React from 'react'
import Student from './Student'
import Preloader from '../Preloader/Preloader'
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { getStudent, setIsFetching, createUserThunk, delUser } from '../../redux/StudentPageReducer'

class StudentContainer extends React.Component {

    componentDidMount() {
        debugger;
        this.props.setIsFetching(true)
        this.props.getStudent(this.props.userData)

    }


    render() {
        return <Student
                {...this.props}
                userData={this.props.userData}
                EditData={this.EditData}
                delUser={this.props.delUser}
                createUserThunk={this.props.createUserThunk} />
                //<> {this.props.isFetching ? <Preloader /> : null}
       // </>
    }
}


let mapStateToProps = (state) => ({
    userData: state.StudentPage.userData,
    isFetching: state.StudentPage.isFetching
})

let StudentUrlDataContainer = withRouter(StudentContainer)
export default connect(mapStateToProps, { getStudent, setIsFetching, createUserThunk, delUser })(StudentUrlDataContainer)