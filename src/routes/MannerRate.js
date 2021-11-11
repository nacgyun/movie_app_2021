import { Link } from "react-router-dom"
import { useState } from "react";
import "./MannerRate.css"

export default function MannerRate() {
    return(
        <div className="complete_delivery">
            <div className="complete_delivery__alert"><h2>배달이 완료됐습니다!</h2></div>
            <div className="complete_delivery__plz"> 유저를 평가해주세요 </div>
            <div className="complete_delivery__users">
                <div className="complete_delivery__users-user">
                    <div className="complete_delivery__users-user_name">유저1</div>
                    <button className="complete_delivery__users-button">신고하기</button>
                    <div className="complete_delivery__users-rates">
                    <label>나쁨<input value={1} type="checkbox" className="checkbox"/></label>
                    <input value={2} type="checkbox" className="checkbox"/>
                    <input value={3} type="checkbox" className="checkbox"/>
                    <input value={4} type="checkbox" className="checkbox"/>
                    <label><input id={5} type="checkbox" className="checkbox"/>좋음</label>
                    </div>
                </div>
            </div>
            <button className="complete_delivery__comfrim"><Link to="/">확인</Link></button>
        </div>
    )
}
/*
                <label>나쁨<input type="checkbox" name="rate" value={1} onclick={checkOnlyOne(this)}/></label>
                <label><input type="checkbox" name="rate" value={2} onclick={checkOnlyOne(this)}/></label>
                <label><input type="checkbox" name="rate" value={3} onclick={checkOnlyOne(this)}/></label>
                <label><input type="checkbox" name="rate" value={4} onclick={checkOnlyOne(this)}/></label>
                <label><input type="checkbox" name="rate" value={5} onclick={checkOnlyOne(this)}/>좋음</label>*/