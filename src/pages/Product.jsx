import React, {useEffect, useState} from 'react';
import ProductCard from "../components/ProductCard.jsx";
import {useDispatch, useSelector} from "react-redux";
import Modal from "../components/Modal.jsx";
import Input from "../components/Input.jsx";
import Button from "../components/Button.jsx";
import {createDataFunc, updateDataFunc} from "../redux/slices/dataSlice.js";
import {modalFunction} from "../redux/slices/modalSlice.js";
import {useLocation, useNavigate} from "react-router-dom";

const Product = () => {
    const dispatch = useDispatch();
    const {modal} = useSelector((state) => state.modal);
    const {data, keyword} = useSelector((state) => state.data);
    const navigate = useNavigate();
    const location = useLocation();
    let loc = location?.search.split('=')[1];

    const [productInfo, setProductInfo] = useState({name: "", price: "", url: ""});
    const [activeCardId, setActiveCardId] = useState(null); // Aktif kartı izleyen state

    const onChangeFunc = (e, type) => {
        if (type === "url") {
            setProductInfo(prev => ({...prev, [e.target.name]: URL.createObjectURL(e.target.files[0])}));
        } else {
            setProductInfo(prev => ({...prev, [e.target.name]: e.target.value}));
        }
    }

    useEffect(() => {
        if (loc) {
            setProductInfo(data.find(dt => dt.id == loc));
        }
    }, [loc, data]);

    const buttonFunc = () => {
        dispatch(createDataFunc({...productInfo, id: data.length + 1}));
        dispatch(modalFunction());
    }

    const buttonUpdateFunc = () => {
        dispatch(updateDataFunc({...productInfo, id: loc}));
        dispatch(modalFunction());
        navigate(`/`);
    }

    const contentModal = (
        <>
            <Input value={loc && productInfo?.name} placeholder={"Product Name "} type={'text'} name={"name"}
                   id={"name"} onChange={e => onChangeFunc(e, "name")}/>
            <Input value={loc && productInfo?.price} placeholder={"Product Price"} type={'text'} name={"price"}
                   id={"price"} onChange={e => onChangeFunc(e, "price")}/>
            <Input type={'file'} name={"url"} id={"url"} onChange={e => onChangeFunc(e, "url")}/>
            <Button btnText={loc ? "Product Update" : "Product Create"} onClick={loc ? buttonUpdateFunc : buttonFunc}/>
        </>
    )

    const handleEditToggle = (id) => {
        setActiveCardId(activeCardId === id ? null : id); // Aynı karta tıklanmışsa kapat, değilse aç
    };


    const filtered = data.filter(dt => dt.name.toLowerCase().includes(keyword.toLowerCase()));

    return (
        <div className='lg:px-[200px] mt-5'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-1 lg:gap-x-3 gap-y-4'>
                {
                    filtered?.map((item, index) => (
                        <ProductCard
                            key={index}
                            data={item}
                            activeCardId={activeCardId}
                            onEditToggle={handleEditToggle}
                        />
                    ))
                }
            </div>
            {modal && <Modal content={contentModal} title={loc ? "Product Update" : "Product Create"}/>}
        </div>
    );
};

export default Product;
