import React from 'react'
import Link from 'next/link';

export default function OrderForm({ orderId, setOrderId }) {
    return (
        <div className="order__form">
            <label htmlFor="order-id">Código de pedido:</label>
            <input
                id="order-id"
                onChange={(e) => setOrderId(e.target.value)}
                value={orderId}
                type="text" />
            <Link
                href={`/ver-pedido/${orderId}`} >
                <a className="order__button">
                    Buscar
                </a>
            </Link>
        </div>
    )
}
