import React from 'react'
import className from 'classnames/bind'
import styles from './Footer.module.css'
let cx = className.bind(styles)
function Footer() {
  return (
    <div className={cx('bg-footer','container-fluid px-5')}>
      <div className="row">
        <div className="col-lg-4 text-left">
          <h3 className='font-weight-bold'>Hỗ trợ khách hàng</h3>
        </div>
        
        
      </div>
    </div>
  )
}

export default Footer