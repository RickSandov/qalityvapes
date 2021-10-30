
import Image from 'next/image';

export default function Hero({ src, alt, title, text }) {
    return (
        <div className="hero">
            <Image alt={alt} src={src} layout='fill' objectFit className='img' priority ></Image>
        </div>
    )
}
