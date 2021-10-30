
import DisplayProduct from '../components/products/DisplayProduct';
import Hero from '../components/ui/Hero';
import Link from 'next/link';
import { useEffect } from 'react';

export async function getStaticProps() {
  const res = await fetch('https://prettyprieto.com/api/public/products'); // obtener productos por categoría
  const data = await res.json();

  return {
    props: {
      products: data.products,
      test: data.products.filter(({ category }) => category === 'test'),
    },
  };
}

export default function Home({ products }) {

  const dispProducts = products.filter((p, index) => index < 4);

  // useEffect(() => {

  //   const getInfo = async () => {

  //     const res = await fetch(`https://prettyprieto.com/api/private/sales`);
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
        <Hero src='/img/elprieto.webp' alt={'Identidad de marca'} />
        <h2
          style={{
            marginBottom: '3rem',
            marginTop: '3rem',
            fontSize: '3rem',
            color: '#006fc3',
          }}>
          Productos Destacados
        </h2>
        <div className='products-list'>
          {dispProducts.map(product => (
            <DisplayProduct key={product._id} product={product} />
          ))}
        </div>

        <Link href='/Playeras'>
          <a className='btn'>Ver más</a>
        </Link>

        <Hero src='/img/elprieto1.webp' alt={'Ofertas pretty prieto'} />
      </div>
    </>
  );
}
