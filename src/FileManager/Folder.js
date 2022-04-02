import {useState, useContext} from 'react'
import { FaFolder, FaFolderOpen } from "react-icons/fa"; // for icons visit https://react-icons.github.io/react-icons
import { Link } from "react-router-dom";

import { ExplorerContext } from "../context/explorer-context";

const Folder = (props) => {
  const [color, setColor] = useState('blue')
  const dirCtx = useContext(ExplorerContext);

  console.log(dirCtx);


  return (
    <li>
      <Link to="#" onClick={props.onFolderOpen}>
        <FaFolder style={{ color: "gold" }} />
        &nbsp;&nbsp;
        <span style={{ color: "initial" }}>{props.name}</span>
      </Link>
    </li>
  );
}

export default Folder;
