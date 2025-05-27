import { useMemo } from "react"

function Header({ cart, setCart }) {
    const isEmpty = useMemo(() => cart.length === 0, [cart])

    // function updateCart(item, operation) {
    //     const existItem = cart.findIndex(guitar => guitar.id === item.id);
    //     if (existItem !== -1) {
    //         const newCart = [...cart];
    //         if (operation === "+") {
    //             newCart[existItem].quantity += 1;
    //         } else if (operation === "-" && newCart[existItem].quantity > 1) {
    //             newCart[existItem].quantity -= 1;
    //         }
    //         setCart(newCart);
    //     }
    // }

    function increaseCart(id) {
        const updatedCart = cart.map((guitar) => {
            if (guitar.id === id && guitar.quantity <= 4) {
                return { ...guitar, quantity: guitar.quantity + 1 };
            } else {
                return guitar;
            }
        });
        setCart(updatedCart);
    }

    function decreaseCart(id) {
        const updatedCart = cart.map((guitar) => {
            if (guitar.id === id && guitar.quantity > 1) {
                return { ...guitar, quantity: guitar.quantity - 1 };
            } else {
                return guitar;
            }
        });
        setCart(updatedCart);
    }

    function removeFromCart(id) {
        setCart((prevCart) => prevCart.filter((guitar) => guitar.id !== id));
    }

    function clearCart() {
        setCart([]);
    }

    //const total = cart.reduce((acc, guitar) => acc + (guitar.price * guitar.quantity), 0);
    const totalMemo = useMemo(() => cart.reduce((acc, guitar) => acc + (guitar.price * guitar.quantity), 0), [cart]);

    return (
        <>
            <header className="py-5 header">
                <div className="container-xl">
                    <div className="row justify-content-center justify-content-md-between">
                        <div className="col-8 col-md-3">
                            <a href="index.html">
                                <img className="img-fluid" src="/img/logo.svg" alt="imagen logo" />
                            </a>
                        </div>
                        <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                            <div className="carrito">
                                <img className="img-fluid" src="/img/carrito.png" alt="imagen carrito" />
                                <div id="carrito" className="bg-white p-3">
                                    <div>
                                        {isEmpty ?
                                            (<p className="text-center">El carrito esta vacio</p>) :
                                            (<>
                                                <table className="w-100 table">
                                                    <thead>
                                                        <tr>
                                                            <th>Imagen</th>
                                                            <th>Nombre</th>
                                                            <th>Precio</th>
                                                            <th>Cantidad</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {cart.map(
                                                            (guitar) => (
                                                                <tr>
                                                                    <td>
                                                                        <img className="img-fluid" src={`/img/${guitar.image}.jpg`} alt="imagen guitarra" />
                                                                    </td>
                                                                    <td>{guitar.name}</td>
                                                                    <td className="fw-bold">
                                                                        ${guitar.price}
                                                                    </td>
                                                                    <td className="flex align-items-start gap-4">
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-dark"
                                                                            //onClick={() => updateCart(guitar, "-")}
                                                                            onClick={() => decreaseCart(guitar.id)}
                                                                        >
                                                                            -
                                                                        </button>
                                                                        <span>{guitar.quantity}</span>
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-dark"
                                                                            //onClick={() => updateCart(guitar, "+")}
                                                                            onClick={() => increaseCart(guitar.id)}
                                                                        >
                                                                            +
                                                                        </button>
                                                                    </td>
                                                                    <td>
                                                                        <button
                                                                            className="btn btn-danger"
                                                                            type="button"
                                                                            onClick={() => removeFromCart(guitar.id)}
                                                                        >
                                                                            X
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        )}
                                                    </tbody>
                                                </table>

                                                <p className="text-end">Total pagar: <span className="fw-bold">${totalMemo}</span></p>
                                                <button className="btn btn-dark w-100 mt-3 p-2" onClick={() => clearCart()}>Vaciar Carrito</button>
                                            </>)
                                        }
                                    </div>

                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>

    )
}

export default Header