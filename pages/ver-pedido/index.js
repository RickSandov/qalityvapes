

import { useState } from 'react';
import OrderForm from '../../components/orders/OrderForm';

export default function Order() {

    const [orderId, setOrderId] = useState('');

    return (
        <div className="container order">
            <h2 className="order__title">
                ¡Busca tu pedido!
            </h2>
            <OrderForm orderId={orderId} setOrderId={setOrderId} />

        </div>
    )
}
