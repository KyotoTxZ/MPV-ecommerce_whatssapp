import { useContext, useState, useEffect} from "react"
import Layout from "../components/Layout"
import { Store } from "../utils/Store"
import Link from 'next/link'
import styles from '../styles/cart.module.css'


export default function Cart() {

    const {state, dispatch} = useContext(Store)
    const {cart} = state 
    const {cartItems} = cart 

    console.log(cartItems);

    const price = cartItems.reduce((a, c) => a + c.quantity * c.price, 0);
    
      const text = cartItems.reduce((message, product) => message.concat(`* ${product.name} - ${product.price} - ${product.quantity}\n`), ``,).concat(`\nTotal: ${price}`)

      
 
    const removeCartHandler = (item)=> {
        dispatch({type: 'CART_REMOVE_ITEM', payload: item}) 
    } 

    const updateCartHandler = (item, qty) => {  
        const quantity = Number(qty)   
        dispatch({type: 'CARD_ADD_ITEM', payload:{...item, quantity}}) 
    } 

    const [cartItemsCount, setcartItemsCount] = useState(cartItems) 
    

    useEffect(() => {
      setcartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
    }, [cart.cartItems]);  

  return (
    <div>
      <Layout title={"Cart"}>
        <div className={styles.container}>
          {cartItems.length === 0 ? (
            <div>
              cart is empty. <Link href="/">Go shopping</Link>
            </div> 
          ) : ( 
            <div>
              <table className="table">
                <thead> 
                  <tr>
                    <th scope="col">Item</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.slug}>
                      <td>
                        <img src={item.image} alt="" width={100} height={100} />
                        &nbsp;
                        {item.name}
                      </td>

                      <td>
                        <select
                          value={item.quantity}
                          onChange={(e) =>
                            updateCartHandler(item, e.target.value)
                          }
                        >
                          {
                            //recorremos al valor countInStock como un <option> y le damos una key unica a cada una. y tambien al valor le sumamos +1 para que no empiece desde el cero //
                            [...Array(item.countInStock).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))
                          }
                        </select>
                      </td>

                      <td>{item.price}</td>

                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => removeCartHandler(item)}
                        >
                          {" "}
                          X{" "}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* calculando el precio total de los productos agregados al (cart) */}
              <div>
                <h5>
                  CANTIDAD: ({cartItems.reduce((a, c) => a + c.quantity, 0)})
                  Productos
                </h5>
                <p>
                  {" "}
                  Precio total : ${" "}
                  {price}
                </p>

                
              </div>
              
              
            </div>
          )}
          <div className={styles.pedir_wh_buttom}>
              <Link
                  href={`https://wa.me/3015593281?text= ${encodeURIComponent(text)}`}
                >
                  <button>PEDIR PEDIDO</button>
                  
                </Link>
              </div>
        </div>
      </Layout>
    </div>
  );
}
