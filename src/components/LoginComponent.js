import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleClick = () => {
        axios.post(`https://devapi.seinoindomobil.co.id:2002/test/auth`, form)
            .then((res) => {
                const token = res.data.result.signature.access
                localStorage.setItem('auth', 1)
                localStorage.setItem('user', JSON.stringify(token))
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="row justify-content-center mt-4">
            <div className="col-md-4">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input
                            type="text"
                            name='username'
                            className="form-control"
                            placeholder='Username'
                            onChange={handleChange}
                            value={form.username}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            name='password'
                            className="form-control"
                            placeholder='Password'
                            onChange={handleChange}
                            value={form.password}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={handleClick}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginComponent
