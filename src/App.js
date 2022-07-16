import React from 'react';
import "./App.scss";
import { Dashbord, Cart, Login } from './components';
import { StateContext } from "./context/StateContext";


const App = () => {

    const getuser = localStorage.getItem('User');
    const getPassword = localStorage.getItem('password');

    return (
        <>
            { getuser&&getPassword?
                <StateContext>
                    <div className='app-container'>
                        <Cart />
                        <Dashbord />
                    </div>
                </StateContext>
                : <Login/>
            }
        </>

    )
}

export default App