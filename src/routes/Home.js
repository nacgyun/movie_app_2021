import React from "react";
import {Link} from "react-router-dom";
import "./Home.css"


function Home() {
  return (
    <div className="main">
      <div className="main__myChoice">
            <Link to="/">나의 선택</Link></div>
      <div className="main__differentChoice">
            <Link to="/rooms">다른 선택</Link></div>
    </div>)
}
export default Home;