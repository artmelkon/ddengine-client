import { Spinner } from "react-bootstrap";

const LoadingSpinner = (props) => (
  <div className="d-flex justify-content-center mt-5">
    <Spinner
      as="span"
      animation="grow"
      variant="secondary"
      size="md"
      // role="status"
      // aria-hidden="true"
    />
    <span style={{ marginLeft: "8px", fontSize: "1.5rem" }}>Loading...</span>
  </div>
);

export default LoadingSpinner;
