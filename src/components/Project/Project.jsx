import React from 'react';
import s from "./Project.module.css"
import ProjectItem from "./ProjectItem/ProjectItem"

const Project = (props) => {
    let state = props.ourProject.projects
    let elementProject = state.map(n => <ProjectItem attr1={n.attr1} key={n.id}/>)
    return (
        <div className={s.project}>
            {elementProject}
        </div>
    )
}
export default Project;