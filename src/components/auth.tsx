import React from 'react'
import { img4, img5, img6, img7, img8, img9 } from "../pictures.ts"
import { Link } from "react-router-dom"
import "../css/auth.css"
import { auth, errorsProps, valid, login } from "../utils/types.ts"
import axios from "axios"
import Cookie from "json-cookie"

const Auth = ({auto, menu, setAuto, setMenu, setUser}: auth) => {
    const [valid, setValid] = React.useState<valid>({email: '', password: '', passwordTwo: '', check: false}); // данные регистрации
    const [login, setLogin] = React.useState<login>({email: '', password: ''}); // данные логина
    const [errors, setErrors] = React.useState<errorsProps>({email: "", password: ""}); // ошибки при валидации данных регистрации
    const emailSet = (value: string) => {
        if(!/^[A-Za-z-0-9\-_[\]()!;:&^%$#?]+@[a-z]{2,6}\.[a-z]{2,6}$/.test(value)) { setErrors({...errors, email: "email"}); }
        else { setErrors({...errors, email: "OK"}); setValid({...valid, email: value}); }
    }
    const passwordSet = (value: string) => {
        if(!/^[A-Za-z0-9-_?!#$%^&*()+]{8,}$/.test(value)) { setErrors({...errors, password: "password"}); }
        else { setErrors({...errors, password: "OK"}); setValid({...valid, password: value}); }
    }
    const setPasswordTwo = (value: string) => {
        valid.passwordTwo = value;
    }
    const setCheck = () => {
        setValid({...valid, check: !valid.check});
    }
    const comparePassword = () => {
        if(valid.password != valid.passwordTwo) {
            alert("Пароли не совпадают.");
            return;
        }
        else {
            axios.get(`http://localhost:4000/users`).then(({data}: any) => {
                if(data.length) {
                    let existUser = data.find((item: any, index: number) => {
                        return item.email == valid.email;
                    })
                    if(existUser.email) {
                        alert("Пользователь с таким email уже существует.");
                        return;
                    }
                    else {
                        axios.post(`http://localhost:4000/users`, {email: valid.email, password: valid.password, check: valid.check}).then(({data}: any) => {
                            if(data.id) {
                                Cookie.set("userId", data.id);
                                setUser(data.id);
                                setAuto(false);
                            }
                        })
                    }
                }
            });
        }
    }
    const loginEmail = (value: string) => {
        setLogin({...login, email: value});
    }
    const loginPassword = (value: string) => {
        setLogin({...login, password: value});
    }
    const userLogin = () => {
        axios.get(`http://localhost:4000/users`).then(({data}: any) => {
            if(data.length) {
                let userInfo = data.find((item: any, index: number) => {
                    return item.email == login.email;
                });
                if(userInfo.password == login.password) {
                    Cookie.set("userId", userInfo.id);
                    setUser(userInfo.id);
                    setAuto(false);
                }
            }
        })
    }
    const changeMenu = (name: string) => {
        setMenu(name);
    }
    const closeAuth = () => {
        setAuto(false);
    }
  return (
    <div className={`auth__out ${auto ? '' : 'authDisplay'}`}>
        <div className="auth">
            <div className="auth__top">
                <div className="auth__top-btns">
                    <button className={`auth__top-btn ${menu == "login" ? 'auth__top-btn-active' : ''}`} onClick={() => changeMenu("login")}>Login</button>
                    <button className={`auth__top-btn ${menu == "registration" ? 'auth__top-btn-active' : ''}`} onClick={() => changeMenu("registration")}>Registration</button>
                </div>
                <button className="auth__top-close" onClick={() => closeAuth()}><img src={img4} alt="img" /></button>
            </div>
            <div className="auth__fields">
                { errors.email == "email" ? <span>Введите корректный email</span> : '' }
                <input className={`${menu == "registration" ? '' : 'authDisplay'}`} type="text" placeholder="Email or mobile" onMouseLeave={(e) => emailSet(e.currentTarget.value)}/>
                { errors.password == "password" ? <span>Введите корректный пароль не менее 8 символов</span> : '' }
                <input className={`${menu == "registration" ? '' : 'authDisplay'}`} type="text" placeholder="Password" onMouseLeave={(e) => passwordSet(e.currentTarget.value)} />
                <input className={`${menu == "registration" ? '' : 'authDisplay'}`} type="text" placeholder="Confirm Password" onChange={(e) => setPasswordTwo(e.currentTarget.value)}/>
                
                <input className={`${menu == "login" ? '' : 'authDisplay'}`} type="text" placeholder="Email" onChange={(e) => loginEmail(e.currentTarget.value)}/>
                <input className={`${menu == "login" ? '' : 'authDisplay'}`} type="text" placeholder="Password" onChange={(e) => loginPassword(e.currentTarget.value)}/>
            </div>
            <div className={`auth__check ${menu == "registration" ? '' : 'authDisplay'}`}>
                <input type="checkbox" id="check" onChange={() => setCheck()} />
                <label htmlFor="check">Use social networks</label>
            </div>
            <div className="auth__status">
                <button className={`${menu == "registration" ? '' : 'authDisplay'}`} onClick={() => comparePassword()}>Registration</button>
                <button className={`${menu == "login" ? '' : 'authDisplay'} `} onClick={() => userLogin()}>Login</button>
            </div>
            <div className="auth__soc">Use social networks</div>
            <div className="auth__icons">
                <a href="https:\\www.google.com"><img src={img5} alt="img" /></a>
                <a href="https:\\www.google.com"><img src={img6} alt="img" /></a>
                <a href="https:\\www.google.com"><img src={img7} alt="img" /></a>
                <a href="https:\\www.google.com"><img src={img8} alt="img" /></a>
                <a href="https:\\www.google.com"><img src={img9} alt="img" /></a>
            </div>
            <div className={`auth__bottom ${menu == "registration" ? 'authDisplay' : ''} `}><Link to="/">Forgot password?</Link></div>
        </div>
    </div>
  )
}

export default Auth