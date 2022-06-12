import { useState, useEffect } from "react";
import { Image } from 'react-native';
import {API_HOST} from '../../global/constants'
import { useLocation } from "react-router-dom";
import axios from 'axios';
import Edit from "./components/Edit";
import List from "./components/List";
import searchimg from '../../images/glass.png'
import "./index.css";

const Home = () => {
  const [data, setData] = useState([{}]);
  //need to get chatNum from backend when initalizing
  const [roomNum, setroomNum] = useState(0);
  const [search, setSearch] = useState("")
  const location = useLocation();

  useEffect(() => {
      axios
      .get(`${API_HOST}/show/room/`)
      .then(res => {
        setData(res.data)
      })
  }, [roomNum])

  function seraching(){
    axios.get(`${API_HOST}/find/room/`,{
            params:{
            'tag': search
            }
          })
          .then(res => {
            setData(res.data)
          })
  }

  return (
    <div className="app">
      <input type="text" style={{width:"70%"}} value={search} onChange={(e)=>setSearch(e.target.value)} />
      <img src={searchimg} alt="searchimg" width={55} height={38} style={{float: 'right'}} onClick={() => seraching()} />
      <Edit setroomNum={setroomNum} loginId={location.state._id}/>
      <List listData={data} loginId={location.state._id} setroomNum={setroomNum}/>
    </div>
  );
};

export default Home;
