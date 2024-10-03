import React from 'react';

const Button = ({onClick, btnText}) => {
    return (

        <button className='w-full h-10 mt-4 rounded-md border-transparent bg-blue-800 text-white flex items-center justify-center'
                onClick={onClick}>

            {btnText}
        </button>
    );
};

export default Button;
