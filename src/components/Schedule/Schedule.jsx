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

    const week = useSelector(state => state.options.currentWeek)
    return (
        <div className={style.schedule}>
            <h1>Расписание</h1>
            <MultiToggle current={false} options={toggleOptions}></MultiToggle>
            <div>
                {currentSchedule.map(d => <WeekDay key={d.day} weekDay={d}></WeekDay>)}
            </div>
        </div>
    );
};

export default Schedule;