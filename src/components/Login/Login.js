import React from 'react'
import styles from './Login.module.css'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { getUsers } from '../../services/UsersServices'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { saveUser } from '../../redux/actions/users'
import Swal from 'sweetalert2';

let cx = classNames.bind(styles);

const initValues = {
  email: "",
  password: ""
}

const validate = Yup.object().shape({
  email: Yup.string().required("Vui lòng nhập số điện thoại hoặc email"),
  password: Yup.string().required("Vui lòng nhập mật khẩu")
});

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: initValues,
    validationSchema: validate,
    onSubmit: async data => {
      let response = await getUsers();
      let users = response.data;
      let findUser = users.filter(u => {
        return data.email === u.email && data.password === u.password;
      });
      let user = findUser[0];
      if (user) {
        dispatch(saveUser(user));
        Swal.fire({
          icon: 'success',
          title: 'Wonderful!',
          timer: 1500,
          text: 'Đăng nhập thành công'
        })
        navigate("/");
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...!',
          text: 'Email hoặc mật khẩu không chính xác',
        })
      }
    }
  })
  return (
    <div className={cx('main-login', 'bg-login', 'd-flex align-items-center')}>
      <div className="container">
        <form onSubmit={formik.handleSubmit} className={cx("form-login", "d-flex flex-column")}>
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
          <p className={cx('fz25', 'mt-4','text-left')}>Chưa có tài khoản? <Link to='/register' >Đăng ký ngay</Link></p>
          <button type="submit"
            className={cx("btn",'mt-4', "btn-login", "d-flex align-items-center justify-content-center font-weight-bold")}>Đăng
            nhập</button>
        </form>
      </div>

    </div>
  )
}

export default Login