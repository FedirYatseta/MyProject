import React from 'react';
import s from "./BlogItem.module.css"

const BlogItem = (props) => {

    return (
        <div className={s.block_title}>
           {props.title}
           <div className={s.block_content}>
               {props.content}
           </div>
        </div>
    )
}
export default BlogItem;