import React from 'react'
import about from '../../images/img-about.jpg'
import styles from './Contact.module.css'
import classNames from 'classnames/bind'
import { GoLocation } from 'react-icons/go'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { FiFacebook } from 'react-icons/fi'
import { useFormik } from 'formik'

import { useNavigate } from 'react-router-dom'
import { sendContact } from '../../services/ContactServices'
import { send } from '../../redux/actions/contact'

import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux'

let cx = classNames.bind(styles);
const initialValues = {
    // trong này là mấy cái trường ở form.
    fullname: "",
    email: "",
    phone: "",
    message: ""
}


function Contact() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues,
        // giá trị khởi tạo của form
        onSubmit: async (contact) => {
            let response = await sendContact(contact);
            dispatch(send(contact));
            if(contact){
            Swal.fire({
                icon: 'success',
                title: 'Wonderful!',
                text: 'Cảm ơn bạn đã liên hệ với chúng tôi',
                timer: 1500
            })}
            response.status === 201 && navigate("/");
            // có dữ liệu r thì thêm mới thôi >
        }
    });
    return (
        <div className='mb-5'>
            <div className="container-fluid px-5 pt-5">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6">
                        <img src={about} alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-6">
                        <p className="h2 text-uppercase text-center py-1">sheyy'<span className='text-lowercase'>s</span>&nbsp;family</p>
                        <div className={cx('contact-info', 'my-2')}>
                            <div className="location d-flex align-items-center my-1">
                                <span className={cx('icon-contact')}><GoLocation /></span>
                                <span className="ml-3 text-capitalize">250, hoàng quốc việt, cổ nhuế, cầu giấy, hà nội</span>
                            </div>
                            <div className="phone d-flex align-items-center my-1">
                                <span className={cx('icon-contact')}><AiOutlinePhone /></span>
                                <span className="ml-3">+84 363 863 581</span>
                            </div>
                            <div className="mail d-flex align-items-center my-1">
                                <span className={cx('icon-contact')}><AiOutlineMail /></span>
                                <span className="ml-3">kelvinhuynhalves1102@gmail.com</span>
                            </div>
                            <div className={cx('fb', 'd-flex', 'align-items-center', 'my-1')}>
                                <a href="http://fb.com/sheyy3103" target="_blank" rel="noopener noreferrer">
                                    <span className={cx('icon-contact')}>
                                        <FiFacebook />
                                    </span>
                                    <span className="ml-3">Sheyy's family</span>
                                </a>
                            </div>
                        </div>
                        <p className="h2 text-uppercase text-center pt-2">liên hệ với chúng tôi</p>
                        <form onSubmit={formik.handleSubmit} className={cx('contact-form', 'my-2')}>
                            <div className="row justify-content-between align-items-center mb-4 pb-2">
                                <input type="text" className={cx('ip-name')} placeholder="Họ và tên" name="fullname" value={formik.values.fullname} onChange={formik.handleChange} />
                                <input type="text" className={cx('ip-phone')} placeholder="Số điện thoại" name="phone" value={formik.values.phone} onChange={formik.handleChange} />
                            </div>
                            <div className="row justify-content-between align-items-center mb-4 pb-2">
                                <input type="text" className={cx('ip-mail')} placeholder="Địa chỉ email" name="email" value={formik.values.email} onChange={formik.handleChange} />
                            </div>
                            <div className="row justify-content-between align-items-center mb-4 pb-2">
                                <textarea type="text" className={cx('ip-mess')} rows="3" placeholder="Lời nhắn" name="message" value={formik.values.message} onChange={formik.handleChange} ></textarea>
                            </div>
                            <div className="row justify-content-center align-items-center"><button type='submit'
                                className={cx('btn', 'btn-contact', 'btn-block')}>Gửi</button></div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact