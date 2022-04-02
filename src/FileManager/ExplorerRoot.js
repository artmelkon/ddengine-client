import { useState, useContext } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaFolder, FaFolderOpen } from "react-icons/fa"; // for icons visit https://react-icons.github.io/react-icons
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';

// import DirectoryBrowser from "./DirBrowser";
import {GEt_FM_DIRECTORIES} from '../queries';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import Folder from "./Folder";
import Error from "../components/Error/Error.component";
import { ExplorerContext } from "../context/explorer-context";


const ExplorerRoot = (props) => {
  const [dirOpen, setDirOpen] = useState(false)
  const [errors, setErrors] = useState([])
  const {loading, error, data} = useQuery(GEt_FM_DIRECTORIES);
  const dirCtx = useContext(ExplorerContext)

  const openFolderHandler = () => {
    console.log("world");
    dirCtx.open('hello', dirOpen);
  };

  if(loading) return <LoadingSpinner />;
  if(error) return setErrors(error);
  const { getFMDirectories } = data;

  return (
    <Container className="mt-3">
      <Row>
        <h3>File Manager</h3>
        <Col>
          <Card>
            <Card.Body>
              <ul className="fs-5">
                {getFMDirectories.map((dir) => (
                  <Folder key={dir._id} {...dir} onFolderOpen={openFolderHandler} />
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={9}>
          <Card>
            <Card.Body>
              <ul className="fs-5">
                {/* {props.getFMDirectories.map((dir) => (
                  <DirectoryList key={dir._id} {...dir} />
                ))} */}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {errors.map((err) => (
        <Error key={err} error={err} />
      ))}
    </Container>
  );
}

export default ExplorerRoot
