import React from 'react';

function Icon({content, link}) {
    return (
        <a href={link} target="_blank">
            <img src={content} alt="logo" className={"w-4/5"}/>
        </a>
    );
}

export default Icon;