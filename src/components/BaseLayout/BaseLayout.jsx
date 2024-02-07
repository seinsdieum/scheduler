import React from 'react';
import style from './BaseLayout.module.css'
import {Outlet} from "react-router-dom";
const BaseLayout = () => {
    return (
        <div className={style.base__layout}>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <p>alexellipse</p>
            </footer>
        </div>
    );
};

export default BaseLayout;