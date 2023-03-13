

import Layout from '../components/Layout'
import ProductItem from '../components/ProductItem'
import Header from '../components/header_profile';
// import styles from '../styles/Home.module.css'
import styles from '../styles/filter.module.css'
import data from '../utils/data'
import Link from 'next/link'
import { useState } from 'react';

export default function Home() {

  const {products} = data; 
  console.log(products)

  const categories = ['Shirts', 'Pants']; 

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilterChange = (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory); 
    if (selectedCategory === 'all') {  
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((data) => data.category === selectedCategory)); 
    } 
    
  }; 

  

  return (
    <main className="main">
      <Layout title={"Home"}>
        <div>
          <Header/>
        </div>
        
        <div className="filer_product">
          {/* <h1 className="title_product">Productos</h1> */}
          
          
        </div>

        <div className={styles.filter_beats}>
            <select 
              value={selectedCategory}  
              onChange={handleFilterChange}  
              className={styles.filter_tittle}
            >

              <option value="all">All</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category} 
                </option> 
              ))} 
            </select> 

          </div>

        <div className="container_card"> 
          <div className="grid_cards">
            {filteredProducts.map((product) => (
              <ProductItem key={product.slug} product={product} />
            ))}
          </div> 
        </div> 
        
      </Layout>
    </main>
  );
}


