import Head from "next/head";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { Store } from "../utils/Store";
import styles from "../styles/cart_layout.module.css";
import { BsMinecartLoaded } from "react-icons/bs";

export default function Layout({ title, children }) {
  const { state, dispatch } = useContext(Store);

  const { cart } = state;

  const [cartItemsCount, setcartItemsCount] = useState(0);

  useEffect(() => {
    setcartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  return (
    <>
      <Head>
        <title>{title ? title + " - shopping" : "shopping"}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.cart_layout_cont}>
        <Link href="/cart" className={styles.cart_icon}>
          {/* <a className="nav-link active" aria-current="page" href="#">
            Cart{" "}
            
          </a> */}
          <BsMinecartLoaded className={styles.cart_icon}/>
            
          
          
        </Link>
        <span className="text-white bg-danger rounded p-1">
            {cartItemsCount}
          </span>
      </section>

      {/* <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <div className="container_nav">
            <Link href="/">
              <a className="navbar-brand">Navbar</a>
            </Link> 

            <button 
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">

              <ul className="navbar-nav ms-auto">

                <li className="nav-item">
                  <Link href="/cart">
                    <a className="nav-link active" aria-current="page" href="#">
                      Cart <span className='text-white bg-danger rounded p-1'>{cartItemsCount}</span>
                    </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/cart">
                    <a className="nav-link active" aria-current="page" href="#">
                      Sing-in
                    </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/cart">
                    <a className="nav-link active" aria-current="page" href="#">
                      Favorites
                    </a>
                  </Link>
                </li>

              </ul>

            </div>
          </div>
        </nav> */}

      <main>{children}</main>
    </>
  );
}