import { useState, useEffect } from "react";
import {API_HOST} from '../../global/constants'
import { useLocation } from "react-router-dom";
import axios from 'axios';
import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";

const Home = () => {
  const [data, setData] = useState([{}]);
  //need to get chatNum from backend when initalizing
  const [postNum, setpostNum] = useState(0);
  const location = useLocation();


  useEffect(() => {
      axios
      .get(`${API_HOST}/show/post/`,{
        params:{
          "roomId":location.state.roomId
        }
      })
      .then(res => {
        setData(res.data)
        console.log(location.state.roomId)
      })
  }, [postNum])

  return (
    <div className="app">
      <Edit setpostNum={setpostNum} creatorId={location.state.loginId} roomId={location.state.roomId}/>
      <List listData={data} setpostNum={setpostNum} loginId={location.state.loginId}/>
    </div>
  );
};

export default Home;
