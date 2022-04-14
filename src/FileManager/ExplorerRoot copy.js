import { useState, useContext, useEffect } from "react";
import {
  Container,
  Button,
  ButtonGroup,
  Dropdown,
  ToggleButton,
  Breadcrumb,
} from "react-bootstrap";
import {
  FaCloudUploadAlt,
  FaCloudDownloadAlt,
  FaCog,
  FaBars,
  FaEllipsisH,
  FaLevelUpAlt,
} from "react-icons/fa"; // for icons visit https://react-icons.github.io/react-icons
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

// import DirectoryBrowser from "./DirBrowser";
import { GET_FOLDER } from "../queries";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import FolderItems from "./FolderItems";
import Error from "../components/Error/Error.component";
import { ExplorerContext } from "../store/explorer-context";

const DisplayMenu = () => {
  return (
    <Dropdown.Menu>
      <Dropdown.Item href="#">Move</Dropdown.Item>
      <Dropdown.Item href="#">Copy</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#" style={{ color: "red" }}>
        Remove
      </Dropdown.Item>
    </Dropdown.Menu>
  );
};

const ExplorerRoot = (props) => {
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState([]);
  const { directoryState, dispatchDirectory } = useContext(ExplorerContext);
  const { loading, error, data: childrenData } = useQuery(GET_FOLDER, {
    variables: {
      _id: directoryState.homeRootId,
    },
  });

  const [radioValue, setRadioValue] = useState("1");

  useEffect(() => {
    if (childrenData && childrenData.getFolder) {
      setData(childrenData.getFolder);
    }
  });

  // const directoryChangeHandler = (item) => {
  //   // reset count
  //   setCount(1)
  //   console.log("current folder explorer", item);
  //   setCurrentDirectoryData(item.ancestors);
  //   if (!item.isFile) {
  //     dispatchDirectory({
  //       type: "SET_CURRENT_FOLDER",
  //       payload: {
  //         currentFolder: item.itemname,
  //       },
  //     });
  //   }
  // };

  // const levelUpHandler = () => {
  //   // setCurrentDirectoryData(currentDirectoryData);
  //     const ln = currentDirectoryData.length;
  //   dispatchDirectory({
  //     type: "SET_LEVEL_UP",
  //     payload: {
  //       currentFolder:
  //         currentDirectoryData[ln - count],
  //     },
  //   });
  // };

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
  console.log("current directory ", directoryState.homeRootId);
  console.log('folder data ', childrenData)


  return (
    <Container className="flex-grow-1 light-style container-p-y">
      <Container className="container-m-nx container-m-ny bg-lightest mb-3">
        <Breadcrumb className="text-big container-p-x py-3 m-0">
          <Breadcrumb.Item>
            <Link to="#">home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="#">projects</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>site</Breadcrumb.Item>
        </Breadcrumb>

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
              <DisplayMenu />
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
          {/* <div key={"levelup"} className="file-item">
            <FaLevelUpAlt className="file-item-icon file-item-level-up text-secondary" />

            <Link
              to="#"
              className="file-item__name"
            >
              ..
            </Link>
          </div> */}
          <div className="file-manager-row-header">
            <div className="file-item-name pb-2">Filename</div>
            <div className="file-item-changed pb-2">Changed</div>
          </div>
          {data.map((item) => {
            return (
              <FolderItems
                key={item._id}
                {...item}
              />
            );
          })}
        </Container>
        {errors.map((err) => (
          <Error key={err} error={err} />
        ))}
      </Container>
    </Container>
  );
};

export default ExplorerRoot;
