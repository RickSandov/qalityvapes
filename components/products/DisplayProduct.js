import Image from 'next/image'
import Link from 'next/link'

export default function DisplayProduct({ product }) {

    const { imgs, name, price, category, _id } = product;

    return (
        <Link href={`/${category}/product/${_id}`} >
            <a className="display-product animate__fadeInDown">
                <div className="display-product__image">
                    <Image alt={name} src={`https://prettyprieto.com${imgs[0]}`} layout='fill' objectFit className='img' ></Image>
                </div>
                <div className="display-product__info">
                    <h2 className="product-name">
                        {name}
                    </h2>
                    <span className="price">
                        MXN${price.toLocaleString()}
                    </span>
                </div>
            </a>
        </Link>
    )
}
