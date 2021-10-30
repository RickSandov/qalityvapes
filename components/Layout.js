import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";
import Script from 'next/script';
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { cartCreate, updateCart } from "../actions/cart";
import Toast from "./ui/Toast";
import OrderModal from "./orders/OrderModal";

export default function Layout({ children }) {

    const { ui } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {

        const storedCart = localStorage.getItem('cart');

        if (!storedCart) {
            dispatch(cartCreate());
        } else {
            dispatch(updateCart(JSON.parse(storedCart)));
        }

    }, [dispatch])

    return (
        <>
            <Head>
                <title>Qality Vapes</title>
                <meta name="description" content="Qality Vapes tienda de vapeadores en México" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Script
                src="https://www.paypal.com/sdk/js?client-id=ARh3QDdZsOflsDitb7v9rBAP6u3ffwSS4VU5sP0hH96gkmvwsjF5M5nNz1Au58eFrAnnBV4wteqf7f3X&currency=MXN"
                strategy="beforeInteractive"
            />

            <Navbar />
            {children}
            <Footer />
            {
                ui.toastActive && (
                    <Toast />
                )
            }
            {
                ui.modalActive && (
                    <OrderModal orderId={ui.orderId} />
                )
            }
        </>
    )
};
