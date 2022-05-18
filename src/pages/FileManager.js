import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ExplorerRoot from "../components/FileManager/ExplorerRoot";
import { ExplorerProvider } from "../store/explorer-context";
import "./FileManager.scss";

const FileManager = () => {
  let { id } = useParams();

  return (
    <ExplorerProvider>
      <ExplorerRoot currentFolder={id} />
    </ExplorerProvider>
  );
};

export default FileManager;
