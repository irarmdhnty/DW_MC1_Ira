import { Data } from "../DataDummy/Data"

const Profile = () => {
    return(
        <div>
            {Data.map((index, item) => (
                <div key={index}>
                    <img src={item.img} />
                    <p>@{item.username}</p>
                    <p>Followers: {item.follower}</p>
                </div>
            ))}
        </div>
    )
}

export default Profile