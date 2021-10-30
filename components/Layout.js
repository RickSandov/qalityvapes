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
                <title>Pretty Prieto</title>
                <meta name="description" content="Pretty Prieto tienda de ropa en línea" />
                <link rel="icon" href="/favicon.ico" />
                {/* eslint-disable-next-line @next/next/no-sync-scripts */}
                {/* <script src="https://www.paypal.com/sdk/js?client-id=test"></script> */}
            </Head>
            <Script
                src="https://www.paypal.com/sdk/js?client-id=AaLHeBWsQYKa3NylyCSLBNpv7hZKrkn0-nqISJSKaIQc3y4ZJCmhz1E_Jn3vcIJtgev3WA3Dg6TIkTfF&currency=MXN"
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
