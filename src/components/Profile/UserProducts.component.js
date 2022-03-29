import {useContext, useState} from "react";
import { Link } from 'react-router-dom';
import { useQuery } from "@apollo/client";

import { GET_USER_FILES } from "../../queries";
import { AuthContext } from "../../context/auth-context";
import LoadingSpinner from "../UI/LoadingSpinner";

import classes from '../../App.module.scss';

const UserProducts = ({ creator }) => {
  const [errors, setErrors] = useState([])
  const authCtx = useContext(AuthContext)
  const {loading, error, data} = useQuery(GET_USER_FILES)

  console.log(authCtx)

  if(loading) return <p>Loading...</p>;
  if(error)
  return (
    <div className={classes.app}>
      <h2>User Products</h2>
      {/* <Query query={GET_USER_PRODUCTS} variables={{ creator }}>
        {({ loading, error, data }) => {
          if (loading) return <LoadingSpinner />;
          if (error) return <p>Error</p>;

          return (
            <ul>
              {data.getUserProducts.map((product) => (
                <li key={product._id}>
                  <Link to={`/product/${product._id}`}>
                    <h4>Title: {product.title}</h4>
                  </Link>
                  <p>
                    <a
                      href={`http://localhost:4040/images/${product.imageUrl}/${product.fileName}`}
                    >
                      <img
                        src={`http://localhost:4040/images/${product.imageUrl}/${product.fileName}`}
                        className="thmb-img"
                      />
                    </a>
                  </p>
                  <p>Message: {product.message}</p>
                </li>
              ))}
            </ul>
          );
        }}
      </Query> */}
    </div>
  )
};

export default UserProducts;
