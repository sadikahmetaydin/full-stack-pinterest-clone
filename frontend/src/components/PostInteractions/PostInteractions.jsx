import Image from "../Image/Image";
import "./PostInteractions.css";

function PostInteractions() {
  return (
    <div className="postInteractions">
      <div className="interactionIcons">
        <Image path="/general/react.svg" alt="" />
        <span>273</span>
        <Image path="/general/share.svg" alt="" />
        <Image path="/general/more.svg" alt="" />
      </div>
      <button>Save</button>
    </div>
  );
}

export default PostInteractions;
