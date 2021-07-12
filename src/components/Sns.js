import React from 'react';
import './SpaceInfo.css';
import './Sns.css';


const Sns = () => {
    return (
        <div className="sns">
            <div className="sns_inner">
                <div className="sns_tit">
                    <h1>경기생활문화센터 SNS</h1>
                    <p>경기생활문화센터와 친구를 맺고<br/>다양한 소식을 만나보세요.</p>
                </div>
                <div className="sns_desc_sec">
                    <div className="sns_more space_more">MORE</div>
                    <div className="sns_slide">
                        {/* <div className="sns_slide_inner"> */}
                            <div className="sns_slide_box">
                                <img src="./img/_1621848192.jpg"/>
                            </div>
                            <div className="sns_slide_box">
                                <img src="./img/_1621848192.jpg"/>
                            </div>
                            <div className="sns_slide_box">
                                <img src="./img/_1621848192.jpg"/>
                            </div>
                            <div className="sns_slide_box">
                                <img src="./img/_1621848192.jpg"/>
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default Sns
