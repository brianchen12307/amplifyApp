import axios from "axios";
import { useState } from "react";
import {API_HOST} from '../../../global/constants'


const Edit = (props) => {
  const [name, setName] = useState("");
  const [key, setKey] = useState("");

  function addItem() {
    axios.post(`${API_HOST}/room`,
          {
            'topic':name,
            'pwd':key,
            'creatorId':props.loginId
            //'users':[user1, user2]
          })
    props.setroomNum(function(prev) {
      return prev + 1;
    }) 
  }


  return (
    <div>
      <h1>Rooms</h1>
      <p>Room_Topic：</p>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      <p>EnterKey：</p>
      <input type="password" value={key} onChange={(e)=>setKey(e.target.value)} />
      <div>
      <button onClick={addItem} className="add">
        ADD
      </button>
      </div>
    </div>
  );
};

export default Edit;
