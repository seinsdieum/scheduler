import React, {useState} from 'react';
import style from './WeekDay.module.css'
import TimeElement from "../TimeElement/TimeElement.jsx";
import {useSelector} from "react-redux";
const WeekDay = ({weekDay}) => {

    const [expanded, setExpanded] = useState(false)
    const week = useSelector(state => state.options.currentWeek)
    return (
        <div onClick={() => setExpanded(!expanded)} className={`${style.week__day} ${expanded ? style.expanded : ''}`}>
            <h2>{weekDay.day}</h2>
            {
                expanded
                    ? <div className={style.times}>
                        {weekDay.schedule.map(d => {
                            if(!d.weekRelation) return <TimeElement key={d.name+d.type} element={d}></TimeElement>
                            else if(d.weekRelation === week) return <TimeElement key={d.name} element={d}></TimeElement>
                            else return ''
                        })}
                    </div>
                    : ''
            }
        </div>
    );
};

export default WeekDay;