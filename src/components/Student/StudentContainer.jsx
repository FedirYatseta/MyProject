import React from 'react'
import Student from './Student'
import Preloader from '../Preloader/Preloader'
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { getStudent, setIsFetching, createUserThunk, delUser,setStudentId } from '../../redux/StudentPageReducer'

class StudentContainer extends React.Component {

    componentDidMount() {
        debugger;
        this.props.setIsFetching(false)
        this.props.getStudent(this.props.userData)
        this.props.setStudentId(this.props.id)
    }


    render() {
        return <> {this.props.isFetching ? <Preloader /> : null}
            <Student
                {...this.props}
                userData={this.props.userData}
                EditData={this.EditData}
                delUser={this.props.delUser}
                createUserThunk={this.props.createUserThunk}
                setStudentId={this.props.setStudentId} />

        </>
    }
}


let mapStateToProps = (state) => ({
    userData: state.StudentPage.userData,
    isFetching: state.StudentPage.isFetching
})

let StudentUrlDataContainer = withRouter(StudentContainer)
export default connect(mapStateToProps, { getStudent, setIsFetching, createUserThunk, delUser,setStudentId })(StudentUrlDataContainer)