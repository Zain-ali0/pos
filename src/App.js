import React from 'react';
import "./App.scss";
import { Products, Cart, Sidebar, Login } from './components';
import { StateContext } from "./context/stateContext";

const App = () => {
    const getuser = localStorage.getItem('User');
    const getPassword = localStorage.getItem('password');

    return (

        <>
            {getuser&&getPassword ?
                <StateContext>
                    <div className='container '>
                        <Sidebar />
                        <Products />
                        <Cart />
                    </div>
                </StateContext>
                : <Login/>
            }
        </>

    )
}

export default App;
