import React from 'react'
import { Header, Auth } from '../components/index.ts'
import "./main.css"
import Cookie from "json-cookie"
import {useNavigate} from "react-router-dom"

const Main = () => {
  const [auto, setAuto] = React.useState<boolean>(false);
  const [menu, setMenu] = React.useState<string>("login");
  const [user, setUser] = React.useState<string>("");
  const navigate = useNavigate();
  const showAuth = (bool: string) => {
    setAuto(true);
    setMenu(bool);
  }
  const checkUser = () => {
    if(Cookie.get("userId")) {
      navigate('/orders');
    }
    else {
      alert("Вы не авторизированы.");
    }
  }
  return (
    <div className="body">
        <Header user={user}/>
        <div className="container">
            <div className="main">
                <div className="main__status">
                    <button onClick={() => showAuth("registration")}>Registration</button>
                    <button onClick={() => showAuth("login")}>Login</button>
                </div>
                <button className="main__orders" onClick={() => checkUser()}>Orders</button>
            </div>
        </div>
        <Auth auto={auto} menu={menu} setAuto={setAuto} setMenu={setMenu} setUser={setUser}/>
        <div></div>
    </div>
  )
}

export default Main