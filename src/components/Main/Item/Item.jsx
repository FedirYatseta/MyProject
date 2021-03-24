import React from 'react';
import s from './Item.module.css';


const NewItem = (props) => {
  
    return (<div>
        <div className={s.news}>
            {props.post}
            <div>
                
            </div>
        </div>

    </div>)
}


export default NewItem;