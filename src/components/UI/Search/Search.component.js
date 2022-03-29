import React, {useState} from "react";
import { ApolloConsumer } from "@apollo/client";

import { SEARCH_FILES } from "../../../queries";

import Card from '../Card/Card.component';
import FormInput from "../FormInput/FormInput.component";
import SearchItem from "./SearchItem.component";
import classes from '../../Auth/Signin.module.scss';

const Search = (props) => {
  const [searchState, setSearchState] = useState({
    searchResult: []
  })

  const handleChange = ({ searchFiles }) => {
    setSearchState({ searchResult: searchFiles });
  };

    const { searchResult } = searchState;
    console.log('search result ', searchResult)
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
                  query: SEARCH_FILES,
                  variables: { searchTerm: event.target.value },
                });
                handleChange(data);
              }}
            />
            <ul>
              {searchResult.map((file) => {
                return <SearchItem key={file._id} {...file} />;
              })}
            </ul>
          </Card>
        )}
      </ApolloConsumer>
    );
}
export default Search;
