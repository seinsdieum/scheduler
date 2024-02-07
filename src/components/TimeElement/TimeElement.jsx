import React from 'react';
import style from './TimeElement.module.css'
const TimeElement = ({element}) => {
    return (
        <div className={style.element}>
            <h3>{element.name}</h3>
           <div className={style.right}>
               <p className={style.time}>{element.time}</p>
               <p>{element.auditory}</p>
           </div>

        </div>
    );
};

export default TimeElement;