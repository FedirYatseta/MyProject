import React from 'react';
import NewsItem from "./Item/Item"

const Partners = (props) => {
    let state = props.newsPrice;
    let newsElements = state.map(n => <NewsItem post={n.post} key={n.id} />);
 
    return (
       
        <div>
           {newsElements}
        </div>
    )
}


export default Partners;