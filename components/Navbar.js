
import Link from 'next/link';
import Image from 'next/image';
import DisplayCart from './cart/DisplayCart';
import ActiveLink from './ActiveLink';

export default function Navbar({ categories = ['Playeras', 'Sudaderas', 'Originales'] }) {

    return (
        <nav className='navbar' >
            <div className="ad">
                <p>Envío gratis en pedidos superiores a MXN$1,000.00</p>
            </div>
            <div className="navbar__top">
                <div className="logo-box">

                    <Link href={'/'} >
                        <a className='logo' >
                            <Image src="/img/logotry1.png" alt="Vercel Logo" width={200} height={180} priority />
                            {/* <h1>Pretty Prieto MX</h1> */}
                        </a>
                    </Link>

                </div>


                <DisplayCart />


            </div>
            <div className="navbar__bottom">
                <div className="navbar__links">
                    {
                        categories.map(categorie => (

                            <ActiveLink key={categorie} activeClassName='link active' href={`/${categorie}`} >
                                <a className="link"  > {categorie} </a>
                            </ActiveLink>

                        ))
                    }
                </div>
            </div>
        </nav>
    )
};

