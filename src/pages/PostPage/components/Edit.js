import axios from "axios";
import { useState } from "react";
import {API_HOST} from '../../../global/constants'

const Edit = (props) => {
  const [post, setPost] = useState("");

  function addItem() {
    axios.post(`${API_HOST}/post`,{
            "roomId": props.roomId,
            "writtenBy": props.creatorId,
            "content": post
          })
    props.setpostNum(function(prev) {
      return prev + 1;
    }) 
  }

return (
    <div>
      <h1>Post</h1>
      <p>Content：</p>
      <textarea  type="text" value={post} onChange={(e)=>setPost(e.target.value)} />
      <div>
      <button onClick={addItem} className="add">
        POST IT!
      </button>
      </div>
    </div>
  );
};

export default Edit;
