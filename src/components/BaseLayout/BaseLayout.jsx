import React from 'react';
import style from './BaseLayout.module.css'
import {Outlet} from "react-router-dom";
import githubSrc from './github-mark-white.png'
import Icon from "../Icon/Icon.jsx";
import fitSrc from '../../../icons/lecture.svg'
import pdfSrc from '../../../icons/pdf.svg'
const BaseLayout = () => {
    return (
        <div className={style.base__layout}>

            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <a href={'https://github.com/seinsdieum/scheduler'}><img src={githubSrc}/></a>
                <a href={'https://it.belstu.by/studentam/uchebnyj-process/'}><Icon src={pdfSrc}></Icon></a>
            </footer>
        </div>
    );
};

export default BaseLayout;