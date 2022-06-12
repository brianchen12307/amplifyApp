import axios from "axios";
import { useState, useEffect } from "react";
import MessagesList from "./MessagesList"
import {API_HOST} from '../../../global/constants'

const Item = ({_id, roomId, writtenBy, content, numMessage, loginId }) => {
  const [creatorName, setCreatorName] = useState("")
  const [data, setData] = useState([{}])
  const [Ireply, setReply] = useState("")
  const [mesNum, setmesNum] = useState (0)

  useEffect(() => {
    axios
    .get(`${API_HOST}/get/userName/`, {
      params:{
        'userId': writtenBy
      }
    })
    .then(res => {
      setCreatorName(res.data.userName)
    })
})

  function deleteItem() {
  }

  useEffect(() => {
    axios.get(`${API_HOST}/show/message/`,{
            params:{
            'parentType' : "post",
            'parentId' : _id
            }
          })
         .then(res => {
          setData(res.data)
          })
    }, [mesNum])


  function addReply(){
    axios.post(`${API_HOST}/message`,
          {
            'parentType': "post",
            'parentId': _id,
            'writtenBy': loginId,
            'text' : Ireply
          })
    setmesNum(function(prev) {
      return prev + 1;
    }) 
  }

    return (
      <div className="post">
        <div>
          <p>{content}</p>
          <p>Author : {creatorName}</p>
          <p>Number of message : {numMessage}</p>
        </div>
        <div>
          <p>Reply Here ： </p>
          <input type="text" value={Ireply} onChange={(e)=>setReply(e.target.value)} />
          <button onClick={addReply}className="submit">Submit</button>
          <MessagesList listData={data} setmesNum={setmesNum} />
        </div>    
      </div>
    );
  };
  
  export default Item;
  