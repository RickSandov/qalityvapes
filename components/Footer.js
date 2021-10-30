import Link from 'next/link'
import Newsletter from './newsletter/Newsletter';

export default function Footer(params) {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <div className='footer__row footer__row--first'>
                    <div className='footer__col'>
                        <h3 className='footer__heading'>Navegación</h3>
                        <Link href='/' >
                            <a className='footer__link' >
                                Inicio
                            </a>
                        </Link>
                        <Link href='/carrito' >
                            <a className='footer__link' >
                                Mi carrito
                            </a>
                        </Link>
                        <Link href='/ver-pedido' >
                            <a className='footer__link' >
                                Ver mi pedido
                            </a>
                        </Link>
                        <Link href='/contacto' >
                            <a className='footer__link' >
                                Contacto
                            </a>
                        </Link>
                        <Link href='/medidas' >
                            <a className='footer__link' >
                                Medidas
                            </a>
                        </Link>
                        <Link href='/devoluciones' >
                            <a className='footer__link' >
                                Devoluciones o cambios
                            </a>
                        </Link>
                        <Link href='/preguntas-frecuentes' >
                            <a className='footer__link' >
                                Preguntas frecuentes
                            </a>
                        </Link>
                        <Link href='/privacidad' >
                            <a className='footer__link' >
                                Politica de Privacidad
                            </a>
                        </Link>
                        <Link href='/terminos-y-condicines' >
                            <a className='footer__link' >
                                Terminos y Condiciones
                            </a>
                        </Link>
                        <Newsletter />
                    </div>
                    <div className='footer__col'>
                        <h3 className='footer__heading center'>¡Estamos creciendo!</h3>
                        <p className='footer__paraph'>
                            Vamos comenzando con la tienda. Puedes esperar nueva
                            funcionalidad y un catalogo más grande en el futuro.
                        </p>
                        <p className='footer__paraph'>
                            ¡Agrega nuestra página a marcadores para que puedas entrar y
                            comprar tus prendas favoritas en cualquier momento!
                        </p>
                        <h3 className='footer__heading center'>Redes sociales</h3>
                        <div className="social-media">
                            <Link href='https://www.facebook.com/P-R-E-T-T-Y-P-R-I-E-T-O-111959643521979'>
                                <a target='_blank' className="footer__icon">
                                    <svg>
                                        <use href="/icons/fb.svg#fb" ></use>
                                    </svg>
                                </a>
                            </Link>
                            <Link href='https://www.instagram.com/pretty_prxeto/'>
                                <a target='_blank' className="footer__icon">
                                    <svg>
                                        <use href="/icons/ig.svg#ig" ></use>
                                    </svg>
                                </a>
                            </Link>
                        </div>

                    </div>
                </div>
                <div className='footer__row footer__row--second'>
                    <p className='footer__sub'>© 2021 Pretty Prieto</p>

                </div>
            </div>
        </footer>
    );
}