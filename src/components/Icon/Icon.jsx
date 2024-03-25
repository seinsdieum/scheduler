import React from 'react';
import style from './Icon.module.css'
const Icon = ({src}) => {
    return (
        <img alt={'missing'} className={style.icon} src={src}>

        </img>
    );
};

export default Icon;