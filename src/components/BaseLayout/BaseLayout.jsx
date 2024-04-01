import React from 'react';
import style from './BaseLayout.module.css'
import {Outlet} from "react-router-dom";
import githubSrc from './github-mark-white.png'
import Icon from "../Icon/Icon.jsx";
import fitSrc from '../../../icons/fit.svg'
const BaseLayout = () => {
    return (
        <div className={style.base__layout}>
            <header>
                <Icon src={fitSrc}></Icon>
                <h2>scheduler</h2>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <a href={'https://github.com/seinsdieum/scheduler'}><img src={githubSrc}/></a>
            </footer>
        </div>
    );
};

export default BaseLayout;