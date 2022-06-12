import Item from "./Item";

const List = ({ listData, setpostNum, loginId}) => {
  return (
    <div className="list">
      {listData.map((item) => {
        const { _id, roomId, writtenBy, content, numMessage} = item;
        return (
          <Item
            key={_id}
            roomId={roomId}
            _id={_id}
            writtenBy={writtenBy}
            content={content}
            numMessage={numMessage}
            loginId={loginId}
            setpostNum={setpostNum}
          />
        );
      })}
    </div>
  );
};

export default List;
