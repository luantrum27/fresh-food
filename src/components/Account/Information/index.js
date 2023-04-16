import React, { useState } from 'react'
import styles from './Information.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function Information({ account }) {
    const [name, setName] = useState(account?.name || 'Hoàng Thế Luân')
    const [address, setAddress] = useState(account?.address || 'Thôn Hà Thượng, Xã Gio Châu, Huyện Gio Linh, Tỉnh Quảng Trị')
    const [phoneNumber, setPhoneNumber] = useState(account?.phoneNumber || '0379124695')
    const [email, setEmail] = useState(account?.email || 'hoangtheluan2016@gmail.com')
    return (
        <div className={cx('information')}>
            <h1>Thông tin tài khoản</h1>
            <form>
                <div class="mb-3">
                    <label for="name" class="form-label">Họ và tên</label>
                    <input type="name" class="form-control" id="name" aria-describedby="emailHelp" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="address" class="form-label">Địa chỉ</label>
                    <input type="address" class="form-control" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="phoneNumber" class="form-label">Số điện thoại</label>
                    <input type="phoneNumber" class="form-control" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <Link to="/account" type="submit" class="btn btn-danger">Quay lại</Link>
                <button type="submit" class="btn btn-primary" style={{ marginLeft: '30px' }}>Cập nhật</button>
            </form>
        </div>
    )
}

export default Information