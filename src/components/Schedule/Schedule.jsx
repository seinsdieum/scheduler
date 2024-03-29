import React, {useState} from 'react';
import style from './Schedule.module.css'
import {weekSchedule} from "../../data/schedule.js";
import WeekDay from "../WeekDay/WeekDay.jsx";
import {useDispatch, useSelector} from "react-redux";
import MultiToggle from "../MultiToggle/MultiToggle.jsx";

const Schedule = () => {

    const [currentSchedule, setCurrentSchedule] = useState(weekSchedule)

    const dispatch = useDispatch()
    const toggleOptions = [
        {name: 'Нечетная', action: () => dispatch({type: 'CHANGE_WEEK', payload: 1})},
        {name: 'Четная', action: () => dispatch({type: 'CHANGE_WEEK', payload: 2})},
    ]

    return (
        <div className={style.schedule}>
            <MultiToggle current={0} options={toggleOptions}></MultiToggle>
            <div className={style.schedule__container}>
                {currentSchedule.map(d => <WeekDay key={d.day} weekDay={d}></WeekDay>)}
            </div>
        </div>
    );
};

export default Schedule;