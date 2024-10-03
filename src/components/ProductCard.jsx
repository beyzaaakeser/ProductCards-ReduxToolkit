import React from 'react';
import {BsThreeDots} from "react-icons/bs";
import {useDispatch} from "react-redux";
import {deleteDataFunc} from "../redux/slices/dataSlice.js";
import {modalFunction} from "../redux/slices/modalSlice.js";
import {useNavigate} from "react-router-dom";

const ProductCard = ({data, activeCardId, onEditToggle}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const updateFunc = () => {
        dispatch(modalFunction());
        onEditToggle(null); // Düzenleme açıldığında açık durumu kapat
        navigate(`/?update=${data.id}`);
    };

    const isActive = activeCardId === data.id; // Aktif kartı kontrol et

    const CurrencyFormat = ({amount}) => {
        const formattedAmount = new Intl.NumberFormat('en-EN', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
        }).format(amount);

        return <span>{formattedAmount}</span>;
    };

    return (
        <div className="overflow-hidden mx-2 lg:mx-0 border border-gray-100  h-[300px] relative rounded-md">
            <img className='w-full h-full object-cover rounded-md' src={data?.url} alt=""/>

            <div className="absolute  py-1 px-2 left-0 bottom-0 bg-gray-300 text-zinc-900 w-full">
                <div className='text-lg font-semibold capitalize'>
                    {data?.name}
                </div>
                <div>{data?.price && <CurrencyFormat amount={data.price}/>}</div>
            </div>

            <div onClick={() => onEditToggle(data.id)} className='absolute cursor-pointer top-1 right-2'>
                <BsThreeDots color='red' size='24'/>
            </div>

            {isActive && (
                <div className='bg-transparent absolute flex text-sm text-center top-1 right-10 text-white'>
                    <div onClick={() => dispatch(deleteDataFunc(data.id))}
                         className='hover:bg-yellow-600 cursor-pointer
                         bg-yellow-500 px-3 py-1 rounded-tl-md rounded-bl-md'>Delete
                    </div>
                    <div onClick={updateFunc}
                         className='hover:bg-green-700 cursor-pointer
                         bg-green-600 px-3 py-1 rounded-tr-md rounded-br-md'>Update
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductCard;
