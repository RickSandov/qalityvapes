import Image from 'next/image'

export default function Measures() {
    return (
        <div className="generic-container">

            <h1 className="title">
                Guía de Medidas y tallas
            </h1>

            <h3 className="subtitle">
                Todas nuestras prendas son UNISEX
            </h3>

            <div className="images">
                <div className="image">
                    <Image alt={'medidas'} src='/img/tshirt.jpg' layout='fill' className='img' priority ></Image>
                </div>
                <div className="image">
                    <Image alt={'medidas'} src='/img/tshirt-measures.jpg' layout='fill' className='img' priority ></Image>
                </div>
                <div className="image">
                    <Image alt={'medidas'} src='/img/sudadera.jpg' layout='fill' className='img' priority ></Image>
                </div>
                <div className="image">
                    <Image alt={'medidas'} src='/img/sudadera-m.jpg' layout='fill' className='img' priority ></Image>
                </div>
            </div>



        </div>
    )
}
