import React from 'react';
import MoreBtn from '../../../components/button/MoreBtn';
import SectionHeader from '../../../components/text/SectionHeader';
import './SpaceInfo.css';
import './Sns.css';
import SectionContainer from '../../../layout/SectionContainer';


const Sns = () => {
    return (
        <div className="sns">
            <SectionContainer>
                <div className="sns_tit">
                    <SectionHeader
                        align="left"
                        color="#222"
                        description="경기생활문화센터와 친구를 맺고 다양한 소식을 만나보세요."
                        title="경기생활문화센터 SNS"
                    />
                </div>
                <div className="sns_desc_sec">
                    <MoreBtn/>
                    {/* <div className="sns_more space_more">MORE</div> */}
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
            </SectionContainer>
        </div>
    )
}

export default Sns
