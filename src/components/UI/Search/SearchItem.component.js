import React from "react";
import { Link } from "react-router-dom";

const SearchItem = ({ _id, filename }) => (
  <li>
    <Link to={`/file/${_id}`}>
      <h4> {filename} </h4>
    </Link>
  </li>
);

export default SearchItem;
