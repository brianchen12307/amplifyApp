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
  const [roomNum, setroomNum] = useState(0);
  const location = useLocation();

  useEffect(() => {
      axios
      .get(`${API_HOST}/show/room/`)
      .then(res => {
        setData(res.data)
        console.log(res.data)
      })
  }, [roomNum])

  return (
    <div className="app">
      <Edit setroomNum={setroomNum} loginId={location.state._id}/>
      <List listData={data} loginId={location.state._id} setroomNum={setroomNum}/>
    </div>
  );
};

export default Home;
