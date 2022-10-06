import React, { createContext, useContext, useState, useEffect } from 'react';
import SanityClient from "../client";

const Context = createContext();

export const StateContext = ({ children }) => {

    const category = ['الكل', 'المفضلة', 'خضار وفواكه', 'ماء', 'قرطاسية', 'عطور','منظفات','كوزماتك','ايس كريم'];



    const [custmers, setCustmers] = useState([]);
    const [products, setProducts] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);
    const [showCategory, setShowCategory] = useState(false);
    const [showCalc, setShowCalc] = useState(false);
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilter, setActiveFilter] = useState('الكل');
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
    const [cartItems, setCartItems] = useState([]);
    const [showUs , setShowUs] = useState(false);
    const [noteValue , setNoteValue] = useState('');
    const [discValue , setDiscVlaue] = useState('');
    const [selectValue , setSelectValue] = useState();

    




    //calucter
    const ops = ['/', '*', '-', '+', '.'];
    const updateCalc = value => {
        if (
            ops.includes(value) && calc === '' || ops.includes(value) && ops.includes(calc.slice(-1))
        ) {
            return;
        }

        setCalc(calc + value)

        if (!ops.includes(value)) {
            setResult(eval(calc + value).toString())
        }
    };

    const craeteDigits = () => {
        const digits = [];

        for (let i = 1; i < 10; i++) {
            digits.push(
                <button onClick={() => updateCalc(i.toString())} key={i}>{i}</button>
            )
        }
        return digits;
    };

    const calculate = () => {
        setCalc(eval(calc).toString())
    }

    const deletList = () => {
        if (calc === '') {
            return;
        }

        const value = calc.slice(0, -1,);

        setCalc(value)
        setResult(value)
    }


    
    //fetch products
    useEffect(() => {
        const query = '*[_type == "Products"]';

        SanityClient.fetch(query).then((data) => {
            setProducts(data);
            setFilterProducts(data);
        });
    }, []);

    //fetch custmer
    useEffect(() => {
        const query = '*[_type == "Custmer"]';

        SanityClient.fetch(query).then((data) => {
            setCustmers(data);
        });
    }, []);


    //filter products
    const FilterProducts = (item) => {
        setActiveFilter(item);
        setAnimateCard([{ y: 100, opacity: 0 }]);

        setTimeout(() => {
            setAnimateCard([{ y: 0, opacity: 1 }]);

            if (item === 'الكل') {
                setFilterProducts(products);
            } else {
                setFilterProducts(products.filter((product) => product.tags.includes(item)));
            }
        }, 500);
    };

    //add cart

    const onAdd = (product) => {
        const ProductExite = cartItems.find((item) => item?._id === product?._id);

        if (ProductExite) {
            setCartItems(cartItems.map((item) => item?._id === product?._id ? { ...ProductExite, quantity: ProductExite.quantity + 1 } : item))
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }])
        }
    }

    const onDecrease = (product) => {
        const ProductExite = cartItems.find((item) => item?._id === product?._id);
        if (ProductExite.quantity > 1) {
            setCartItems(cartItems.map((item) => item?._id === product?._id ? { ...ProductExite, quantity: ProductExite.quantity - 1 } : item))
        }
    }

    const DeleteProduct = (product) => {
        const ProductExite = cartItems.find((item) => item?._id === product?._id);
        if (ProductExite.quantity >= 1) {
            setCartItems(cartItems.filter((item) => item?._id !== product?._id))
        }
    }

    const clearCart = () => {
        setCartItems([]);
    }

    const TotalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);

    //discount
    const discount = discValue / 100;
    const SubTotal = TotalPrice - (TotalPrice * discount)

    //logout
    
    const logout = () => {
        localStorage.clear();
        window.location.reload()

    }



    return (
        <Context.Provider
            value={{
                category,
                showCategory,
                setShowCategory,
                craeteDigits,
                updateCalc,
                calc,
                result,
                calculate,
                deletList,
                showCalc,
                setShowCalc,
                setSearchTerm,
                searchTerm,
                animateCard,
                filterProducts,
                activeFilter,
                FilterProducts,
                custmers,
                cartItems,
                onAdd,
                onDecrease,
                DeleteProduct,
                clearCart,
                TotalPrice,
                showUs,
                setShowUs,
                noteValue,
                setNoteValue,
                discValue,
                setDiscVlaue,
                SubTotal,
                selectValue,
                setSelectValue,
                logout,
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);

