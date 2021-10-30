import Link from 'next/link';
import { useDispatch } from 'react-redux'
import { uiTempToast } from '../actions/ui';

export default function Refunds() {

    const dispatch = useDispatch();

    const copyText = (e) => {
        e.stopPropagation();

        navigator.clipboard.writeText('contacto@prettyprieto.com');

        dispatch(uiTempToast('Correo electrónico copiado al portapapeles'));
    }

    return (
        <div className="generic-container">

            <h1 className="title">
                Devoluciones o cambios
            </h1>

            <p className="paraph">
                En <strong>Pretty Prieto</strong> trabajamos para ofrecerte el mejor servicio y calidad, es por eso que TODAS NUESTRAS VENTAS SON FINALES sin excepción, para poder así grantizar que nuestros productos sean nuevos y nunca usados por alguien más.
            </p>

            <p className="paraph mt">
                Les recomendamos revisar y poner atención en el apartado de <Link href="/medidas"><a>Tallas y medidas</a></Link>.
                No olvides revisar la talla seleccionada antes de proceder al pago de tus prendas.
            </p>

            <p className="paraph mt">
                En caso que tu producto sufra algún percance, tenga algún daño o no sea como se especificó, podrá solicitar una devolución siguiendo las siguientes instrucciones:
            </p>

            <p className="paraph">
                Favor de enviar un correo electrónico a <u id='email' onClick={copyText}> contacto@prettyprieto.com</u> con tu número de orden, fecha de compra, descripción del problema y fotos del producto. Nuestro equipo de soporte abrirá un caso y se pondrá en contacto con usted con el resultado de la disputa.
                En caso de no contar con sucifiente evidencia o existan sospechas de manipulación o intento de fraude, <i>Pretty Prieto</i> podrá dar el caso como terminado.
            </p>

            <p className="paraph mt">
                <i>
                    Pretty Prieto se reserva el derecho de cambiar estos términos y condiciones en cualquier momento y sin previo aviso
                </i>
            </p>

        </div>
    )
}
