import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { uiTempToast } from '../../actions/ui';

export default function Newsletter() {

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(uiTempToast('¡Gracias por susbribirte!'));
        setEmail('');

    }

    return (
        <div className="newsletter">
            <h3 className="newsletter__title">
                Boletín
            </h3>
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
    )
}
