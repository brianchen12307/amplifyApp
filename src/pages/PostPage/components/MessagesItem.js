import axios from "axios";
import { useEffect, useState } from "react"
import {render} from 'react-dom';
import { renderMatches, useNavigate} from "react-router-dom";
import {API_HOST} from '../../../global/constants'

const MessagesItem = ({ _id, parentType, writtenBy, text, numMessage, setmesNum }) => {
      const [creatorName, setCreatorName] = useState("")

      
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

    return (
      <div className="item">
        <p>{text}</p>
        <p>writtenBy : {creatorName}</p>
      </div>
    );


  };
  
  export default MessagesItem;
  