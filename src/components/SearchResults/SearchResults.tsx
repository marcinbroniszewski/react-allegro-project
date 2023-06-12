import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export default function SearchResults() {
  const matchingProducts = useSelector((state: RootState) => state.search.matchingObjects);

  return (
    <div>
      {matchingProducts && matchingProducts.length > 0 ? (
        matchingProducts.map((product) => (
          <div key={product.id}>
            {product.title}
          </div>
        ))
      ) : (
        <p>Brak pasujących produktów.</p>
      )}
    </div>
  )
      }