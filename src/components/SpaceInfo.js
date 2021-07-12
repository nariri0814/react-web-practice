import React from 'react'
import './SpaceInfo.css'

const SpaceInfo = () => {
    return (
        <>
        <div className="space_info">
            <div className="space_tit">
                <div className="space_tit_L">
                    <h2>경기생활문화센터<br/>공간소개</h2>
                    <p>경기생활문화센터에서 운영하는 공간을 둘러보세요.</p>
                </div>
                <div className="space_tit_R">
                    <div className="space_more">MORE</div>
                </div>
            </div>
            <div className="space_main_sec">
                <div className="space_btn_sec">
                    <div className="sp_btn_wrap">
                        <div className="sp_btn"><a href="#">책 놀이터</a></div>
                        <div className="sp_btn"><a href="#">생활 수유실</a></div>
                    </div>
                    <div className="sp_btn_wrap">
                        <div className="sp_btn"><a href="#">동네부엌</a></div>
                        <div className="sp_btn"><a href="#">생생 수유실</a></div>
                        <div className="sp_btn"><a href="#">마주침 공간1</a></div>
                        <div className="sp_btn"><a href="#">아주침 공간2</a></div>
                    </div>
                    <div className="sp_btn_wrap">
                        <div className="sp_btn"><a href="#">한뼘전시</a></div>
                        <div className="sp_btn"><a href="#">무아지경</a></div>
                        <div className="sp_btn"><a href="#">생생살롱1</a></div>
                        <div className="sp_btn"><a href="#">생생살롱2</a></div>
                    </div>
                </div>
                <div className="space_img_sec">
                    <img src="../img/space_01.png"/>
                </div>
            </div>
        </div>
        <div className="space_tit our_space">
            <div className="space_tit_L">
                <h2>우리지역<br/>생활문화공간을 찾아보세요</h2>
                <p>내가 사는 지역 생활문화공간 바로 찾기</p>
            </div>
            <img src="../img/our-center-img.svg"/>
            <div className="space_tit_R">
                <div className="space_more">MORE</div>
            </div>
        </div>
        </>
    )
}

export default SpaceInfo
