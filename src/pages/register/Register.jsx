import React, { useRef, useState } from 'react'
import "./Register.scss"
import logo from "../../images/Logo.png"
import { ArrowForward } from '@mui/icons-material'


const Register = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const [gmail, setGmail] = useState('')
    const [password, setPassword] = useState('')

    const handleClick = () => {
        setGmail(emailRef.current.value);
    }

    const handleFinish = () => {
        setPassword(passwordRef.current.value)
    }


    return (
        <div className="register">
            <div className="container">
                <div className="top">
                    <img src={logo} alt="" />
                    <button>Sign In</button>
                </div>
                <div className="wrapper">
                    <div className="Title">
                        <h1>Enjoy big movie , hit Series and more from</h1>
                        <h1> ₹149</h1>

                        <span>Join toady, cancle anytime</span>
                        <p>Ready to watch? Enter Your Gmail to Create or restart your membership </p>
                    </div>

                    {
                        gmail === '' ?
                            <div className="input">
                                <input type="email" ref={emailRef} placeholder='Email Address' />
                                <button className="registerButton" onClick={ handleClick}>Get Start <ArrowForward /></button>
                            </div> 
                            :
                            <div className="input">
                                <input type="password" ref={passwordRef} placeholder='password' />
                                <button className="Started" onClick={handleFinish}> Start <ArrowForward /></button>
                            </div>
                    }
                </div>
            </div>
        </div>

    )
}

export default Register