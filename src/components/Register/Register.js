import React from 'react'
import styles from '../Login/Login.module.css'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { register } from '../../services/UsersServices';
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

let cx = classNames.bind(styles);
const initialValues = {
  // trong này là mấy cái trường ở form.
  fullname: "",
  email: "",
  password: ""
}
const validationSchema = Yup.object().shape({
  // validate các trường ở đây
  fullname: Yup.string().required("Không được để trống trường này").min(3, "Họ và tên từ 3 đến 20 kí tự").max(20, "Họ và tên từ 3 đến 20 kí tự"),
  email: Yup.string().required("Không được để trống trường này").email("Email không đúng định dạng"),
  password: Yup.string().required("Không được để trống trường này").min(8, "Mật khẩu từ 8 đến 18 kí tự").max(18, "Mật khẩu từ 8 đến 18 kí tự")

  // string() -> kiểu dữ liệu của input
  // require() -> bắt buộc phải nhập khi submit
  // email() -> validate định dạng email
  // min max() -> độ dài ký tự của input
})

function Register() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues,
    // giá trị khởi tạo của form
    validationSchema,
    // validate
    onSubmit: async (user) => {
      let response = await register(user);
      Swal.fire({
        icon: 'success',
        title: 'Wonderful!',
        text: 'Đăng ký tài khoản thành công.',
        timer: 1500
      })
      response.status === 201 && navigate("/login");
      // có dữ liệu r thì thêm mới thôi >
    }
  });
  return (
    <div className={cx('main-login', 'bg-login', 'd-flex align-items-center')}>
      <div className="container">
        <form onSubmit={formik.handleSubmit} className={cx("form-signup", "d-flex flex-column")}>
          <div className={cx('mb-3')}>
            <input
              name="fullname"
              className={cx('ip-login')}
              placeholder="Họ và tên"
              value={formik.values.fullname}
              onChange={formik.handleChange}
            />
          </div>
          <span className={cx("err")}>
            {formik.errors.fullname ? formik.errors.fullname : ""}
          </span>
          <div className={cx('mb-3')}>
            <input
              name="email"
              className={cx('ip-login')}
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>
          <span className={cx("err")}>
            {formik.errors.email ? formik.errors.email : ""}
          </span>
          <div className={cx('mb-3')}>
            <input
              name="password"
              className={cx('ip-login')}
              placeholder="Mật khẩu"
              value={formik.values.password}
              onChange={formik.handleChange}
              type="password"
            />
          </div>
          <span className={cx("err")}>
            {formik.errors.password ? formik.errors.password : ""}
          </span>

          <p className={cx('fz25', 'mt-4', 'text-left')}>Đã có tài khoản? <Link to='/login' >Đăng nhập</Link></p>
          <button type="submit"
            className={cx("btn", "btn-login", "d-flex align-items-center justify-content-center font-weight-bold")}>Đăng
            ký</button>
        </form>
      </div>

    </div>
  )
}

export default Register