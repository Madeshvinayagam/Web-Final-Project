import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails';

const ProductPage = () => {
  const { id } = useParams();

  return (
    <div>
     
      <main>
        <ProductDetails productId={id} />
      </main>
     
    </div>
  );
};

export default ProductPage;
