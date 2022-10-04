import React from 'react'
import about from '../../images/img-about.jpg'
import styles from './Contact.module.css'
import classNames from 'classnames/bind'
import { GoLocation } from 'react-icons/go'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { FiFacebook } from 'react-icons/fi'

let cx = classNames.bind(styles)


function Contact() {
    return (
        <div>
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
                        <div className={cx('contact-form', 'my-2')}>
                            <div className="row justify-content-between align-items-center mb-4 pb-2">
                                <input type="text" className={cx('ip-name')} placeholder="Họ và tên" />
                                <input type="text" className={cx('ip-phone')} placeholder="Số điện thoại" />
                            </div>
                            <div className="row justify-content-between align-items-center mb-4 pb-2">
                                <input type="text" className={cx('ip-mail')} placeholder="Địa chỉ email" />
                            </div>
                            <div className="row justify-content-between align-items-center mb-4 pb-2">
                                <textarea type="text" className={cx('ip-mess')} rows="3" placeholder="Lời nhắn"></textarea>
                            </div>
                            <div className="row justify-content-center align-items-center"><a href="#"
                                className={cx('btn', 'btn-contact', 'btn-block')}>Gửi</a></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact