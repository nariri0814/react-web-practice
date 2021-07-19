import React, { useEffect } from 'react';

import MoreBtn from '../../../components/button/MoreBtn';
import SectionContainer from '../../../layout/SectionContainer';
import SectionHeader from '../../../components/text/SectionHeader';
import SnsSlide from '../../../components/slide/SnsSlide';
import './SpaceInfo.css';
import './Sns.css';


const Sns = () => {

    return (
        <div className="sns">
            <SectionContainer>
                <div className="sns_tit">
                    <SectionHeader
                        align="left"
                        color="#222"
                        description="경기생활문화센터와 친구를 맺고 다양한 소식을 만나보세요."
                        title1="경기생활문화센터 SNS"
                        title2=""
                    />
                </div>
                <div className="sns_desc_sec">
                    <MoreBtn/>
                    <SnsSlide/>
                </div>
            </SectionContainer>
        </div>
    )
}

export default Sns
