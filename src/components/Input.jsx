import React from 'react';


const Input = ({type, value, id, name, onChange, placeholder}) => {
    return (
        <input value={value} className='h-10 w-full border outline-none my-2 mt-3 rounded-md p-2' placeholder={placeholder}  type={type} id={id} name={name} onChange={onChange}  />
    );
};

export default Input;
