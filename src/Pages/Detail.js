import { Card, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Data } from "../DataDummy/Data";

const Detail = () => {
    const id = useParams();
    const list = Data.filter((a) => a.id === id.id)
  return (
    <Container>
        <div className="my-3 col-md-6">
          <Card.Body className="p-2 shadow" style={{ textAlign: "center" }}>
            <img
              variant="top"
              src={list[0].image}
              style={{ width: "50px", marginRight: "15px" }}
            />

            <p>@{list[0].username}</p>
            <Row>
              <Col>
                <p>{list[0].follower}</p>
                <p>Follower</p>
              </Col>
              <Col>
                <p>{list[0].following}</p>
                <p>Following</p>
              </Col>
            </Row>
            <Link to="/" >back</Link>
          </Card.Body>
        </div>
    </Container>
  );
};

export default Detail;
