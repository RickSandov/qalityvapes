
import { useRouter } from 'next/router';
import DisplayProduct from '../../components/products/DisplayProduct';
import Head from 'next/head';

export async function getStaticPaths() {

    const res = await fetch('https://prettyprieto.com/api/public/categories')
    const data = await res.json()

    const paths = data.categories.map(({ name }) => ({
        params: { categoria: name }
    }))

    return {
        paths,
        fallback: false
    }

}

export async function getStaticProps({ params: { categoria } }) {


    const res = await fetch(`https://prettyprieto.com/api/public/products?ctgs=${categoria}`); // obtener productos por categoría
    const data = await res.json();

    const tempProducts = data.products.filter(({ category }) => category === categoria)

    return {
        props: {
            products: tempProducts
        }
    }
}

export default function CategoryPage({ products }) {

    const router = useRouter();
    const { categoria } = router.query;

    return (

        <div className="container">
            <Head>
                <title>{categoria}</title>
                <meta name="description" content={`Categoría de ropa: ${categoria}`} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* <SubcategoriesMenu category={categoria} subcategories={catSubctg} /> */}

            {
                products.length > 0 ?
                    (
                        <div className="products-list">
                            {
                                products.map((product) => (
                                    <DisplayProduct key={product._id} product={product} />
                                ))
                            }
                        </div>
                    )
                    :
                    (
                        <div className="container-empty">
                            <p>
                                Por el momento no hay productos de esta categoría
                            </p>
                        </div>
                    )
            }



        </div>
    )
};
