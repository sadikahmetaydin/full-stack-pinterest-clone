import "./ProfilePage.css";
import Image from "../../components/Image/Image";
import { useState } from "react";
import Boards from "../../components/Boards/Boards";
import Gallery from "../../components/Gallery/Gallery"
import { useQuery } from "@tanstack/react-query";
import apiRequest from "../../utils/apiRequest";
import { useParams } from "react-router";
import FollowButton from "./FollowButton";

function ProfilePage() {

  const [type, setType] = useState("saved");

  const { username } = useParams();

  const { isPending, error, data } = useQuery({
      queryKey: ["profile", username],
      queryFn: () => apiRequest.get(`/users/${username}`).then((res) => res.data)
    })
  
    if (isPending) return "Loading...";
  
    if (error) return "An error has occured: " + error.message;
  
    if (!data) return "User not found!";

  return (
    <div className="profilePage">
      <Image className="profileImg" w={100} h={100} src={data.img || "/general/noAvatar.png"} alt="" />
      <h1 className="profileName">{data.displayName}</h1>
      <span className="profileUsername">@{data.username}</span>
      <div className="followCounts">{data.followerCount} followers / {data.followingCount} followings</div>

      <div className="profileInteractions">
        <Image path="/general/share.svg" alt="" />

        <div className="profileButtons">
          <button>Message</button>
          <FollowButton isFollowing={data.isFollowing} username={data.username} />
        </div>

        <Image path="/general/more.svg" alt="" />
      </div>

      <div className="profileOptions">
        <span onClick={() => setType("created")} className={type === "created" ? "active" : ""}>Created</span>
        <span onClick={() => setType("saved")} className={type === "saved" ? "active" : ""}>Saved</span>
      </div>

      { type === "created" ? <Gallery userId={data._id} /> : <Boards userId={data._id} /> }
    </div>
  );
}
export default ProfilePage;
