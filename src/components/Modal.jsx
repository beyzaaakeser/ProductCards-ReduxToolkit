import React from 'react';
import {MdOutlineClose} from "react-icons/md";
import {useDispatch} from "react-redux";
import {modalFunction} from "../redux/slices/modalSlice.js";
import {useNavigate} from "react-router-dom";

const Modal = ({title, content}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const modalFunc = () => {
        dispatch(modalFunction())
        navigate("/")
    }

    return (
        <div
            className="fixed text-black top-0 left-0 right-0 bottom-0 w-full h-screen flex items-center justify-center">
            <div className="max-sm:w-[400px] md:w-[550px] lg:w-1/3 bg-white shadow-lg rounded-lg p-4">
                <div className='border-b py-2 flex items-center justify-between'>
                    <div className={'text-2xl'}>{title}</div>
                    <MdOutlineClose onClick={modalFunc} size='24'/>
                </div>

                {content}
            </div>
        </div>
    );
};

export default Modal;
