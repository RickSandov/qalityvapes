import { useRouter } from "next/router"
import OrderForm from "../../components/orders/OrderForm";
import { useEffect, useState } from 'react';
import ProductResume from "../../components/cart/ProductResume";

export async function getServerSideProps({ params: { id } }) {

    let res, data = null;

    try {
        res = await fetch(`https://prettyprieto.com/api/private/sales/${id}`);
        // console.log(res);
        data = await res.json();
    } catch (err) {
        console.log(err);
    }

    // console.log(data)

    return {
        props: {
            order: data?.sale || data
        },
    }
}

export default function Order({ order }) {

    const router = useRouter();
    const { query } = router;
    const [orderId, setOrderId] = useState(query.id);
    const { items } = order;
    const [total, setTotal] = useState(0);

    useEffect(() => {

        if (items) {
            let tempTotal = 0;

            items.forEach(({ qty, price }) => {
                tempTotal += qty * price;
            });

            setTotal(tempTotal);
        }

    }, [items]);


    return (
        <>
            {
                items ?
                    (
                        <div className="container order">
                            <h2 className="order__title">
                                ¡Pedido encontrado!
                            </h2>

                            <div className="order__list">
                                <h3>Resumen del pedido</h3>
                                {
                                    items.map((product) => (
                                        <ProductResume key={product.product} product={product} seeOrder />
                                    ))
                                }
                                <p className='resume-total'>
                                    Total:
                                    <strong>
                                        MXN${total.toLocaleString()}
                                    </strong>
                                </p>
                                <p className="status" >Estado del pedido: <strong>en camino</strong> </p>
                            </div>

                        </div>
                    )
                    :
                    (
                        <div className="container order">
                            <h2 className="order__title err">
                                Lo sentimos, tu pedido no ha podido ser encontrado. Revisa el código de pedido
                            </h2>

                            <OrderForm orderId={orderId} setOrderId={setOrderId} />

                        </div>
                    )
            }
        </>
    )
}
