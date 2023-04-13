

import { collection, query, where, documentId, getDocs, writeBatch, addDoc
} from "firebase/firestore";
import { useCart } from "../../context/CartContext";
import { db } from "../../services/firebase/firebaseConfig";
import { useState } from "react";
import { useNotification } from "../../notification/NotificationService";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const [orderId, setOrderId] = useState("");
    const [loading, setLoading] = useState(false);
    const { cart, totalPrice, clearCart } = useCart();
    const [buyer, setBuyer] = useState({});
    const { setNotification } = useNotification();

    const navigate = useNavigate();

    const dataBuyer = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value,
        });
    };
    const createOrder = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const objOrder = {
                buyer,
                items: cart,
                total: totalPrice(),
            };

            const ids = cart.map((prod) => prod.id);

            const productsRef = query(
                collection(db, "products"),
                where(documentId(), "in", ids)
            );

            const { docs } = await getDocs(productsRef);

            const batch = writeBatch(db);
            const outOfStock = [];

            docs.forEach((doc) => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;

                const productAddedToCart = cart.find(
                    (prod) => prod.id === doc.id
                );
                const prodQuantity = productAddedToCart?.quantity;

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }
            });

            if (outOfStock.length === 0) {
                batch.commit();

                const ordersRef = collection(db, "orders");
                const orderAdded = await addDoc(ordersRef, objOrder);

                clearCart();
                setOrderId(orderAdded.id);

                setTimeout(() => {
                    navigate("/");
                }, 7000);
            } else {
                setNotification("error", "Hay productos sin stock", 7);
            }
        } catch (error) {
            setNotification("error", "Hubo un error generando la orden", 7);
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className='flex justify-center items-center mt-8'>
                <button
                    type='button'
                    className='bg-primary text-white py-2 px-4 rounded-md'
                    disabled>
                    <div
                        className=' inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-white border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
                        role='status'>
                        <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
                            Cargando...
                        </span>
                    </div>
                </button>
            </div>
        );
    }

    if (orderId) {
        // hacer que se envie por email
        return (
            <div className="flex justify-center items-center mt-5 text-3xl">
                <h1>El id de su compra es: {orderId}</h1> 
            </div>
        );
    }

    return (
        <div className='flex flex-col justify-between gap-5 mt-10 items-center bg-white rounded-lg shadow-xl p-6 w-[400px] mx-auto'>
            <h2 className='text-3xl'>Ingrese sus datos</h2>

            <form onSubmit={createOrder}>
                <div >

                    <input className='border-gray-300 border focus:outline-none  focus:ring-primary focus:ring-1 rounded-md p-2 mb-4 w-full'
                        type='text'
                        placeholder='Su nombre completo'
                        name='name'
                        onChange={dataBuyer}
                    />
                </div>
                <div>

                    <input  className='border-gray-300 border focus:outline-none  focus:ring-primary focus:ring-1 rounded-md p-2 mb-4 w-full'
                        type='text'
                        placeholder='Teléfono'
                        name='phone'
                        onChange={dataBuyer}
                    />
                </div>
                <div >
                    <input className='border-gray-300 border focus:outline-none  focus:ring-primary focus:ring-1 rounded-md p-2 mb-4 w-full'
                        type='email'
                        placeholder='Email@gmail.com'
                        name='email'
                        onChange={dataBuyer}
                    />
                </div>
                <div className='flex justify-center items-center mt-2'>
                    <button className='bg-primary px-3 py-2 rounded-xl text-white hover:bg-secondary shadow-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' type='submit'>
                        Finalizar compra
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Checkout;