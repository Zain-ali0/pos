import React from 'react';
import "./Sidebar.scss";
import { useStateContext } from '../../context/stateContext';
import { BiCategoryAlt } from "react-icons/bi";
import { BsFillPersonFill, BsFillCalculatorFill, BsQuestionLg } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import Calculator from '../Calculator/Calucater';
import HowUs from "../HowUs/HowUs";


const Sidebar = () => {
    const { showCalc, setShowCalc, showCategory, setShowCategory, category,
        FilterProducts, activeFilter , showUs ,setShowUs,logout } = useStateContext();
    return (
        <div className='navbar-container'>
            <div className='menu-toggle'>
                <div className='icon profile' >
                    <BsFillPersonFill />
                    <p>علي</p>
                </div>
                <div className='icon category' onClick={() => setShowCategory(!showCategory)} >
                    <BiCategoryAlt />
                    <p>الاقسام</p>
                </div>
                {showCategory &&
                    <div className='show-category'>
                        {category.map((item, index) => (
                            <p onClick={() => FilterProducts(item)} className={`${activeFilter === item ? 'item-active' : ''}`} key={index}>{item}</p>
                        ))}
                    </div>
                }
                <div className='icon claculator' onClick={() => setShowCalc(!showCalc)}>
                    <BsFillCalculatorFill />
                    <p>الحاسبة</p>
                </div>
                {showCalc &&
                    <>
                        <Calculator />
                    </>
                }
                <div className='icon claculator' onClick={() => setShowUs(!showUs)}>
                    <BsQuestionLg />
                    <p>من نحن</p>
                </div>
                { showUs &&
                    <>
                        <HowUs/>
                    </>
                }
                <div className='icon logout' onClick={logout}>
                    <FiLogOut />
                    <p>تسجيل الخروج</p>
                </div>
            </div>
            <div className='logo'><h1>POINT OF SALE</h1></div>
        </div>
    )
}

export default Sidebar;