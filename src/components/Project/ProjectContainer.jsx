import React from 'react';
import { connect } from 'react-redux';
import Project from './Project';
import s from "./Project.module.css"

let mapStateToProps = (state)=> {
    return  {
        ourProject: state.ProjectPage
    }
}

const ProjectContainerPage = connect (mapStateToProps)(Project)
export default Project;