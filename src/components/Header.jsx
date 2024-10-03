import React from 'react';
import {MdAddChart} from "react-icons/md";
import {useDispatch} from "react-redux";
import {modalFunction} from "../redux/slices/modalSlice.js";
import {searchDataFunc, sortingDataFunc} from "../redux/slices/dataSlice.js";
import {Link} from "react-router-dom";

const Header = () => {

    const dispatch = useDispatch();

    return (
        <div
            className='flex max-sm:flex-col lg:px-[200px] items-center justify-between bg-zinc-600 text-white px-4 py-3'>
            <Link to='/' className='text-2xl '>Products</Link>
            <div className='flex items-center gap-1 sm:gap-4'>
                <div className='text-black'>
                    <select onChange={e => dispatch(sortingDataFunc(e.target.value))}
                            className='h-9 px-2 w-30 rounded-lg'>
                        <option value='asc'>Ascending</option>
                        <option value='desc'>Descending</option>
                    </select>
                </div>

                <div>
                    <input onChange={e => dispatch(searchDataFunc(e.target.value))}
                           className='flex items-center box-border  h-9 rounded-lg px-4 text-black' type='text'
                           placeholder='You can search..'/>
                </div>
                <div onClick={() => dispatch(modalFunction())}
                     className='flex items-center justify-center w-10 h-10 bg-gray-500 hover:bg-zinc-800
                     rounded-full cursor-pointer'>
                    <MdAddChart size='24'/>
                </div>
            </div>
        </div>
    );
};

export default Header;
