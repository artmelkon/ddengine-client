import React, { useReducer } from "react";

const initialDirState = {
  toBeDeleted: false,
  toBeMoved: false,
  selectedItem: {
    selected: false,
    selectedId:null
  },
};

const directoryReducer = (state, action) => {
  switch (action.type) {
    case "SET_TO_BE_MOVED":
      return {
        ...state,
        currentFolder: action.payload.currentFolder,
      };
    case "SET_ITEM_CHECKED":
      return {
        ...state,
        selectedItem: {
          selected: action.payload.selected,
          selectedId: action.payload.selectedId,
        },
      };

    default:
      return initialDirState;
  }
};

export const ExplorerContext = React.createContext();

export const ExplorerProvider = ({ children }) => {
  const [directoryState, dispatchDirectory] = useReducer(
    directoryReducer,
    initialDirState
  );

  return (
    <ExplorerContext.Provider value={{ directoryState, dispatchDirectory }}>
      {children}
    </ExplorerContext.Provider>
  );
};
