import React, { useEffect } from 'react'
import './_loginScreen.scss'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../redux/actions/auth.action';
import { useNavigate } from 'react-router';


const LoginScreen = () => {
    const dispatch = useDispatch()

    const accessToken = useSelector(state => state.auth.accessToken)

    const handleLogin = () => {
        dispatch(login())
    }

    const navigate = useNavigate()

    useEffect(() => {
        if (accessToken) {
            navigate('/')
        }
    }, [accessToken, navigate])
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
                    alt="" />
                <button onClick={handleLogin}>Log in with google</button>
                <p>This Project is made using YOUTUBE Data API</p>
            </div>
        </div>
    )
}

export default LoginScreen
