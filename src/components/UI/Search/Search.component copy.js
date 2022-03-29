import React from "react";
import { ApolloConsumer } from "@apollo/client";

import { SEARCH_PRODUCTS } from "../../../queries";

import Card from '../Card/Card.component';
import FormInput from "../FormInput/FormInput.component";
import SearchItem from "./SearchItem.component";
import classes from '../../Auth/Signin.module.scss';

class Search extends React.Component {
  state = {
    searchResult: [],
  };

  /*======================
        NodeJS content search needs to be implemented
      =============================================


      const fs = require("fs");
      const path = require('path');

      const FIND_CONTENT = [
        "/Users/Zurg/WebDev/digitaldecor_engine/client/src/components/Product/ProductItem.component.js",
        "/Users/Zurg/WebDev/digitaldecor_engine/client/src/index.js",
        "/Users/Zurg/WebDev/digitaldecor_engine/client/src/queries/index.js",
      ];

      for (file of FIND_CONTENT)
      {   
        fs.readFile( file, (err, data) => {
            if (err) throw err;
          if (data.includes("title"))
          {
              console.log(data.toString());
            }
          }
        );
      }
    }
    */

  handleChange = ({ searchProducts }) => {
    this.setState({ searchResult: searchProducts });
  };

  render() {
    const { searchResult } = this.state;
    return (
      <ApolloConsumer>
        {(client) => (
          <Card className={classes.input}>
            <FormInput
              type="search"
              placeholder="Search for product"
              onChange={async (event) => {
                event.persist();
                const { data } = await client.query({
                  query: SEARCH_PRODUCTS,
                  variables: { searchTerm: event.target.value },
                });
                this.handleChange(data);
              }}
            />
            <ul>
              {searchResult.map((product) => (
                <SearchItem key={product._id} {...product} />
              ))}
            </ul>
          </Card>
        )}
      </ApolloConsumer>
    );
  }
}
export default Search;
