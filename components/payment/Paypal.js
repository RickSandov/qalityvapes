import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { cartCreate } from '../../actions/cart';
import { uiActiveModal, uiTempToast } from '../../actions/ui';
import { PayPalButton } from "react-paypal-button-v2";
import { useRef } from 'react';

// const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });

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

                            return fetch('https://prettyprieto.com/api/public/paypal/order', {
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
                                return res.json();
                            }).then(({ order, sale }) => {
                                setOrder(sale?._id);

                                return order.id;
                            }).catch(err => {
                                dispatch(uiTempToast('Ocurrió un error con tu pago', true))
                            })
                        }}


                        onSuccess={async (details, data) => {
                            dispatch(uiTempToast('Pago realizado con éxito'));
                            dispatch(cartCreate());
                            order && dispatch(uiActiveModal(order));

                        }}


                        // onSuccess={async (details, data) => {

                        // console.log(details, data);
                        // dispatch(uiTempToast('Pago realizado con éxito'));
                        // dispatch(cartCreate());
                        // data?.orderID && dispatch(uiActiveModal(data?.orderID));
                        // let orderID;

                        // try {

                        //     const res = await fetch(`https://prettyprieto.com/api/public/paypal/order/${data.orderID}/capture`, {
                        //         method: 'post',
                        //         headers: {
                        //             'Content-Type': 'application/json',
                        //         }
                        //     })
                        //     const order = await res.json();
                        //     orderID = order?.id;
                        //     console.log(orderID, order, res);

                        // } catch (err) {

                        //     console.log(err);
                        //     dispatch(uiTempToast('Ocurrió un error con tu pago', true))

                        // }

                        //     return orderID
                        // }}
                        catchError={(err) => {
                            console.log(err);
                            dispatch(uiTempToast('Ocurrió un error con tu método de pago', true))
                        }}
                    />
                )
            }

        </form>
    );
}
