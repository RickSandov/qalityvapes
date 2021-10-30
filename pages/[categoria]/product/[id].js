import { useRouter } from 'next/router';
import Product from '../../../components/products/Product';
import Head from 'next/head';

export async function getStaticPaths() {

    // Get products
    const res = await fetch(`https://prettyprieto.com/api/public/products`); // obtener productos por categoría
    const data = await res.json();

    const { products } = data;


    const paths = products.map(product => ({
        params: { categoria: product.category, id: product._id }
    }))

    return {
        paths,
        fallback: false
    }

}

export async function getStaticProps({ params: { id } }) {

    // Get Product
    const res = await fetch(`https://prettyprieto.com/api/public/products?ids=${id}`); // obtener 
    const data = await res.json();

    const { products } = data;

    return {
        props: {
            product: products[0]
        }
    }
}

export default function ProductPage({ product }) {

    return (

        <>
            <Head>
                <title>{product.name} || Pretty Prieto</title>
                <meta name="description" content={` ${product.description}`} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Product product={product} />
        </>
    )

};
