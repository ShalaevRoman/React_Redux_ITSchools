import React from "react";

const Tick = ({ fill }) => {
    return (
        <div
            style={{
                width: "20px",
                height: "20px",
                backgroundColor: fill ? "#5A5A5A" : "#D9D9D9"
            }}
        ></div>
    );
};

export default Tick;