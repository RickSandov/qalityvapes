import Head from 'next/head'

export default function Privacidad() {
    return (
        <div className="generic-container">

            <Head>
                <title>Pretty Prieto || Politica de privacidad</title>
                <meta name="description" content="Política de privacidad de Pretty Prieto" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1 className="title">
                Política de privacidad
            </h1>

            <p className="paraph">
                Cuando visitas el Sitio, recopilamos automáticamente cierta información sobre tu dispositivo, incluida información sobre tu navegador web, dirección IP, zona horaria y algunas de las cookies que están instaladas en tu dispositivo.
            </p>

            <p className="paraph mt">
                Además, a medida que navegas por el Sitio, recopilamos información sobre las páginas web individuales o los productos que ves, qué sitios web o términos de búsqueda te remiten al Sitio, e información sobre cómo interactúas con el Sitio. Nos referimos a esta información recopilada automáticamente como Información del Dispositivo (device information).
            </p>

            <p className="paraph mt">
                Además, cuando efectúas una compra o intentas realizar una compra a través del Sitio, recopilamos cierta información tuya, como tu nombre, dirección de facturación, dirección de envío, información de pago, incluidos números de tarjetas de crédito (menciona todos los tipos de pagos aceptados), dirección de email y el número de teléfono. Esto se denomina Información del Pedido.

                Asegúrate de mencionar toda otra información que recopiles.

                Al referirnos a Información Personal en esta Política de Privacidad, estamos hablando tanto de la Información del Dispositivo como de la Información del Pedido.
            </p>

            <h2 className="subtitle">
                Cómo usamos tu información personal
            </h2>

            <p className="paraph">
                Utilizamos la Información de Pedido que recopilamos por lo general para cumplir con los pedidos realizados a través del Sitio (incluido el procesamiento de tu información de pago, la organización del envío y el envío de facturas y/o confirmaciones de pedidos).
            </p>

            <p className="paraph mt">
                Además, usamos esta Información del Pedido para: comunicarnos contigo, examinar nuestros pedidos para detectar posibles riesgos o fraudes, para (en línea con las preferencias que has compartido con nosotros) ofrecerte información o publicidad relacionada con nuestros productos o servicios.
            </p>

            <p className="paraph mt">
                Utilizamos la Información del Dispositivo que recopilamos para ayudarnos a detectar posibles riesgos y fraudes (en particular, tu dirección IP) y, en general, para mejorar y optimizar nuestro sitio.
            </p>

            <h2 className="subtitle">
                Tus derechos
            </h2>

            <p className="paraph">
                Si eres un residente europeo, tienes derecho a acceder a la información personal que tenemos sobre ti y a solicitar que tu información personal se corrija, actualice o elimine. Si deseas ejercer este derecho, por favor contáctanos.
            </p>

            <p className="paraph mt">
                Además, si eres un residente europeo, notamos que estamos procesando tu información para cumplir con los contratos que podríamos tener contigo (por ejemplo, si realizas un pedido a través del Sitio), o de otra manera para perseguir nuestros intereses comerciales legítimos mencionados anteriormente.
            </p>

            <h2 className="subtitle">
                Retención de datos
            </h2>

            <p className="paraph">
                Cuando realices un pedido a través del Sitio, mantendremos tu Información de Pedido para nuestros registros a menos que y hasta que nos solicites eliminar esta información.
            </p>

            <h2 className="subtitle">
                Menores
            </h2>

            <p className="paraph">
                El Sitio no está destinado a personas menores de edad (EDAD CLARAMENTE MENCIONADA).
            </p>

        </div>
    )
}
