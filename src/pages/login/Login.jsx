import React from 'react'
import "./Login.scss"
import logo from "./../../images/Logo.png"

const Login = () => {
    return (
        <div className='login'>
            <div className="container">
                <div className="top">
                    <img src={logo} alt="" />
                </div>

                <div className="wrapper">

                    <form action="">
                        <h2 className="title">Sign In</h2>
                        <input type="text" placeholder='Email or Phone Number' />
                        <input type="password" placeholder='Password' />
                        <button className='signButton'>Sign In</button>
                        <span className='newtohere'>New to Netflix? Sign up now</span>

                        <span>This page is protected by Google reCAPTCHA to
                            ensure you're not a bot.Learn more</span>
                    </form>

                </div>
            </div>

        </div>
    )
}

export default Login