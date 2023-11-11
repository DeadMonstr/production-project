import React, {Suspense, useContext, useState} from 'react';
import {Link, Route, Routes} from "react-router-dom"
import {Counter} from "./components/Counter";
import "./styles/index.scss"
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {Theme, ThemeContext} from "./styles/theme/ThemeContext";
import {useTheme} from "./styles/theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

const App = () => {

    const {theme,toggleTheme} = useTheme()


    return (
        <div className={classNames("app",{hovered:true,selectable: false},[theme])}>
            <button onClick={toggleTheme}>Toggle </button>
            <Link to={"/"}>Main</Link>
            <Link to={"/about"}>About us</Link>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Routes>
                    <Route path={"/"} element={<MainPageAsync/>}/>
                    <Route path={"/about"} element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>

        </div>
    );
};

export default App;