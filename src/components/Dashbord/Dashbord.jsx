import React from 'react';
import "./Dashbord.scss";
import img from "../../image/img-removebg-preview.png";
import { useStateContext } from "../../context/StateContext";

const Dashbord = () => {
    const { category, filterProducts, activeFilter, Filter, onAdd, searchTerm, setSearchTerm, logout, toggle, setToggle } = useStateContext()
    return (
        <div className='dash-container'>
            <div className='search'>
                <a href="https://morabaa.com/" className='logo' ><img src={img} alt="img" /></a>
                <input type="text" placeholder='البحث عن ...' onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <div className='items'>
                <div className='slider'>
                    {category?.map((item, index) => (
                        <button
                            onClick={() => Filter(item)}
                            className={`btn   ${activeFilter === item ? 'item-active' : ''} `}
                            key={index}
                        >{item}
                        </button>
                    ))}
                </div>
                <div className='product' >

                    {filterProducts.filter((val) => {
                        if (searchTerm === '') {
                            return val;
                        } else if (val.item.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val;
                        }
                    }).map((product, index) => (
                        <div className="box" key={index} onClick={() => onAdd(product)}>
                            <h3>{product.item}</h3>
                            <p className="price">{product.price} د.ع</p>
                            <div className='placesave'>
                                <p>مخزن 1</p>
                                <ion-icon name="storefront-outline" role="img" class="md hydrated" aria-label="storefront outline"></ion-icon>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <div className='settings'>
                <div className='user' onClick={() => setToggle(true)} >
                    <p>زين</p>
                    <ion-icon name="person-outline"></ion-icon>
                    {toggle && (
                        <div className='logout'>
                            <button onClick={logout}>تسجيل خروج</button>
                            <p onClick={() => setToggle(false)}><ion-icon name="close-circle-outline"></ion-icon></p>
                        </div>
                    )}
                </div>
                <div className='sett'>
                    <p>الاعدادات</p>
                    <ion-icon name="settings-outline"></ion-icon>
                </div>
            </div>
        </div>
    )
}
export default Dashbord;