import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { uiTempToast } from '../../actions/ui';

export default function BigNewsletter() {

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(uiTempToast('¡Gracias por susbribirte!'));
        setEmail('');

    }

    return (
        <div className="container-newsletter">
            <div className="content">
                <h3 className="container-newsletter__title">
                    Únete al club!
                </h3>
                <p className="container-newsletter__text">
                    Obtén acceso exclusivo a descuentos, promociones, lanzamientos exclusivos y más!
                </p>
                <form onSubmit={handleSubmit}>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder='Correo electrónico'
                        type="email"
                        required='required'
                    // onInvalid={(e) => dispatch(uiTempToast('Ingrese un correo válido', true))}
                    />
                    <button>
                        Suscribirse
                    </button>
                </form>
            </div>
        </div>
    )
}
