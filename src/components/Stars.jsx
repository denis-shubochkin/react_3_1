import {Star} from './Star';
import shortId from 'shortid';
import React from 'react';
import PropTypes from 'prop-types';

export function Stars(props) {
    const {count} = props;
    if(count < 1 || count > 5 || !Number.isInteger(count))
    {
        return null;
    }

    let arr = [];
    for(let i =0;i<count;i++)
    {
     arr.push({
         val: 1,
         key: shortId.generate()
     });
    }
    
    return(
    <ul className="card-body-stars u-clearfix">
            <li>
                {arr.map((el)=> <Star key={el.key}/>)}
            </li>
    </ul>
    )
}

Stars.defaultProps = {
    count: 0,
}

Stars.propTypes = {
    count: PropTypes.number,
}