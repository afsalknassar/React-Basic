import Header from "../components/header"
import Footer from "../components/footer"
import Product from "../components/product"
import Table from "../components/table"
import Page from "../components/page"
import Bootsrapp from "../components/bootsrapp"

import { useState, useEffect, createContext } from "react"


export const CartContext = createContext({
    products: [],
    cart: [],
    AddToCart: () => { },
});
export default function Home() {

   
    const [ProductsToShow,setProductsToShow]= useState([]);
    const [products] = useState([
        {
            id: 1,
            title: "Puma Shirts",
            price: 100.78,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
            id: 2,
            title: "Addidas Shirts",
            price: 123.5,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
            id: 3,
            title: "Nike Shirts",
            price: 150.4,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
            id: 4,
            title: "Netplay Shirts",
            price: 70.45,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
            id: 5,
            title: "Puma Shoes",
            price: 89.99,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
            id: 6,
            title: "Addidas Shoes",
            price: 110.0,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
            id: 7,
            title: "Nike Shoes",
            price: 140.75,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
            id: 8,
            title: "Netplay Shoes",
            price: 65.0,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
            id: 9,
            title: "Puma Jackets",
            price: 200.5,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
            id: 10,
            title: "Addidas Jackets",
            price: 250.0,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
            id: 11,
            title: "Nike Jackets",
            price: 300.0,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
            id: 12,
            title: "Netplay Jackets",
            price: 180.75,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
            id: 13,
            title: "Puma Caps",
            price: 20.0,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
            id: 14,
            title: "Addidas Caps",
            price: 22.5,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
            id: 15,
            title: "Nike Caps",
            price: 25.0,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
            id: 16,
            title: "Netplay Caps",
            price: 18.5,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
            id: 17,
            title: "Puma Socks",
            price: 10.0,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
            id: 18,
            title: "Addidas Socks",
            price: 12.0,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
            id: 19,
            title: "Nike Socks",
            price: 15.0,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
            id: 20,
            title: "Netplay Socks",
            price: 8.0,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        }
    ]);

    const columns = [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Name' },
        { key: 'email', label: 'Email' },
        { key: 'role', label: 'Role' }
    ];

    const data = [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
        // Add more data as needed
    ];

    const itemsPerPage = 4
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(products.length / itemsPerPage);

   
    const handlePageChange = (page) => {

        if(page > totalPages) return;

        setCurrentPage(page);
    };

    useEffect(() => {

       const startIndex = (currentPage - 1) * itemsPerPage;
       const endIndex = startIndex + itemsPerPage;

       setProductsToShow(products.slice(startIndex, endIndex));


    }, [currentPage]);




    const [cart, setcart] = useState([]);
    const [Wishlist, setWishlist] = useState([]);


    const AddToCart = (id) => {

        setcart(prevCart => {

            const isItemInCart = prevCart.includes(id);

            if (isItemInCart) {
                localStorage.setItem('cart', JSON.stringify(prevCart.filter((item) => item !== id)));
                return prevCart.filter((item) => item !== id);

            } else {

                localStorage.setItem('cart', JSON.stringify([...prevCart, id]));
                return [...prevCart, id];
            }
        });
    };


    const AddToWishlist = (id) => {

        setWishlist((prevCart) => {

            const isItemInWishlist = prevCart.includes(id);

            if (isItemInWishlist) {

                localStorage.setItem('Wishlist', JSON.stringify(prevCart.filter((item) => item !== id)));
                return prevCart.filter((item) => item !== id);

            } else {

                localStorage.setItem('Wishlist', JSON.stringify([...prevCart, id]));
                return [...prevCart, id];
            }
        });
    };

    useEffect(() => {
        const cart = localStorage.getItem('cart');
        const Wishlist = localStorage.getItem('Wishlist');

        if (cart) {
            setcart(JSON.parse(cart));
        }

        if (Wishlist) {
            setWishlist(JSON.parse(Wishlist));
        }

    }, []);


    return (
        <div>

            <CartContext.Provider value={{ products, cart, AddToCart }}>
                <Header cart={cart} wishlist={Wishlist} />
            </CartContext.Provider>


            <div className="container my-5">
                <div className="row">
                    {ProductsToShow.map((product, index) => (

                        <div className="col-12 col-md-6 col-lg-3 mb-4" key={index}>
                            <Product product={product} onAddToCart={AddToCart} cart={cart} onAddToWishlist={AddToWishlist} wishlist={Wishlist} />
                        </div>
                    ))}
                </div>
            </div>

           <Page currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />

            {/* <Table 
            columns={columns} 
            data={data} 
            itemsPerPage={5} 
          /> */}

          {/* <Bootsrapp /> */}




            <Footer />


        </div>
    )

}

