import React from "react";
import { useRef, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "./Addroom.css";


function Addroom() {
    const history = useHistory();
    const rid = Date.now()
    const exRid = 1636451924771;

  return (
    <>
        <div className="addRoom">
            <form className="addRoom__form">
                <label>매장명</label>
                <input type="text" placeholder="매장명" required/><br/>
                <label>최소주문금액</label>
                <input type="text" placeholder="최소주문금액" required/>
                <div className="">그래프</div>
                <input type="checkbox"></input>
                <label>식사</label>
                <input type="checkbox"></input>
                <label>카페·디저트</label>
                <Link to={`/rooms/${exRid}`}><button>완료</button></Link>
            </form>
        </div>
    </>
    )
}
export default Addroom;