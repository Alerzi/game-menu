import React from 'react'
import {Header} from "../components/index.ts"
import {img11, img4} from "../pictures.ts"
import data from "../data.json"
import "./orders.css"
import {useNavigate} from "react-router-dom"

const Orders = () => {
    const [info, setInfo] = React.useState<any>(
        { TransactionID: "", Goods: { item1: "", item2: "", item3: "", item4: "", item5: "", item6: "" }, Date: "", Status: "", GameName: "", GameID: "", Amount: "" }
    );
    const [showInfo, setShowInfo] = React.useState<boolean>(false);
    const navigate = useNavigate();

    const showItem = (index: number) => {
        setInfo({...data[index]});
        setShowInfo(true);
    }
    const closeInfo = () => {
        setShowInfo(false);
    }
  return (
    <div className="body">
        <Header />
        <div className="container">
            <div className="order">
                <div className="order__top" onClick={() => { navigate("/"); }}><img src={img11} alt="img" /> Orders</div>
                {
                    data.length && data.map((item: any, index: number) => 
                        <div className="order__item" onClick={() => showItem(index)} key={item.TransactionID + index}>
                            <div className="order__item-top">
                                <div className="order__trans">
                                    <div className="order__trans-title">Transaction ID</div>
                                    <div className="order__trans-text">{item.TransactionID}</div>
                                </div>
                                <div className="order__trans">
                                    <div className="order__trans-title">Date</div>
                                    <div className="order__trans-text">{item.Date}</div>
                                </div>
                                <div className="order__trans">
                                    <div className="order__trans-title">Satus</div>
                                    <div className="order__trans-text"><div className={`${item.Status == "Success" ? 'order__success' : 'order__error'}`}></div><div>{item.Status}</div></div>
                                </div>
                            </div>
                            <hr />
                            <div className="order__item-bottom">
                                <div className="order__trans">
                                    <div className="order__trans-title">Game Name</div>
                                    <div className="order__trans-text">{item.GameName}</div>
                                </div>
                                <div className="order__trans">
                                    <div className="order__trans-title">Game ID</div>
                                    <div className="order__trans-text">{item.GameID}</div>
                                </div>
                                <div className="order__trans">
                                    <div className="order__trans-title">Amount</div>
                                    <div className="order__trans-text">{item.Amount}</div>
                                </div>
                            </div>
                        </div>
                    )
                }
                <div className={`order__info ${showInfo ? '' : 'infoDisplay'}`}>
                    <div className="order__top">
                        <button className="order__top-close" onClick={() => closeInfo()}><img src={img4} alt="img" /></button>
                        <div className="order__top-id">{info.TransactionID}</div>
                    </div>
                    <div className="order__item">
                        <div className="order__item-top">
                            <div className="order__trans">
                                <div className="order__trans-title">Transaction ID</div>
                                <div className="order__trans-text">{info.TransactionID}</div>
                            </div>
                            <div className="order__trans">
                                <div className="order__trans-title">Date</div>
                                <div className="order__trans-text">{info.Date}</div>
                            </div>
                            <div className="order__trans">
                                <div className="order__trans-title">Satus</div>
                                <div className="order__trans-text"><div className={`${info.Status == "Success" ? 'order__success' : 'order__error'}`}></div><div>{info.Status}</div></div>
                            </div>
                        </div>
                        <hr />
                        <div className="order__item-bottom">
                            <div className="order__trans">
                                <div className="order__trans-title">Game Name</div>
                                <div className="order__trans-text">{info.GameName}</div>
                            </div>
                            <div className="order__trans">
                                <div className="order__trans-title">Game ID</div>
                                <div className="order__trans-text">{info.GameID}</div>
                            </div>
                            <div className="order__trans">
                                <div className="order__trans-title">Amount</div>
                                <div className="order__trans-text">{info.Amount}</div>
                            </div>
                        </div>
                    </div>
                    <div className="order__info-goods">
                        <div className="order__info-left">Your Goods:</div>
                        <div className="order__info-right">{info.Goods.item1}-{info.Goods.item2}</div>
                    </div>
                    <div className="order__good-item">
                        <div className="order__good">
                            <div className="order__good-topLeft">{info.Goods.item3}</div>
                            <div className="order__good-topRight">{info.Goods.item4}</div>
                            <div className="order__good-bottomLeft">{info.Goods.item5}</div>
                            <div className="order__good-bottomRight">{info.Goods.item6}$</div>
                        </div>
                    </div>
                    <button className="order__good-btn">Ask ?</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Orders