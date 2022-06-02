import Item from "./Item";


const List = ({ listData,loginId, setroomNum }) => {
  return (
    <div className="list">
      {listData.map((item) => {
        const { _id, topic, pwd, creatorId, numPost, numFollower} = item;
        return (
          <Item
            key={_id}
            loginId={loginId}
            _id={_id}
            topic={topic}
            pwd={pwd}
            creatorId={creatorId}
            numPost={numPost}
            numFollower={numFollower}
            setroomNum={setroomNum}
          />
        );
      })}
    </div>
  );
};

export default List;
