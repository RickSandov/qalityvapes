import { useRouter } from 'next/router';
import Product from '../../../components/products/Product';
import Head from 'next/head';
import BigNewsletter from '../../../components/newsletter/BigNewsletter';
import DisplayProduct from '../../../components/products/DisplayProduct';

export async function getStaticPaths() {

    // Get products
    const res = await fetch(`https://qalityvape.com/api/public/products`); // obtener productos por categoría
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
    const res = await fetch(`https://qalityvape.com/api/public/products?ids=${id}`); // obtener 
    const data = await res.json();

    const { products } = data;

    const res1 = await fetch(`https://qalityvape.com/api/public/products`); // obtener productos por categoría
    const data1 = await res1.json();

    const tempProducts = data1.products.filter(({ _id }) => _id !== id);

    return {
        props: {
            product: products[0],
            products: tempProducts
        }
    }
}

export default function ProductPage({ product, products }) {

    const diplayProducts = products.filter((p, index) => index <= 6);

    return (

        <>
            <Head>
                <title>{product.name} || QalityVapes</title>
                <meta name="description" content={` ${product.description}`} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Product product={product} />
            <div className="container">

                <h3>
                    Explora más productos
                </h3>

                {
                    diplayProducts.length > 0 &&
                    (
                        <div className="products-list">
                            {
                                diplayProducts.map((product) => (
                                    <DisplayProduct key={product._id} product={product} />
                                ))
                            }
                        </div>
                    )

                }



            </div>
        </>
    )

};
