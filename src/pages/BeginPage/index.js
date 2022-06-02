import { Link } from "react-router-dom";
import "./index.css";

const Begin = () => {

  return (
    <div className="app">
      <h1>Message Board</h1>
      <nav>
        <Link to="/login">
          <button className="begin_enter">Log in</button>  
        </Link>
      </nav>
      <nav>
        <Link to="/register">
          <button className="begin_enter">Register</button>  
        </Link>
      </nav>
    </div>
  );
};

export default Begin;