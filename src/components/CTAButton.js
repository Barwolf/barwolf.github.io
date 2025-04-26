import React from 'react';

function CTAButton({content, link}) {
    return (
        <a href={link} target="_blank">
            <button type="button"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-14 rounded-2xl">{content}</button>
        </a>
    );
}

export default CTAButton;
