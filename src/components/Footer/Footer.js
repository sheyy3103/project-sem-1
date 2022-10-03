import React from 'react'
import className from 'classnames/bind'
import styles from './Footer.module.css'
import payment from "../../images/payment.png"
import {AiOutlineCopyrightCircle} from 'react-icons/ai'

let cx = className.bind(styles)
function Footer() {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.6585384390974!2d105.78131221468611!3d21.046344492554194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab32dd670b87%3A0x5584fc13c4f1f6d5!2zMjUwIEhvw6BuZyBRdeG7kWMgVmnhu4d0LCBD4buVIE5odeG6vywgQ-G6p3UgR2nhuqV5LCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1663904314523!5m2!1svi!2s"
        width="100%" height="350" allowFullScreen="" loading="lazy"
        referrerPolicy="no-referrer-when-downgrade" className={cx('map-no-border')}></iframe>
      <div className={cx('container-fluid',' pt-0', 'px-5','bg-footer')}>
        <div className="row pt-3">
          <div className="col-lg-4 text-left">
            <h3 className="font-weight-bold py-2">Hỗ trợ khách hàng</h3>
            <p className="m-0 py-1">Chính sách Đổi trả</p>
            <p className="m-0 py-1">Chính sách Riêng tư</p>
            <p className="m-0 py-1">Chính sách Giao hàng</p>
            <p className="m-0 py-1">Chính sách Bảo hành</p>
            <p className="m-0 py-1">Điều khoản dịch vụ</p>
          </div>
          <div className="col-lg-4 text-left">
            <h3 className="font-weight-bold py-2">Về Sheyy's Family</h3>
            <p className="m-0 py-1">Câu chuyện</p>
            <p className="m-0 py-1">Các đối tác</p>
            <p className="m-0 py-1">Quyền lợi thành viên</p>
            <p className="m-0 py-1">Làm việc với Sheyy</p>
          </div>
          <div className="col-lg-4 text-left">
            <h3 className="font-weight-bold py-2">Thanh toán</h3>
            <img src={payment} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-12 py-3 text-center">
            <p className="font-italic font-weight-light"><sup><AiOutlineCopyrightCircle /></sup>&nbsp;2022
              Desinged and developed by Sheyy</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer