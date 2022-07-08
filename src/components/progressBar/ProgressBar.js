import * as React from "react";
import '../../styles/progressBar.scss'
import Tick from "./Tick.js";

const Progress = ({ passedLessons, itemsCount }) => {
    const elementsArray = Array.from(Array(itemsCount));
    return (
        <div
            className={'progressBar_wrapper'}
        >
            {elementsArray.map((element, index, array) => (
                <Tick
                    key={`${element}${index}`}
                    fill={index < passedLessons}
                />
            ))}
        </div>
    );
};

export default Progress;