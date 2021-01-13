import React from 'react';
import './breadcrumb.scss';

const Breadcumbs = (props) => {
    return (
        <div id="breadcrumb">
        {props.categories.map((category, i) => {
            if( i + 1 === props.categories.length) {
                return <p key={i}> {category}</p>
            } else {
                return category + ' > '
            }
        })}
          {/*   {props.categories.map((category, i) => {
                if(i + 1 === props.categories.length) {
                    return <strong key={i}>{category}</strong>;
                } else {
                    return category + ' > ';
                }
            })} */}
        </div>
    )
}

export default Breadcumbs;