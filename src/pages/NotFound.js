import { useNavigate } from "react-router-dom";

function NotFound() {

  const navigate = useNavigate();

    return (
      <div className="not-found-wrapper">
        <div className="not-found-title">This is embarrassing...</div>
        <div className="not-found-sub">It looks like this page hasn't been made yet. Or one of us made a typo. 
        <br />
        Can I take you back home? 🚙</div>
      <div 
        className="not-found-response"
        onClick={() => navigate("/")}
      >
        Yes »
      </div>
      </div>
    );
  }
  
  export default NotFound;