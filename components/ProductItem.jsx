import Link from "next/link";
import { useState } from "react";

export default function ProductItem({ product }) {
  return (
    <div>
      <div className="col">
        <Link href={`/product/${product.slug}`}>
          <div className="card">
            <img src={product.image} className="img_card" />
            <div className="card_body">
              <h4>{product.name}</h4>
              <p>{product.price}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
