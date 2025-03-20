import React from 'react'
import { img3, img1, img2 } from "../pictures.ts"
import "../css/header.css"
import { useClickOutside } from '../utils/useClickOutside.ts'
import Cookie from "json-cookie"

const Header = ({user}: { user?: string }) => {
    const [cur, setCur] = React.useState<boolean>(false); // меню валюты
    const [lang, setLang] = React.useState<boolean>(false); // меню языка
    const [status, setStatus] = React.useState<string>(user || ''); // статус логина пользователя
    const curRef = React.useRef(null); // для закрытия меню по клику в не его пределов
    const langRef = React.useRef(null); // для закрытия меню по клику в не его пределов
    useClickOutside(curRef, langRef, () => {
        setCur(false);
        setLang(false);
    })
    const toggleCur = () => {
        setCur(!cur);
    }
    const toggleLang = () => {
        setLang(!lang);
    }
    React.useEffect(() => {
        if(Cookie.get("userId")) {
            setStatus(Cookie.get("userId"));
        }
    });
  return (
    <div className="header">
        <div className="container">
            <div className="header__inner">
                <div className="header__status">{status}</div>
                <div className="header__items">
                    <div className="header__cur" onClick={() => toggleCur()} ref={curRef}>
                        <div className="header__cur-img">
                            <img src={img3} alt="img" />
                        </div>
                        <div className="header__cur-text">USD</div>
                        <div className={`header__cur-select ${cur ? '' : 'display'}`}>
                            <button><img src={img3} alt="img" /> <span>USD</span></button>
                            <button><img src={img3} alt="img" /> <span>UAH</span></button>
                            <button><img src={img3} alt="img" /> <span>EUR</span></button>
                        </div>
                    </div>
                    <div className="header__lang" onClick={() => toggleLang()} ref={langRef}>
                        <div className="header__lang-img">
                            <img src={img1} alt="img" />
                        </div>
                        <div className="header__lang-text">EN</div>
                        <div className={`header__lang-select ${lang ? '' : 'display'}`}>
                            <button><img src={img1} alt="img" /> <span>EN</span></button>
                            <button><img src={img2} alt="img" /> <span>UA</span></button>
                            <button><img src={img2} alt="img" /> <span>UA</span></button>
                        </div>
                    </div>
                    <div className="header__flag"><img src={img1}  alt="img" /></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header