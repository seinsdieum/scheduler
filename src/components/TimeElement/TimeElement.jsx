import React, {useEffect, useState} from 'react';
import style from './TimeElement.module.css'
import Icon from "../Icon/Icon.jsx";
import labSrc from '../../../icons/lab.svg'
import lecSrc from '../../../icons/lecture.svg'
import practSrc from '../../../icons/practice.svg'
const TimeElement = ({element}) => {
    const [src, setSrc] = useState(labSrc)

    useEffect(() => {
        if(element.type === 'лк') setSrc(lecSrc)
        if(element.type === 'пз') setSrc(practSrc)
        if(element.type === 'лр') setSrc(labSrc)
    }, [])

    return (
        <div className={style.element}>
            <div>
                <h3><span><Icon src={src}></Icon></span><span>{element.name}</span> </h3>
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