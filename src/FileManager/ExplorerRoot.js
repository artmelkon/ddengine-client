import { useState, useContext, useEffect } from "react";
import {
  Container,
  Button,
  ButtonGroup,
  Dropdown,
  ToggleButton,
} from "react-bootstrap";
import {
  FaCloudUploadAlt,
  FaCloudDownloadAlt,
  FaCog,
  FaBars,
  FaEllipsisH,
  FaLevelUpAlt,
} from "react-icons/fa"; // for icons visit https://react-icons.github.io/react-icons
import {Link} from 'react-router-dom'
import { useQuery } from "@apollo/client";

// import DirectoryBrowser from "./DirBrowser";
import { GET_ITEMS } from "../queries";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import Folder from "./Folder";
import Error from "../components/Error/Error.component";
// import { ExplorerContext } from "../context/explorer-context";

const ExplorerRoot = (props) => {
  const [errors, setErrors] = useState([]);
  const { loading, error, data } = useQuery(GET_ITEMS, {
    variables: { isFileManager: true },
  });

  const [radioValue, setRadioValue] = useState("1");


  const radios = [
    {
      icon: <FaEllipsisH color="" />,
      name: "file-manager-view",
      value: "file-manager-col-view",
    },
    {
      icon: <FaBars />,
      name: "file-manager-view",
      value: "file-manager-row-view",
    },
  ];

  if (loading) return <LoadingSpinner />;
  if (error) return setErrors(error);
  const { getItems } = data;
  console.log(getItems)

  return (
    <Container className="flex-grow-1 light-style container-p-y">
      <Container className="container-m-nx container-m-ny bg-lightest mb-3">
        <ol className="breadcrumb text-big container-p-x py-3 m-0">
          <li className="breadcrumb-item">
            <Link to="#">home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="#">projects</Link>
          </li>
          <li className="breadcrumb-item active">site</li>
        </ol>

        <hr className="m-0" />
        <Container className="file-manager-actions container-p-x py-2">
          <div>
            <Button className="file-manager__btn">
              <FaCloudUploadAlt size={12} />
              &nbsp; Upload
            </Button>
            <Button
              className="file-manager__btn"
              variant="secondary"
              disabled=""
            >
              <FaCloudDownloadAlt size={12} />
            </Button>
            <Dropdown className="file-manager__btn py-2">
              <Dropdown.Toggle className="px-2" variant="default">
                <FaCog />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="javascript:void(0)">Move</Dropdown.Item>
                <Dropdown.Item href="javascript:void(0)">Copy</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item
                  href="javascript:void(0)"
                  style={{ color: "red" }}
                >
                  Remove
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <ButtonGroup>
              {radios.map((radio, idx) => (
                <label className="btn">
                  <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    name="file-manager-view"
                    value={radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                    checked=""
                    variant="outline-transparent"
                  >
                    {radio.icon}
                  </ToggleButton>
                </label>
              ))}
            </ButtonGroup>
          </div>
        </Container>

        <hr className="m-0" />

        <Container className="file-manager-container file-manager-col-view">
          <div className="file-manager-row-header">
            <div className="file-item-name pb-2">Filename</div>
            <div className="file-item-changed pb-2">Changed</div>
          </div>
          <div key={`levelup`} className="file-item">
            <FaLevelUpAlt className="file-item-icon file-item-level-up text-secondary" />

            <Link to="#" className="file-item__name">
              ..
            </Link>
          </div>
          <div className="file-manager-row-header">
            <div className="file-item-name pb-2">Filename</div>
            <div className="file-item-changed pb-2">Changed</div>
          </div>
          {getItems.map((item) => {
            console.log(item._id.toString())
            return <Folder key={item._id} {...item} />;
          })}
        </Container>
        {errors.forEach((err) => (
          <Error key={err} error={err} />
        ))}
      </Container>
    </Container>
  );
};

export default ExplorerRoot;
