import React, {createElement, useState} from "react";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';
import "./Room.css"
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import WrongWay from "./WrongWay";

function Room(props) {
  const [room, setRoom] = useState([]);
  const [join, setJoin] = useState(false);
  const [show, setShow] = useState(false);
  const { rid } = useParams();
  useEffect(() => {
      fetch(`http://localhost:3001/room?rid=${rid}`)
          .then(res => {
              return res.json();
          })
          .then(data => {
              setRoom(data);
              console.log(data)
          })
  },[])
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const changeJoin = () => {
      setJoin(!join);
      console.log("change join")
  }
  useEffect(() => {
    if(props.location.state && props.location.state.join){
    setJoin(props.location.state.join)
    console.log(join)
  }},[])
  if(room.length == 0) {
    return <WrongWay />
  }
  return (
    <>
      <div className="room">
            <div className="room__users">
            <div className="room__users-user">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>유저1
                </div>
            <div className="room__users-user">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>유저2</div>
            <div className="room__users-user">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>유저3</div>
            <div className="room__users-user">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>유저4</div>
            </div>
            <div className="room__store">
              <span>{room.map(room =>
              (join ? (<Link to={{
                pathname:`/rooms/${rid}/photo`,
                state: {
                  shop:room.shop
                }}}> {room.shop} </Link>) : <span>{room.shop}</span>))}
            </span>
            </div>
            <div className="room__toggles">
              {join ?
              <div className="room__menu">
                <Button variant="primary" onClick={handleShow} id="room__menu-button" className>
              메뉴
                </Button>
                <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>메뉴</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form id="menu-form">
                  <input id="room__menu-name" placeholder="이름" type="text" required/>
                  <input placeholder="가격" type="text" required/>
                  <button>추가</button>
                </form>
                <div className="room__menu-div"></div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
                </Modal>
              </div> : <div className="room__menu-hide"></div>}
              <div className="room__join"><button className="room__join-button" onClick={changeJoin}>{(props.location.state && props.location.state.confirmMenu) ? (<Link to={`/rooms/${rid}/mannerRate`}>음식 대기</Link>) : (join ? "나가기" : "입장")}</button></div>
            </div>
      </div>
      <div className="room__graph">그래프</div>
      <div className="room__chat">채팅</div>
    </>
  )
}
export default Room;