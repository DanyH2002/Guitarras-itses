import { useState } from 'react'

function Product({ guitar, cart, setCart }) {
    const { name, image, description, price } = guitar

    function addToCart(item) {
        const existItem = cart.findIndex(guitar => guitar.id === item.id);
        if (existItem >= 0) {
            if (cart[existItem].quantity >= 5) return;
            const updateCart = [...cart];
            updateCart[existItem].quantity+1;
            setCart(updateCart);
        } else {
            item.quantity = 1;
            setCart([...cart, item]);
        }
        
        // if (existItem === -1) {
        //     setCart([...cart, { ...item, quantity: 1 }]);
        // } else {  // existIem es 0
        //     const newCart = [...cart];
        //     newCart[existItem].quantity += 1; 
        //     console.log(newCart);
        //     setCart(newCart);
        // }
    }

    return (
        <>
            <div className="col-md-6 col-lg-4 my-4 row align-items-center">
                <div className="col-4">
                    <img className="img-fluid" src={`/img/${image}.jpg`} alt="imagen guitarra" />
                </div>
                <div className="col-8">
                    <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
                    <p>{description}</p>
                    <p className="fw-black text-primary fs-3">${price}</p>
                    <button
                        type="button"
                        className="btn btn-dark w-100"
                        onClick={() => addToCart(guitar)}
                    >Agregar al Carrito</button>
                </div>
            </div>
        </>
    )
}
export default Product
