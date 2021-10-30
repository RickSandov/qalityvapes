import Link from 'next/link'

export default function NotFound(params) {

    return (
        <div className="not-found">
            <h1>Ooooops...</h1>
            <h2>La página que buscas no está disponible</h2>
            <p>Vuelve al <Link href="/"><a>inicio</a></Link></p>
        </div>
    )

};
