import React from 'react';
import style from './TimeElement.module.css'
const TimeElement = ({element}) => {
    return (
        <div className={style.element}>
            <div>
                <h3><span className={style.type}>{element.type}</span>{element.name} </h3>
                <p className={style.time}>{element.time}</p>
            </div>
           <div className={style.right}>
               <p>{element.auditory}</p>
               <p className={style.time}>{element.teacher}</p>
           </div>

        </div>
    );
};

export default TimeElement;