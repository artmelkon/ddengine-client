import React, { useState } from "react";
import { useQuery } from '@apollo/client';

import { GET_FOLDER } from "../queries";

export const ExplorerContext = React.createContext({
  root: [],
  getDirPath: (dirPath) => {},
  isOpen: false,
  open: (arg) => {},
});

export const ExplorerProvider = (props) => {
  const [root, setRoot] = useState(null);
  const [isOpen, setIsOpen] = useState(new Map());
  // const {data} = useQuery(GEt_FM_DIRECTORIES);

  const getChildren = (children) => {
    console.log(children);
  };

  const open = (dirOpen) => {
    // setIsOpen(dirOpen)
  };

  return (
    <ExplorerContext.Provider value={{ root, getChildren, open }}>
      {props.children}
    </ExplorerContext.Provider>
  );
};
