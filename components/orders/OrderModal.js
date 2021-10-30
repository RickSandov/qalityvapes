import Link from 'next/link'
import { useDispatch } from "react-redux"
import { uiCloseModal, uiTempToast } from '../../actions/ui';

export default function OrderModal({ orderId }) {

    const dispatch = useDispatch();

    const copyNumber = (e) => {
        e.stopPropagation();
        let copyText = document.querySelector("#order-id");

        navigator.clipboard.writeText(copyText.innerHTML);

        dispatch(uiTempToast('Número de orden copiado al portapapeles'));
    }

    return (
        <div className="modal-bc">
            <div className="modal">
                <span className="modal__title">
                    Compra exitosa
                </span>
                <div className="modal__info">
                    <p className="msg">
                        Nos pondremos en contacto contigo para ver los detalles del pedido. Guarda tu número de pedido para cualquier aclaración o para consultar su estado en&nbsp;
                        <Link href={`/ver-pedido/${orderId}`}>
                            <a
                                target="_blank"
                                className='order-link'
                            > Ver mi pedido
                            </a>
                        </Link>
                    </p>
                    <p
                        onClick={copyNumber}
                        id="order-id"
                        className="order-id">
                        {orderId}
                    </p>
                </div>
                <span
                    onClick={() => dispatch(uiCloseModal())}
                    className="close"> &times; </span>
            </div>
        </div>
    )
}
