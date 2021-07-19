import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import SectionHeader from '../../../components/text/SectionHeader';
import SectionContainer from '../../../layout/SectionContainer';
import './NewInfo.css'

const NewInfo = () => {
    return (
        <div className="new_info">
            <SectionContainer>
                <div className="new_info_inner">
                    <div className="new_tit">
                        <SectionHeader
                            align="left"
                            color="#222"
                            description=""
                            title1="새로운 소식"
                            title2=""
                        />
                    </div>
                    <div className="new_desc_sec">
                        <div className="new_desc_box">
                            <p>공지</p>
                            <p>경기생활문화센터 리틀포레 생활문화 동호회 모집<br/>(경기생활문화센터 소속 동호회 대상)</p>
                            <p>경기생활문화센터 리틀포레에서 끼를 발산할<br/>경기생활문화센터 소속 생활문화 동호회를 찾습니다!</p>
                            <p>2021. 06. 10.<span className="new_plus"><AiOutlinePlus/></span></p>
                        </div>
                        <div className="new_desc_box">
                            <p>공지</p>
                            <p>경기생활문화센터 리틀포레 생활문화 동호회 모집<br/>(경기생활문화센터 소속 동호회 대상)</p>
                            <p>경기생활문화센터 리틀포레에서 끼를 발산할<br/>경기생활문화센터 소속 생활문화 동호회를 찾습니다!</p>
                            <p>2021. 06. 10.<span className="new_plus"><AiOutlinePlus/></span></p>
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </div>
    )
}

export default NewInfo
