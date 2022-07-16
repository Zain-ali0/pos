import React from 'react';
import "./Cart.scss";
import { useStateContext } from '../../context/StateContext';

const Cart = () => {
  const { cartItems, TotalPrice, onAdd, onDecrease, DeleteProduct, clearCart } = useStateContext();


  return (

    <div className="Cart-box">
      <div className="option">
        <button onClick={() => clearCart()}>الغاء القائمة</button>
        <select name=''>
          <optgroup>
            <option>زبون نقدي</option>
            <option>زينالعابدين-المدير</option>
            <option>حسابات متنوعة</option>
            <option>راس المال المدفوع</option>
            <option>ودائع وقتية</option>
          </optgroup>
        </select>
      </div>
      <div className='order'>
        {cartItems.map((item) => (
          <div className='row' key={item?._id} >
            <div className='item'   >
              <p>{item?.item}</p>
              <p>{item?.price} د.ع</p>
            </div>
            <div className='calc'>
              <div>
                <p className='plus' onClick={() => onAdd(item)}>+</p>
                <p className='num'>{item.quantity}</p>
                <p className='minus' onClick={() => onDecrease(item)}>-</p>
              </div>
              <div className='del' onClick={() => DeleteProduct(item)}><ion-icon name="trash-outline"></ion-icon></div>
            </div>
          </div>
        ))}
      </div>
      <div className='calculations'>
        <p className='note'  >ملاحظة +</p>
        <div className='sum'>
          <p > المجموع: {TotalPrice} د.ع     </p>
        </div>
        <div className='buttons'>
          <p className='save'>طباعةو حفظ</p>
          <p className='dis'>اضافة الخصم</p>
          <p className='back' onClick={() => clearCart()} >ارجاع</p>
        </div>
      </div>
    </div>

  )
}

export default Cart;