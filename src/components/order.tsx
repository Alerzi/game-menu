import React from 'react'
import {orderProps} from "../utils/types.ts"

const Order = ({item, index, showItem}: orderProps) => {
  return (
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

export default Order