import { useState, useContext, useCallback } from "react";
import {
  Button,
  ButtonGroup,
  SplitButton,
  Dropdown,
  DropdownButton,
  InputGroup,
} from "react-bootstrap";
import { FaFolder, FaFolderOpen, FaEllipsisH, FaImage } from "react-icons/fa"; // for icons visit https://react-icons.github.io/react-icons
import { Link } from "react-router-dom";

const Folder = ({...item}) => {
  console.log('props ', item)

  const [isOpen, setIsOpen] = useState(false);
  const folderOpenHandler = useCallback(
    (isOpen) => {
      setIsOpen((c) => !c);
    },
    [isOpen]
  );

  console.log("is open? ", isOpen);

  return (
    <div  className="file-item">
      <div className="file-item-select-bg" variant="primary" />
      <label className="file-item-checkbox custom-control custom-checkbox">
        <InputGroup.Checkbox className="custom-control-input" />
        <span className="custom-control-label"></span>
      </label>
      <Link to="#" onClick={folderOpenHandler} className="file-item__link">
        <div className="file-item__icon">
          {item.isFile ? <FaImage color="grey" size={34} /> : !isOpen ? <FaFolder size={34} /> : <FaFolderOpen size={34} />}
        </div>
        <div className="file-item__title">{item.itemname}</div>
      </Link>
      <div className="file-item-changed">02/13/2018</div>
      <Dropdown className="file-item-actions">
        <Dropdown.Toggle
          variant="default"
          size="sm"
          id="dropdown-basic"
        >
          <FaEllipsisH />
        </Dropdown.Toggle>
        <Dropdown.Menu align="end" style={{overflow: "hidden"}}>
          <Dropdown.Item href="javascript:void(0)">Rename</Dropdown.Item>
          <Dropdown.Item href="javascript:void(0)">Move</Dropdown.Item>
          <Dropdown.Item href="javascript:void(0)">Copy</Dropdown.Item>
          <Dropdown.Item href="javascript:void(0)"> Remove</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Folder;
