import { useContext } from "react";
import React, { useRouter } from "next/router";
import data from "../../utils/data";
import Layout from "../../components/Layout";
import { Store } from "../../utils/Store";
import Link from "next/link";
import "../../styles/slug.module.css";
import styles from "../../styles/slug_product.module.css";
import { IoChevronBackOutline } from "react-icons/io5";

export default function ProductScreen() {
  //in icializar el estado
  const { state, dispatch } = useContext(Store);

  const router = useRouter();

  const { query } = useRouter();
  const { slug } = query;

  // para buscar en nuestra api local
  const product = data.products.find((i) => i.slug === slug);

  if (!product) {
    return <div>producto no encontrado</div>;
  }

  //funcion para gregar al carrito (sirve para capturar la informacion {item} que vamos a enviar a nuestro estado global)
  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);

    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (product.countInStock < quantity) {
      alert("lo siento no tenemos mas productos de este tipo");
      return;
    }

    dispatch({ type: "CARD_ADD_ITEM", payload: { ...product, quantity } });
    // router.push('/cart')
  };

  return (
    <div className={styles.main_product}>
      <Layout title={product.slug} />

      <div className={styles.slug_complete}>
        
        <div className={styles.grid_slug}>
          <div className={styles.img_slug}>
            <img
              src={product.image}
              alt=""
              className={styles.img}
              // className="img-fluid"
            />
            <div className={styles.back_slug}>
          <div className={styles.back_cont}>
            <Link href="/">
              <IoChevronBackOutline className={styles.back_button} />
            </Link>
          </div>

          {/* <button
              className="btn btn-primary mt-4"
              
            >
              Back to shopping
            </button> */}

          {/* <Link href="/">Go shopping</Link> */}
        </div>
          </div> 

          <div className={styles.content_slug}>
            <div className={styles.text_slug}>
              <h1 className="card-title">{product.name}</h1>
              <h5 className="card-title">${product.price}</h5>
              <p className="card-title">{product.description} </p>
              <p>{product.countInStock > 0 ? "In Stock" : "No hay"}</p>
            </div>
            <div className={styles.buttoms_slug_0}>
              <button className="btn btn-primary" onClick={addToCartHandler}>
                Add to Cart
              </button> 

              <div className={styles.whats_app_0}>
                <a
                  className="link-wa"
                  href={`https://wa.me/3015593281?text= Hola, me interesa este producto:%0A${product.name}%0A${product.price} %0A\n ${product.description}`}
                  isExternal
                  target="_blank"
                  rel="noreferrer"
                >
                  Contactar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttoms_slug}>
        <button className={styles.cart_button} onClick={addToCartHandler}>
          Add to Cart
        </button>

        
          <a
            className="link-wa"
            href={`https://wa.me/3015593281?text= Hola, me interesa este producto:%0A${product.name}%0A${product.price} %0A\n ${product.description}`}
            isExternal
            target="_blank"
            rel="noreferrer"
          >
            <button className={styles.whats_app}> Contactar</button>
           
          </a>
        
      </div>
    </div>
  );
}
