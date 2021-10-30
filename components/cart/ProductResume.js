import { useState } from "react";
import { useDispatch } from "react-redux";
import { cartDeleteItem, setQuantity } from "../../actions/cart";
import Image from 'next/image'


export default function ProductResume({ product, seeOrder }) {

    const dispatch = useDispatch();

    const { name, product: _id, price, qty, img } = product;

    const [quantity, setquantity] = useState(qty)

    const total = (+price) * (+quantity);

    const increaseQty = () => {
        setquantity(quantity + 1);
        dispatch(setQuantity(_id, quantity + 1))
    }

    const decrease = () => {
        setquantity(quantity - 1);
        dispatch(setQuantity(_id, quantity - 1))
    }

    return (
        <div className="products__item">
            {
                !seeOrder && (
                    <>
                        <span
                            onClick={() => dispatch(cartDeleteItem(_id))}
                            className="delete"> &times;
                        </span>
                        <div className="image">
                            <Image alt={name} src={'https://prettyprieto.com' + img} layout='fill' className='img' ></Image>
                        </div></>
                )
            }

            <div className="info">

                <h3>{name}</h3>
                <p> <strong>${price.toLocaleString()}</strong>  &times; {quantity} </p>
                {
                    !seeOrder && (
                        <div className="counter">
                            <button
                                onClick={decrease}
                                disabled={quantity <= 1}
                            > - </button>
                            <span className="qty"> {quantity} </span>
                            <button
                                onClick={increaseQty}
                            > + </button>
                        </div>
                    )
                }
            </div>
            <div className="total">
                <span>Total:</span>
                <p>MXN${total.toLocaleString()}</p>
            </div>
        </div>
    )
}
