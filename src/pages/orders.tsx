import React from 'react'
import {Header, Order, OrderInfo} from "../components/index.ts"
import {img11} from "../pictures.ts"
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
                       <Order item={item} index={index} showItem={showItem} />
                    )
                }
                <OrderInfo showInfo={showInfo} info={info} closeInfo={closeInfo}/>
            </div>
        </div>
    </div>
  )
}

export default Orders