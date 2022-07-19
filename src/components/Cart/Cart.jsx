import React, { useRef } from 'react';
import "./Cart.scss";
import { useStateContext } from '../../context/StateContext';
import PrintCart from "../PrintCart/PrintCart";
import ReactToPrint from 'react-to-print';

const Cart = () => {
  const { cartItems, TotalPrice, onAdd, onDecrease, DeleteProduct, clearCart, custmer,
    note, setNote, showButtonNote, setShowButtonNote, setSlectValue, setNoteVlaue } = useStateContext();

  const componentRef = useRef();
  return (

    <div className="Cart-box">
      <div className="option">
        <button onClick={() => clearCart()}>الغاء القائمة</button>
        <select name='' onChange={(e) => setSlectValue(e.target.value)}>
          <optgroup>
            {custmer.map((name) => (
              <option>{name.name}</option>
            ))}
          </optgroup>
        </select>
      </div>
      <div className='order'>
        {cartItems.map((item) => (
          <div className='row' key={item?._id} >
            <div className='item'   >
              <p >{item?.item}</p>
              <p >{item?.price} د.ع</p>
            </div>

            <div className='calc'>
              <div>
                <p className='plus' onClick={() => onAdd(item)}>+</p>
                <p className='num' >{item.quantity}</p>
                <p className='minus' onClick={() => onDecrease(item)}>-</p>
              </div>
              <div className='del' onClick={() => DeleteProduct(item)}><ion-icon name="trash-outline"></ion-icon></div>
            </div>
          </div>
        ))}
      </div>
      <div className='calculations'>
        <>
          {!showButtonNote && (
            <p className='note' onClick={function () { setNote(true); setShowButtonNote(true) }}> + ملاحضة</p>
          )}
          {note && (
            <div className='add-note'>
              <input onChange={(e) => setNoteVlaue(e.target.value)} type='text' />
              <button onClick={function (e) { setNote(false); setShowButtonNote(false) }} >الغاء الملاحضة</button>
            </div>
          )}
        </>
        <div className='sum'>
          <p > المجموع: {TotalPrice} د.ع     </p>
        </div>
        <div className='buttons'>
          <div>
            <ReactToPrint
              trigger={() => <button className='save'>حفظ وطباعة</button>}
              content={() => componentRef.current}
            />
            <PrintCart ref={componentRef} />
          </div>
          <button className='dis'>اضافة الخصم</button>
          <button className='back' onClick={() => clearCart()} >ارجاع</button>
        </div>
      </div>
    </div>

  )
}

export default Cart;