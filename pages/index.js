
import DisplayProduct from '../components/products/DisplayProduct';
import Hero from '../components/ui/Hero';
import Link from 'next/link';
import { useEffect } from 'react';
import BigNewsletter from '../components/newsletter/BigNewsletter';

export async function getStaticProps() {
  const res = await fetch('https://qalityvape.com/api/public/products'); // obtener productos por categoría
  const data = await res.json();

  return {
    props: {
      products: data.products,
      test: data.products.filter(({ category }) => category === 'test'),
    },
  };
}

export default function Home({ products }) {

  const dispProducts = products.filter((p, index) => index <= 6);

  // useEffect(() => {

  //   const getInfo = async () => {

  //     const res = await fetch(`https://qalityvape.com/api/private/sales`);
  //     const data = await res.json()

  //     let total = 0;

  //     data.sales.forEach(({ payment }) => {
  //       total += payment.total;
  //     })

  //     console.log(`Ingreso total: $${total.toLocaleString()}`);
  //     console.log(data.sales);

  //   }

  //   getInfo()

  // }, [])

  return (
    <>
      <div className='container'>
        <Hero
          title='Los mejores vapes en México'
          src='/img/vapes.jpg'
          alt={'Identidad de marca'} />
        <h3>
          Productos más populares
        </h3>
        <div className='products-list'>
          {dispProducts.map(product => (
            <DisplayProduct key={product._id} product={product} />
          ))}
        </div>

        <Link href='/vapos'>
          <a className='btn'>Ver más</a>
        </Link>

        <BigNewsletter />

      </div>
    </>
  );
}
