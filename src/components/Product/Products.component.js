import React from 'react';
import { Query } from '@apollo/client/react/components';

import LoadingSpinner from "../components/UI/LoadingSpinner";
import { GET_ALL_HUBFILES } from '../../queries';

const Products = (props) =>
{
  return (
    <Query query={GET_ALL_HUBFILES}>
      {({ data, loading, error }) => {
        if (loading) return <LoadingSpinner />;
        if (error) return <p>Error!</p>;
        console.log(data);
        return (
          <ul className={props.dashClasses.products}>
            {data.getAllProducts.map((product) => (
              <li
                key={product._id}
                className={props.dashClasses.products__item}
              >
                <a id={product._id} href="#">
                  {product.imageUrl.concat("/", props.fileName)}
                </a>
              </li>
            ))}
          </ul>
        );
      }}
    </Query>
  );
};


export default Products;
