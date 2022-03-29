import {Container, Row, Col, Card} from 'react-bootstrap';

const FileManager = props => {
  return (
    <Container className="mt-3">
      <Row>
        <h3>File Manager</h3>
        <Col border="scondary">
          <Card>

          </Card>
          <ul>
            <li>folder 1</li>
            <li>folder 2</li>
            <li>folder 3</li>
            <li>folder 4</li>
          </ul>
        </Col>
        <Col xs={9}>Col of 2</Col>
      </Row>
    </Container>
  );
};

export default FileManager;
