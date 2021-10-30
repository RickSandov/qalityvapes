import Link from 'next/link';
import { useSelector } from 'react-redux';
import Image from 'next/image';

export default function DisplayCart() {

    const { cart } = useSelector(state => state);

    // const [activeCart, setActiveCart] = useState(false);

    // const closeCart = () => {
    //     setActiveCart(false);
    // }

    return (
        <>
            <Link href={`/carrito`}>

                <a className="display-cart">
                    <Image src="/img/cart.png" alt="Vercel Logo" width={30} height={30} priority />
                    <p>Carrito</p>
                    <div className="display-cart__qty">
                        <span>
                            {cart.length}
                        </span>
                    </div>
                </a>

            </Link>

            {/* {
                activeCart && (
                    <div onClick={closeCart} className={`short-cart-bc ${activeCart && 'active'}`}>
                        <div className="short-cart">

                        </div>
                    </div>
                )
            } */}
        </>
    )
};
