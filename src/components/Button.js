import React from 'react';

function Button({content}) {
    return (
        <button type="button"
                className="bg-white hover:bg-blue-500 hover:text-white hover:border-blue-500 text-gray-600
                border-2 border-gray-600 font-bold py-4 px-16 rounded-2xl">{content}</button>
    );
}

export default Button;
