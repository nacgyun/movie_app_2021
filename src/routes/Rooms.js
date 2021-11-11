import React, { useState } from "react";
import { useEffect } from "react";
import {Link} from "react-router-dom";
import "./Rooms.css"


function Rooms() {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3001/room`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setRooms(data);
            })
    },[])
    console.log(rooms)
  return (
    <div className="roomlist">
        <div className="roomlist__category">
            <div id="roomlist__category-meal"><input type="button" id="meal" value="식사" /></div>
            <div id="roomlist__category-dessert"><input type="button" id="dessert" value="카페·디저트" /></div>
        </div>
        <div className="roomlist__list">
            {rooms.map(room => (<div>
                <div>
                    <div className="roomlist__list-store">{room.shop}</div>
                    <div className="roomlist__list-time">시간</div>
                </div>
                <div className="roomlist__list-price">10000/100000</div>
                <div className="roomlist__list-people">4명</div>
                <div className="roomlist__list-join"><Link to={`/rooms/${room.rid}`}>참가</Link></div>
            </div>))}
            
        </div>
    </div>)
}
export default Rooms;