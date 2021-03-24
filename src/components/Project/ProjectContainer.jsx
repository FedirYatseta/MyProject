
import { connect } from 'react-redux';
import Project from './Project';


let mapStateToProps = (state)=> {
    return  {
        ourProject: state.ProjectPage
    }
}

const ProjectContainerPage = connect (mapStateToProps)(Project)
export default ProjectContainerPage;