
import { useDispatch } from 'react-redux'
import { uiTempToast } from '../actions/ui';

export default function FAQ() {

    const dispatch = useDispatch();

    const copyText = (e) => {
        e.stopPropagation();

        navigator.clipboard.writeText('contacto@prettyprieto.com');

        dispatch(uiTempToast('Correo electrónico copiado al portapapeles'));
    }

    return (
        <div className="generic-container">

            <h1 className="title">
                Preguntas frecuentes
            </h1>

            <p className="paraph">
                Todos nuestro productos son unisex.
            </p>

            <h2 className="subtitle">
                Envíos
            </h2>

            <h3 className="question">
                ¿Cuál es el precio del envío?
            </h3>
            <p className="paraph" >
                El costo de envío es de MXN$120.00 a cualquier estado de la república Mexicana
            </p>

            <h3 className="question">
                ¿Tienen envíos gratis?
            </h3>
            <p className="paraph">
                Si! Contamos con envío gratis en pedidos mayores a MXN$1,000.00 el descuento se aplica automáticamente
            </p>

            <h3 className="question">
                ¿Cuánto tiempo tardará en llegar mi pedido?
            </h3>
            <p className="paraph">
                Los pedidos tienen un tiempo de llegada de 10 días hábiles por temporada alta
            </p>
            <p className="paraph">
                En caso de no recibir tu pedido después del tiempo establecido, envíanos un correo a <u onClick={copyText} >
                    contacto@prettyprieto.com
                </u>
            </p>

            <h3 className="question">
                ¿Cómo puedo rastrear mi pedido?
            </h3>
            <p className="paraph">
                Después de realizar tu pago, te llegará un correo electrónico dentro de los siguientes 7 días con la información de pedido, número de rastreo e información de la empresa de envíos.
            </p>

            <h2 className="subtitle">
                Pagos
            </h2>

            <h3 className="question">
                ¿Qué métodos de pago manejan?
            </h3>
            <p className="paraph">
                Aceptamos tarjetas de débito y crédito.
            </p>

            <h3 className="question">
                ¿Tienen cambios y devoluciones?
            </h3>
            <p className="paraph">
                Para garantizar la calidad en todos nuestro productos, NO CONTAMOS CON CAMBIOS NI DEVOLUCIONES. De esta manera te aseguramos que tu producto nunca ha sido usado ni tocado por nadie más.
            </p>

            <h2 className="subtitle">
                Contacto
            </h2>

            <h3 className="question">
                ¿Qué puedo hacer si proporcioné mal mi información de envío?
            </h3>
            <p className="paraph">
                Deberás envíar inmediatamente un correo electrónico a <u onClick={copyText} >contacto@prettyprieto.com</u> con el número de pedido y con tu información de envío o contacto actualizada.
            </p>

            <h3 className="question">
                ¿Puedo cambiar la talla de mi producto?
            </h3>
            <p className="paraph">
                Podrás solicitar un cambio de talla siempre y cuando tu pedido no haya sido enviado. Deberás enviar una solicitud de cambio de talla a <u onClick={copyText} >contacto@prettyprieto.com</u> nosotros nos pondremos en contacto contigo lo más pronto posible.
            </p>



        </div>
    )
}
