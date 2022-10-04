import React from 'react'
import about from "../../images/img-about.jpg"
import styles from "./About.module.css"
import classNames from 'classnames/bind'

let cx = classNames.bind(styles)

function About() {
    return (
        <>
            <div className="container-fluid">
                <h1 className="text-uppercase text-center pt-4">công ty nội thất sheyy'<small>s</small> family</h1>
                <div className={cx('border-cus')}></div>
            </div>
            <div className="container-fluid px-5 pt-5">
                <div className="row align-items-center">
                    <div className="col-lg-6 text-left">
                        <span className={cx('fz22')}>Chào mừng các bạn đến với Công ty nội thất Sheyy's family.<br /><br />
                            Khi kinh tế ngày càng phát triển thì nhu cầu có một không gian sống tiện nghi đang trở nên cấp thiết. Nội
                            thất trong không gian sống đang được các gia đình, doanh nghiệp chú trọng và quan tâm nhất định. Tuy vậy,
                            trên thị trường sự lặp đi lặp lại một cách nhàm chán trong thiết kế, sự cẩu thả trong quá trình sản xuất và
                            sự thiếu chuyên nghiệp trong dịch vụ chăm sóc khách hàng đang dần tạo nên một cái nhìn không tốt đến các sản
                            phẩm đồ gỗ trong nước. Hơn lúc nào hết cần có cuộc cách mạng để tạo ra những sản phẩm đồ gỗ nội thất "Hàng
                            Việt Nam chất lượng cao". Chính vì thế mà chúng tôi đã tạo nên các website nội thất để giới thiệu các sản
                            phẩm thuộc lĩnh vực này.<br /><br />
                            Sheyy's family là một trong những Website giới thiệu và bán các sản phẩm trang trí nội thất làm đẹp ngôi nhà
                            các quý khách hàng của chúng tôi. Sheyy's Family là một trong những thương hiệu của chúng tôi đang phát
                            triển. Với tiêu chí "không gian sống là tác phẩm nghệ thuật" đã và đang tạo ra các dòng sản phẩm thiết kế
                            đẹp, chất lượng cao đi kèm dịch vụ chu đáo. Đội ngũ nhân viên của Sheyy's Family là những kiến trúc sư trẻ,
                            thợ lành nghề luôn tâm huyết với từng sản phẩm.</span>
                    </div>
                    <div className="col-lg-6">
                        <img src={about} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About