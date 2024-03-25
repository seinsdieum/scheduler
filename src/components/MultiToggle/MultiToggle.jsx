import React, {useEffect, useRef, useState} from 'react';
import style from './MultiToggle.module.css'
const MultiToggle = ({options, current, ...props}) => {

    const [currentIndex, setCurrentIndex] = useState(current || undefined)
    const selectRef = useRef(null)
    const toggleRef = useRef(null)

    useEffect(() => {
        if(!currentIndex) {
            selectRef.current.style.width = 0
        } else if(options && selectRef.current) {
            const currentSimulation = () => {
                return <div className={style.toggle} >key={options[current-1].name}</div>
            }
            const el = currentSimulation()
            const rect = el.getBoundingClientRect()
            const toggleRect = toggleRef.current.getBoundingClientRect()
            selectRef.current.style.width = `${rect.width+10}px`
            selectRef.current.style.marginLeft = `${rect.x - toggleRect.x-5}px`
        }
    }, [])

    function handleTogglePosition(e) {
        const rect = e.target.getBoundingClientRect()
        const toggleRect = toggleRef.current.getBoundingClientRect()
        selectRef.current.style.width = `${rect.width}px`
        selectRef.current.style.marginLeft = `${rect.x - toggleRect.x}px`
    }
    function handleToggle(action, e) {
        handleTogglePosition(e)
        action()
    }
    return (
        <div ref={toggleRef} className={style.multi__toggle}>
            {options ? <>
                {options.map((opt, index) => <div className={style.toggle} key={opt.name} onClick={e => handleToggle(opt.action, e)}>{opt.name}</div>)}
                <div className={style.multi__select} ref={selectRef}></div>
            </> : ''}
        </div>
    );
};

export default MultiToggle;