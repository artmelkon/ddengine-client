import React from 'react'
import { FaFolder, FaFolderOpen, FaFileImage } from "react-icons/fa"; // for icons visit https://react-icons.github.io/react-icons

const DirectoryList = (props) => {
  // console.log('dir props ', props)

  return (
    <li>
      <FaFolder /> Close FaFolder
      <FaFolderOpen /> Open Folder
      <FaFileImage /> Image
    </li>
  );
}

export default DirectoryList
