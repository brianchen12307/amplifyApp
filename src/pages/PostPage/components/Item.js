import axios from "axios";
import { useState, useEffect } from "react";
import {API_HOST} from '../../../global/constants'

const Item = ({_id, roomId, writtenBy, content, numMessage }) => {
  const [creatorName, setCreatorName] = useState("");

/*  useEffect(() => {
    axios
    .get(`${API_HOST}/get/userName/`, {
      params:{
        'userId': writtenBy
      }
    })
    .then(res => {
      setCreatorName(res.data)
      console.log(writtenBy)
    })
})*/

  function deleteItem() {
  }

  function reply(){
  }

  
    return (
      <div className="item">
        <div>
          <p>Content：{content}</p>
          <p>Author:{creatorName}      Number of message:{numMessage}</p>

        </div>
        <button onClick={reply}className="reply">Reply</button>
        
      </div>
    );
  };
  
  export default Item;
  