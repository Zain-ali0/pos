import React, { createContext, useContext, useState, useEffect  } from 'react';
import SanityClient from "../client";

const Context = createContext();

export const StateContext = ({ children }) => {
    const category = [

        'الكل', 'المفضلة', 'فواكه', 'ماء', 'قرطاسية', 'خضار', 'وزن حلويات',
        'حمضيات', 'اجبان ومخللات ولحوم وفواكه', 'خضرة', 'نادرة', 'رصيد', 'مواد عامة', 'عطور ومعطرات',
        'كارتات برامج', 'معجنات الاغا', 'كرزات ', 'دنجي للادوات الاحتياطية', 'تمور', 'كوزماتك', 'دكان الطفولة', 'الحلويات والكرزات',];
    const [products, setProducts] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);
    const [activeFilter, setActiveFilter] = useState('الكل');
    const [cartItems, setCartItems] = useState([]);
    const [searchTerm , setSearchTerm] = useState('');
    const [toggle , setToggle] = useState(false);

    

    const logout = () => {
        localStorage.clear();
        window.location.reload()

    }
    useEffect(() => {
        const query = '*[_type == "Products"]';
        SanityClient.fetch(query).then((data) => {
            setFilterProducts(data);
            setProducts(data)
        });
    }, []);

    const Filter = (item) => {
        setActiveFilter(item);
        if (item === 'الكل') {
            setFilterProducts(products);
        } else {
            setFilterProducts(products.filter((product) => product?.tags?.includes(item)));
        }
    };

    const onAdd = (product) => {
        const ProductExite = cartItems.find((item) => item?._id === product?._id);

        if (ProductExite) {
            setCartItems(cartItems.map((item) => item?._id === product?._id ? { ...ProductExite, quantity: ProductExite.quantity + 1 } : item))
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }])
        }
    }

    const clearCart = () => {
        setCartItems([]);
    }

    const TotalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0)
    
    const onDecrease = (product) => {
        const ProductExite = cartItems.find((item) => item?._id === product?._id);
        if (ProductExite.quantity > 1) {
            setCartItems(cartItems.map((item) => item?._id === product?._id ? { ...ProductExite, quantity: ProductExite.quantity - 1 } : item))
        }
    }

    const DeleteProduct = (product) => {
        const ProductExite = cartItems.find((item) => item?._id === product?._id);
        if(ProductExite.quantity >= 1){
            setCartItems(cartItems.filter((item) => item?._id !== product?._id))
        }
    }





    return (
        <Context.Provider
            value={{
                category,
                filterProducts,
                activeFilter,
                Filter,
                cartItems,
                onAdd,
                TotalPrice,
                onDecrease,
                DeleteProduct,
                clearCart,
                searchTerm,
                setSearchTerm,
                logout,
                toggle,
                setToggle,

            }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);

