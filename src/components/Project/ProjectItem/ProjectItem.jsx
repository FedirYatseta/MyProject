import React from 'react';
import s from './ProjectItem.module.css';


const ProjectItem = (props) => {
  
    return (<div>
        <div className={s.project}>
            {props.attr1}
        </div>

    </div>)
}


export default ProjectItem;