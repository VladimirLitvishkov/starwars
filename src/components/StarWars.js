import React from "react";
import {starsWarsInfo} from "../utils/Const";
import style from '../css_modules/main.module.css';

const StarWars = (props) => {
    return (
        <div className={`${style.farGalaxy}`}>
            <p>{starsWarsInfo}</p>
        </div>
    )
};
export default StarWars;