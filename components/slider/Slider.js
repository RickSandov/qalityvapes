

import { useState } from 'react'
import { dataSlider } from './dataSlider'
import Image from 'next/image'

export default function Slider() {



    return (
        <div className="slider">
            {/* {
                dataSlider.map(({ _id, img, link }) => (
                    <div key={_id} >
                        <Image src={img} layout='fill' alt={link} />


                    </div>
                ))
            } */}
        </div>
    )
}
