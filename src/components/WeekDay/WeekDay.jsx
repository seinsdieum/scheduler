import React, {useRef, useState} from 'react';
import style from './WeekDay.module.css'
import TimeElement from "../TimeElement/TimeElement.jsx";
import {useSelector} from "react-redux";
const WeekDay = ({weekDay}) => {

    function handleExpanding() {
        if(!expanded) {
            setExpanded(true)
        }
        else {
            setExpanded(false)
        }
    }

    const [expanded, setExpanded] = useState(false)
    const week = useSelector(state => state.options.currentWeek)
    return (
        <div className={`${style.week__day} ${expanded ? style.expanded : ''}`}>
            <div onClick={handleExpanding} className={style.week__day__bar}>
                <h2 >{weekDay.day}</h2>
            </div>
            <div className={style.times}>
                {weekDay.schedule.map((d,index) => {
                    if(!d.weekRelation) return <TimeElement key={d.name+d.type} element={d}></TimeElement>
                    else if(d.weekRelation === week) return <TimeElement key={d.name} element={d}></TimeElement>
                    else return ''
                })}
            </div>
        </div>
    );
};

export default WeekDay;