import React, {useContext, useState } from "react";
import { useQuery} from '@apollo/client';
import { Row, Col, Card, ListGroup, ListGroupItem } from "react-bootstrap";

import { AuthContext } from "../store/auth-context";
import { GET_CURRENT_USER } from "../queries";
import Error from '../components/Error/Error.component';


const UserInfo = () => {
  const [errors, setErrors] = useState([]);
  const authCtx = useContext(AuthContext);
  const {loading, error, data} = useQuery(GET_CURRENT_USER, {
    variables: {_id: authCtx.user._id},
  });

  if(loading) return <p>Loading</p>;
  if(error) return setErrors(error);
  // console.log("user info data ", data);

  const {name, email } = data.getCurrentUser;
  return (
    <Row className="mt-5 fs-4">
      <Col md={{ span: 6, offset: 3 }}>
        <Card>
          <Card>
            <Card.Img variant="top" src="avata.jpg" alt="avatar" className="p-4" />
            <Card.Body>
              <Card.Title style={{textAlign: 'center', fontSize: '2.2rem', }}>User Info</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Name:&nbsp;&nbsp;{name}</ListGroupItem>
              <ListGroupItem>Username/Email: &nbsp;&nbsp;{email}</ListGroupItem>
            </ListGroup>
            <Card.Body className="text-center">
              <Card.Link href="#">Reset Passwod</Card.Link>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <Card.Link href="#">Add Email</Card.Link>
            </Card.Body>
          </Card>
          {errors.map((err) => (
            <Error key={err} error={err.massage} />
          ))}
        </Card>
      </Col>
    </Row>
  );
};

export default UserInfo;
