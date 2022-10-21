import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Data } from "../DataDummy/Data";

const Home = () => {
  const navigate = useNavigate();
  return Data?.map((item) => {
    return (
      <div key={item.id} className="my-3 col-md-6">
        <Card.Body
          className="d-flex p-2 align-items-center shadow"
          onClick={() => navigate(`/detail/${item.id}`)}
        >
          <img
            variant="top"
            src={item.image}
            style={{ width: "50px", marginRight: "15px" }}
          />
          <div>
            <p>@{item.username}</p>
            <p>Followers: {item.follower}</p>
          </div>
        </Card.Body>
      </div>
    );
  });
};

export default Home;
