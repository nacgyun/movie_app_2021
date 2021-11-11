import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./ReceivePhoto.css";
import { useHistory } from "react-router";
import "./Room.css"
import WrongWay from "./WrongWay";

function ReceivePhoto(props) {
    const [room, setRoom] = useState([]);
    const { rid } = useParams();
    const history = useHistory();
    useEffect(() => {
        fetch(`http://localhost:3001/room?rid=${rid}`)
            .then(res => {
                return res.json()}
            )
            .then(data => {
                setRoom(data);
            })
    },[])
    if(!props.location.state) {
        return <WrongWay />
    }
    return (
        <>        
            <div className="photo">    
                <div className="photo__store"><span>{props.location.state.shop}</span></div>
                <div className="photo__span"><span>사진에 본인이 선택한 메뉴를 확인해주세요.</span></div>
                <div className="photo__img"><img className="photo__img-img"></img></div>
                <div className="photo__btns">
                <Link to={{
                        pathname: `/rooms/${rid}`,
                        state: {
                            confirmMenu: true,
                        }
                        }}><button>맞습니다</button></Link>
                    <Link to={{
                        pathname: `/rooms/${rid}`,
                        state: {
                            join: true,
                        }
                        }}><button>아닙니다</button></Link>
                </div>
            </div>
        </>
    )
}

export default ReceivePhoto;