import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { cartCreate } from '../../actions/cart';
import { uiActiveModal, uiTempToast } from '../../actions/ui';
import { PayPalButton } from "react-paypal-button-v2";

export default function Paypal({ formValues, shipment, setLoading }) {
    const { cart } = useSelector(state => state);

    const dispatch = useDispatch();

    const [amount, setAmount] = useState(0);
    const [order, setOrder] = useState('');

    useEffect(() => {
        let tempAmount = 0;

        cart.forEach(({ qty, price }) => {
            tempAmount += (+qty) * (+price)
        })

        tempAmount += shipment ? 0 : 120;
        setAmount(tempAmount)

    }, [cart, setAmount, shipment])


    return (
        <form className='checkout'>
            <h3>Pago</h3>

            {
                window.paypal && (
                    <PayPalButton
                        currency={'MXN'}
                        amount={amount}
                        createOrder={(data, actions) => {
                            const { name, phone, street, col, zip, extNumber, intNumber, mail } = formValues;

                            return fetch('https://qalityvape.com/api/public/paypal/order', {
                                method: 'post',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                    customer: {
                                        name,
                                        phone,
                                        email: mail
                                    },
                                    address: {
                                        street,
                                        col,
                                        zip,
                                        extNumber,
                                        intNumber
                                    },
                                    items: cart.map(({ product, qty }) => ({
                                        product,
                                        qty
                                    })),
                                    payment: {
                                        shipment: 0
                                    }
                                })
                            }).then(res => {
                                console.log(res);
                                return res.json();
                            }).then((data) => {
                                console.log(data)
                                setOrder(data.sale?._id);

                                return data.order.id;
                            }).catch(err => {
                                dispatch(uiTempToast('Ocurri?? un error con tu pago', true))
                                console.log(err);
                            })
                        }}


                        onSuccess={async (details, data) => {
                            dispatch(uiTempToast('Pago realizado con ??xito'));
                            dispatch(cartCreate());
                            order && dispatch(uiActiveModal(order));

                        }}
                        catchError={(err) => {
                            console.log(err);
                            dispatch(uiTempToast('Ocurri?? un error con tu m??todo de pago', true))
                        }}
                    />
                )
            }

        </form>
    );
}
