import React from "react";
import moment from "moment";
import "./PrintOrder.scss";
import { useStateContext } from "../../context/stateContext";

const PrintOrder = React.forwardRef((props, ref) => {
    const { cartItems, TotalPrice, noteValue, SubTotal, discValue, selectValue } = useStateContext();
    return (
        <div ref={ref} className='print-container'>
            <div className="logo">
                <h1>POINT OF SALE</h1>
            </div>
            <div className="details">
                <h3>الموظف : زين</h3>
                <h3>الوقت : {moment().format('LTS')} </h3>
            </div>
            <div className="details">
                <h3>الزبون : {selectValue}</h3>
                <h3>التاريخ: {moment().format('LL')} </h3>
            </div>
            <table className="order">
                <thead>
                    <tr>
                        <td>اسم المنتج</td>
                        <td>العدد</td>
                        <td>السعر</td>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="sub">
                <p>المجموع : {TotalPrice} د.ع</p>
                <p>قيمة الخصم : {discValue} %</p>
                <p>المجموع بعد الخصم : {SubTotal} د.ع</p>
                <p>الملاحضات : {noteValue}</p>
            </div>

            
        </div>
    );
});

export default PrintOrder;

