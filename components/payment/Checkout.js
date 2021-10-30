import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { cartCreate } from '../../actions/cart';
import { uiActiveModal, uiTempToast } from '../../actions/ui';

export default function Checkout({ formValues, shipment, setLoading }) {
  const { cart } = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
    const key = 'key_Y4fSx3ztSKgiQFVCDWB2hdg'; // producción
    // const key = 'key_Aryho89vKyrSk7vzhCi9qxg'; // desarrollo
    ConektaCheckoutComponents.iFrame({
      publicKey: key,
      options: {
        hidePayButton: true,
      },
      styles: {
        color: '#FF0000',
        backgroundcolor: '#ccc',
      },
      targetIFrame: '#conektaIframeContainer',
    });
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();

    setLoading(true);

    const { name, phone, street, col, zip, extNumber, intNumber, mail } = formValues;

    if (name.lenght === 0) {
      uiTempToast('Debe ingresar un nombre', true);
      setLoading(true);
      return;
    }

    if (phone.lenght === 0) {
      uiTempToast('Debe ingresar un número de contácto', true);
      setLoading(true);
      return;
    }

    if (mail.lenght === 0) {
      uiTempToast('Debe ingresar un correo electrónico', true);
      setLoading(true);
      return;
    }

    let tokenPromise;

    try {

      tokenPromise = await window.ConektaCheckoutComponents.createToken();

    } catch (err) {
      dispatch(uiTempToast(err.message_to_purchaser, true));
    }

    setLoading(false);

    if (tokenPromise) {

      const { id } = tokenPromise;

      const data = {
        customer: {
          name,
          phone,
          email: mail
        },
        address: {
          street,
          col,
          zip,
          extNumber
        },
        items: cart.map(({ product, qty }) => ({
          product,
          qty
        })),
        payment: {
          method: 'tarjeta',
          shipment: shipment || 120,
          // shipment: true,
          token: id // aquí va el token
        }
      }

      // console.log(data);

      const response = await fetch('https://prettyprieto.com/api/private/sales/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const res = await response.json();



      if (res.status === 'OK') {
        setLoading(false);
        dispatch(uiTempToast('Pago realizado con éxito'));
        dispatch(cartCreate());
        res.sale?._id && dispatch(uiActiveModal(res.sale?._id));
      } else {
        // dispatch(uiTempToast('Revisa los datos ingresados', true));
        res?.error?.details[0]?.message ? dispatch(uiTempToast(res?.error?.details[0]?.message, true)) : dispatch(uiTempToast('Revisa los datos ingresados', true));
        console.log(res?.error);
      }

    }

  };

  return (
    <form className='checkout' onSubmit={handleSubmit}>
      <h3>Información de pago</h3>

      <div
        className='alert alert-success fade alert-token'
        id='alertToken'
        role='alert'></div>
      <div className='conekta-iframe-container'>
        <div id='conektaIframeContainer'></div>
      </div>

      <div className='btn'>
        <button>pagar</button>
      </div>
    </form>
  );
}
