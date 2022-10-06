import React, { useRef } from 'react';
import "./cart.scss";
import { AiOutlineDelete } from "react-icons/ai";
import { HiOutlineReceiptTax } from "react-icons/hi";
import { useStateContext } from '../../context/stateContext';
import PrintOrder from '../PrintOrder/PrintOrder';
import ReactToPrint from 'react-to-print';

const Cart = () => {

  const { custmers, cartItems, onAdd, onDecrease, DeleteProduct,
    clearCart, TotalPrice, setNoteValue, setDiscVlaue, SubTotal, discValue, setSelectValue } = useStateContext();

  const componentRef = useRef();

  return (
    <div className='cart'>
      <div className='option'>
        <select onChange={(e) => setSelectValue(e.target.value)}>
          <optgroup>
            {custmers?.map(custmer => (
              <option key={custmer.id}>{custmer.name}</option>
            ))}
          </optgroup>
        </select>
      </div>

      <div className='cart-order'>
        <div className='order'>
          {cartItems.map((item) => (
            <div className='inner-order'>
              <div className='details'>
                <p className='name'>{item.name}</p>
                <p className='price'>{item.price} د.ع</p>
              </div>
              <div className='qty'>
                <div className='oper'>
                  <p className='inc' onClick={() => onAdd(item)}>+</p>
                  <p className='num'>{item.quantity}</p>
                  <p className='dec' onClick={() => onDecrease(item)}>-</p>
                </div>
                <AiOutlineDelete onClick={() => DeleteProduct(item)} />
              </div>
            </div>
          ))}
        </div>
        <div className='cart-opertion'>
          <div className='tool'>
            <div>
              <input type='tetx' placeholder='قيمة الخصم %' onChange={(e) => setDiscVlaue(e.target.value)} />
              <button className='tax' > الخصم</button>
            </div>
            <div>
              <input type='tetx' placeholder='الملاحضة' onChange={(e) => setNoteValue(e.target.value)} />
              <button className='note' >الملاحضات</button>
            </div>
          </div>
          <div className='tools'>
            <button className='cancel' onClick={() => clearCart()}>الغاء القائمة</button>
            <>
              <ReactToPrint
                trigger={() => <button className='print' >طباعة وحفظ</button>}
                content={() => componentRef.current}
              />
              <PrintOrder ref={componentRef} />
            </>
          </div>
          <h1 className='total'> {discValue === '' ? TotalPrice : <><HiOutlineReceiptTax />{SubTotal} </>} د.ع</h1>
        </div>
      </div>
    </div>
  )
}

export default Cart;