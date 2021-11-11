import { Link } from "react-router-dom"
import "./WrongWay.css"

export default function WrongWay() {
    return(
        <>
            <div className="main">
                <h1>잘못 된 접근입니다!</h1>
                <Link to={"/"}><button>홈으로 가기</button></Link>
            </div>
        </>
    )
}