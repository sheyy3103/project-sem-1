import React from 'react'
import classNames from "classnames/bind";
import styles from "./Cart.module.css";
import {BsArrowLeft} from "react-icons/bs"
import {AiOutlineDelete, AiOutlineTag} from "react-icons/ai"
import { removeFromCart, updateCart } from "../../redux/actions/cart";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

let cx = classNames.bind(styles)

function Cart() {
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch();
    const remove = (item) => {
        Swal.fire({
            title: 'Bạn chắc chắn không?',
            text: "Bạn không thể khôi phục khi đã xóa!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Có!',
            cancelButtonText: 'Không!',
            reverseButtons: false
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(removeFromCart(item));
                Swal.fire(
                    'Deleted!',
                    'Bạn đã xóa thành công sản phẩm.',
                    'success'
                )
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                Swal.fire(
                    'Cancelled',
                    'Sản phẩm của bạn đã được giữ lại',
                    'error'
                )
            }
        })
    }
    return (
        <div className='mb-5'>
            <div className="container-fluid px-5 pt-5">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <table className="table">
                            <thead>
                                <tr className="">
                                    <th scope="col" className={cx("fz18")}></th>
                                    <th scope="col" className={cx("fz18", 'text-left')}>Sản phẩm</th>
                                    <th scope="col" className={cx("fz18")}>Giá</th>
                                    <th scope="col" className={cx("fz18")}>Số lượng</th>
                                    <th scope="col" className={cx("text-right", 'fz18', "pr-4")}>Tổng cộng</th>
                                </tr>
                            </thead>
                            {
                                cart.cartItems.map((item) => {
                                    return (
                                        <tbody key={item.id}>
                                            <tr className="">
                                                <td className="d-flex align-items-center justify-content-around">
                                                    <span className='btn' onClick={()=> remove(item)}>
                                                        <AiOutlineDelete />
                                                    </span>
                                                    <img src={item.img} alt="" className={cx("img-table")} />
                                                </td>
                                                <td className="text-uppercase pt-5 fz18 text-left">{item.name} </td>
                                                <td className="pt-5 fz18 font-weight-bold text-danger"><span>{item.price}<sup
                                                    className={cx("text-decoration-underline")}>đ</sup></span></td>
                                                <td className="pt-5 fz18">{item.quantity}</td>
                                                <td className="pt-5 fz18 font-weight-bold text-right pr-4 text-danger"><span>{item.total}<sup
                                                    className={cx("text-decoration-underline")}>đ</sup></span></td>
                                            </tr>
                                        </tbody>
                                    )
                                })
                            }
                        </table>
                        <div className="pl-3 text-left">
                            <Link to='/shop' className={cx('btn','btn-outline-danger','btn-outline-danger-cus')}><BsArrowLeft /><span
                                className="fz20">&nbsp;&nbsp;Tiếp tục xem thêm sản phẩm</span></Link>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <p className="text-uppercase h3 font-weight-bold">thành tiền</p>
                        <hr />
                        <div className="d-flex justify-content-between align-items-center fz18 pt-2">
                            <span className="">Tổng cộng</span>
                            <span className="font-weight-bolder text-danger">{}<sup
                                className={cx("text-decoration-underline")}>đ</sup></span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center fz18 pt-2">
                            <span className="">Giao hàng</span>
                            <span className="">
                                <span>Giao hàng miễn phí</span>
                            </span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center fz18 pt-2">
                            <span className="">Phương thức thanh toán</span>
                            <select className={cx('custom-select', 'w-45')}>
                                <option>-- Chọn --</option>
                                <option>Thanh toán khi nhận hàng</option>
                            </select>
                        </div>
                        <div className="d-flex justify-content-between fz20 pt-4">
                            <span className="font-weight-bolder">Tổng cộng</span>
                            <span className="font-weight-bolder text-danger">{}<sup
                                className={cx("text-decoration-underline")}>đ</sup></span>
                        </div>
                        <hr />
                        <div><Link to="/cart" className={cx("btn", "btn-block", 'btn-discount', "btn-lg")}>Tiến hành thanh toán</Link></div>
                        <div className='text-left'>
                            <span className="fz18"><AiOutlineTag />&nbsp;Mã giảm giá (nếu có):</span>
                            <input type="text" className="w-100 px-3 py-2 mt-2" placeholder="Nhập mã" />
                            <button className={cx('btn', 'btn-block', 'btn-outline-secondary','btn-outline-cus', 'fz18', 'mt-3', 'btn-lg')}>Áp dụng</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart