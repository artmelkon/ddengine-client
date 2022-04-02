import React, { useState } from "react";
// import { useQuery } from '@apollo/client';

// import { GEt_FM_DIRECTORIES } from "../queries";

export const ExplorerContext = React.createContext({
  // explorerData: [],
  folderPath: ["whte"],
  isDirOpen: false,
  open: (arg,dirOpen) => {},
});

export const ExplorerProvider = (props) => {
  const [isOpened, setIsOpened] = useState(true);
  // const { data } = useQuery(GEt_FM_DIRECTORIES);
  // const directoryArr = data.getFMDirectories.map(dir => dir);

  // console.log("directoryArr", directoryArr);
  let isDirOpen;
  let folderPath = "World";
  const open = (arg, dirOpen) => {
    console.log("argument ", arg);
    console.log("dir open ", dirOpen);
    isDirOpen = dirOpen
  };

  return (
    <ExplorerContext.Provider value={{ folderPath, isDirOpen, open }}>
      {props.children}
    </ExplorerContext.Provider>
  );
};
