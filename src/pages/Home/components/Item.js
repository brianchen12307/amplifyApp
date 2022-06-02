import axios from "axios";
import { useNavigate } from "react-router-dom";
import {API_HOST} from '../../../global/constants'

const Item = ({ _id, loginId, topic, pwd, creatorId, numPost, numFollower, setroomNum }) => {
  const navigate = useNavigate();

  function deleteItem() {
    axios.delete(`${API_HOST}/delete/room/${topic}`)
    setroomNum(function(prev) {
      return prev - 1;
    }) 
  }

  function joinRoom(){
    axios.put(`${API_HOST}/join`,{
                'roomId':_id,
                'userId':loginId
            })
            console.log(_id)
            console.log(loginId)
  }

  function goEachRoom(){
              navigate('/post', {state: {roomId : _id, creatorId : creatorId}})
  }
  
    return (
      <div className="item">
        <div>
          <p>TOPIC:{topic}</p>
          <p>NUM_OF_POST:{numPost}</p>
          <p>FOLLOWERS:{numFollower}</p>
          <p>{/*_id*/}</p>
          <p>{/*loginId*/}</p>
        </div>
        <button onClick={joinRoom}className="join">Join</button>
        <button onClick={goEachRoom} className="enter">Enter</button>
        <button onClick={deleteItem} className="remove">Delete</button>
        
      </div>
    );
  };
  
  export default Item;
  