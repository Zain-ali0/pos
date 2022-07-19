import React from 'react';
import img from "../../image/img-removebg-preview.png";
import { useStateContext } from "../../context/StateContext";
import moment from "moment";
import "./PrintCart.scss";



const PrintCart = React.forwardRef((props, ref) => {
    const { selectVlaue, cartItems, TotalPrice, noteVlaue } = useStateContext()
    return (
        <div className='cart-container'>
            <div ref={ref} className='print'>
                <div className='img'>
                    <img src={img} alt='img' />
                </div>
                <div className='det'>
                    <h4 className='custmer'>الاسم  :{selectVlaue}  </h4>
                    <h4 className='casher' >  الكاشير : زين</h4>
                    <h4>  الوقت والتاريخ : {moment().format('MMMM Do YYYY, h:mm:ss a')} </h4>
                </div>
                <table>
                    <thead>
                        <tr>
                            <td>الاسم</td>
                            <td>العدد</td>
                            <td>السعر</td>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item) => (
                            <tr key={item?.id}>
                                <td>{item.item}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <p> المجموع: {TotalPrice} د.ع </p>
                <p> الملاحضات : {noteVlaue}</p>
                <h2>شركة المربع للحلول البرمجية</h2>
            </div>
        </div>
    )
})

export default PrintCart;
