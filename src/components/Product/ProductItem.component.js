import React from 'react';
import { Link } from 'react-router-dom';

import classes from "../../assets/scss/Product.module.scss";

const ProductItem = ({ _id, title, imageUrl, fileName, creator, className }) => (
  <li className={`${className} ${classes.product}`}>
    <Link to={`/product/${_id}`}>{imageUrl.concat('/', fileName)}</Link>
    {/* <Link to={`/product/${_id}`}>{title}</Link> */}
    Owner: {creator.name}
  </li>
);

export default ProductItem;
