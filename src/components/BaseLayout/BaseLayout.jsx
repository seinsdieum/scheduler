import React from 'react';
import style from './BaseLayout.module.css'
import {Outlet} from "react-router-dom";
import githubSrc from './github-mark-white.png'
const BaseLayout = () => {
    return (
        <div className={style.base__layout}>
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