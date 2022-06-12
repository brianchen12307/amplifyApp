import axios from "axios";
import { useState, useEffect } from "react";
import {API_HOST} from '../../../global/constants'
import MesItem from "./MessagesItem";

const MessagesList = ({listData, setmesNum}) =>{
    return (
        <div className="list">
          {listData.map((item) => {
            const { _id, parentType, writtenBy, text, numMessage} = item;
            return (
              <MesItem
                key={_id}
                parentType={parentType}
                _id={_id}
                writtenBy={writtenBy}
                text={text}
                numMessage={numMessage}
                setmesNum={setmesNum}
              />
            );
          })}
        </div>
      );
};


export default MessagesList;


