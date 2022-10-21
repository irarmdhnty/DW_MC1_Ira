import { Card, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Data } from "../DataDummy/Data";

const Detail = () => {
    const id = useParams();
    const profile = Data.filter((p) => p.id)
  return (
    <Container>
      {Data.map((item, index) => (
        <div key={index} className="my-3 col-md-6">
          <Card.Body className="p-2 shadow" style={{ textAlign: "center" }}>
            <img
              variant="top"
              src={item.image}
              style={{ width: "50px", marginRight: "15px" }}
            />

            <p>@{item.username}</p>
            <Row>
              <Col>
                <p>{item.follower}</p>
                <p>Follower</p>
              </Col>
              <Col>
                <p>{item.following}</p>
                <p>Following</p>
              </Col>
            </Row>
            <Link to="/" >back</Link>
          </Card.Body>
        </div>
      ))}
    </Container>
  );
};

export default Detail;
