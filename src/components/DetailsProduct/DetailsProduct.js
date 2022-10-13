import React, { useEffect, useState } from 'react'
import styles from './DetailsProduct.module.css'
import classNames from 'classnames/bind'
import { useNavigate, useParams } from 'react-router-dom'
import * as ProductServices from '../../services/ProductServices'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { addToCart } from '../../redux/actions/cart'
import Swal from 'sweetalert2'
import {useDispatch} from 'react-redux'

let cx = classNames.bind(styles)

function DetailsProduct() {
    const navigate = useNavigate();
    let { id } = useParams();
    const [details, setDetails] = useState({});
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    useEffect(() => {
        const getDetails = async () => {
            const data = await ProductServices.detailsProducts(id);
            setDetails(data);
        }
        getDetails();
    }, [id]);
    const add = (product, quantity) => {
        dispatch(addToCart(product, quantity));
        Swal.fire({
            icon: "success",
            title: 'Wonderful!',
            text: 'Sản phẩm của bạn đã được thêm vào giỏ',
            timer: 1500
        })
        navigate('/cart')

    }
    return (
        <div className='mb-5'>
            <div className="container-fluid">
                <h1 className="font-weight-bolder text-uppercase text-center pt-3">sheyy'<small>s</small> family</h1>
                <div className={cx('border-cus')}></div>
            </div>
            <div className="container col-lg-8 p-3 mt-3 main-section bg-white">
                <div className="row m-0">
                    <div className="col-lg-4 pb-3">
                        <img src={details.img} className="w-100" />
                    </div>
                    <div className="col-lg-8">
                        <div className="right-side-pro-detail border p-3 m-0">
                            <div className="row">
                                <div className="col-lg-12 text-left">
                                    <p className="m-0 p-0 h2 text-uppercase">{details.name}</p>
                                </div>
                                <div className="col-lg-12 text-left">
                                    <p className="my-0 py-2 h4 price-pro text-danger"><span>{details.price}<sup className={cx('text-underline')}>đ</sup></span></p>
                                    <hr className="p-0 m-0" />
                                </div>
                                <div className="col-lg-12 pt-2">
                                    <h5 className="font-weight-bolder">Đặc điểm chính</h5>
                                    <div className={cx('d-flex', 'justify-content-between', 'pt-1', 'fz18')}>
                                        <span>Loại: </span><span className="">{details.category}</span>
                                    </div>
                                    <div className={cx('d-flex', 'justify-content-between', 'pt-1', 'fz18')}>
                                        <span>Sản xuất tại: </span><span className="text-capitalize">việt nam</span>
                                    </div>
                                    <div className={cx('d-flex', 'justify-content-between', 'pt-1', 'fz18')}>
                                        <span>Bảo hành:</span><span className="text-capitalize">12 tháng</span>
                                    </div>
                                </div>
                                <div className="col-lg-12 mt-2 d-flex justify-content-between align-items-center">
                                    <p>Số lượng: </p>
                                    <div className={cx('form-cus', 'd-flex', 'w-75')}>
                                        <span>
                                            <button className={cx('btn-cus')} onClick={() => {
                                                if (quantity < 2) {
                                                    setQuantity(1);
                                                } else {
                                                    setQuantity(quantity - 1);
                                                }
                                            }}><AiOutlineMinus /></button>
                                        </span>
                                        <input value={quantity} onChange={(e) => { e.target.value > 0 ? setQuantity(e.target.value) : setQuantity(1) }} className={cx('ip-cus', 'text-center')} />
                                        <span>
                                            <button className={cx('btn-cus')} onClick={() => setQuantity(quantity + 1)}><AiOutlinePlus /></button>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-lg-12 mt-3 d-flex justify-content-center">
                                    <button className={cx('btn', 'btn-lg', 'btn-block', 'btn-addtocart', 'fz18', 'w-75')} onClick={() => add(details, quantity)}>Thêm vào giỏ</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <h2 className="font-weight-bold text-uppercase">Mô tả</h2>
                    <p className='text-left'>{details.description}</p>
                </div>
            </div></div>
    )
}

export default DetailsProduct