import React from 'react'
import styles from '../FormSignUp/FormSignUp.module.scss'
import classNames from 'classnames/bind'
import { useDispatch, useSelector } from 'react-redux'
import { loginAccount } from '../../../redux/actions'
import Axios from 'axios'

import { Link, useNavigate } from 'react-router-dom'

const cx = classNames.bind(styles)

function FormSignIn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const handleLogin = () => {
        const newAccount = {
            email: email,
            password: password,
        }
        Axios.post('http://localhost:5000/accounts/login', newAccount).then((res) => {
            localStorage.setItem('user', JSON.stringify(res.data));
            navigate('/');
        })
        .catch((err) => {
            console.log(err);
        })
        // dispatch(loginAccount.loginStart(newAccount));
    }
    return (
        <div className={cx('form')}>
            <h1 className={cx('form__title')}>ĐĂNG NHẬP</h1>
            <div className={cx('form__line')}></div>
            <form method="post" action="">
                <input type='text' placeholder="Địa chỉ email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type='password' placeholder="Mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)} />
                <div className={cx('form__forget--password')}><Link to={''}>Quên mật khẩu?</Link></div>
                <div onClick={handleLogin} className={cx('form__btn')}>Đăng nhập</div>
            </form>
        </div>
    )
}

export default FormSignIn