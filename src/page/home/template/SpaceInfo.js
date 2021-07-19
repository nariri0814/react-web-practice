import React, { useState } from 'react';

import SpaceBtn from '../../../components/button/SpaceBtn';
import MoreBtn from '../../../components/button/MoreBtn';
import SectionHeader from '../../../components/text/SectionHeader';
import './SpaceInfo.css';
import SectionContainer from '../../../layout/SectionContainer';

const SpaceImages = [
    {
        id: '1',
        imgSrc: "../img/space_01.png"
    },
    {
        id: '2',
        imgSrc: "../img/space_02.png",
    },
    {
        id: '3',
        imgSrc: "../img/space_03.png",
    },
    {
        id: '4',
        imgSrc: "../img/space_04.png",
    },
    {
        id: '5',
        imgSrc: "../img/space_05.png",
    },
    {
        id: '6',
        imgSrc: "../img/space_06.png",
    },
    {
        id: '7',
        imgSrc: "../img/space_07.png",
    },
    {
        id: '8',
        imgSrc: "../img/space_08.png",
    },
    {
        id: '9',
        imgSrc: "../img/space_09.png",
    },
    {
        id: '10',
        imgSrc: "../img/space_10.png",
    }
]

const SpaceInfo = () => {
    const [ spaceId, setSpaceId ] = useState("1")
    const [ spaceInfo, setSpaceInfo ] = useState(SpaceImages[0])
    
//    console.log('spaceId:'+spaceId+', spaceInfo:'+spaceInfo.imgSrc)
//    console.log(SpaceImages[spaceId-1].imgSrc)


    const onClickBtn = (id) => {
        // console.log(id)
        setSpaceId(id)

        const filteredItem = SpaceImages.find(item => item.id === id );

        setSpaceInfo(filteredItem || SpaceImages[0])
        // console.log(spaceInfo)
    }
    return (
        <SectionContainer>
            <div className="space_info">
                <div className="space_tit">
                    <div className="space_tit_L">
                        <SectionHeader
                            align="left"
                            color="#222"
                            description="경기생활문화센터에서 운영하는 공간을 둘러보세요."
                            title1="경기생활문화센터"
                            title2="공간소개"
                        />
                    </div>
                    <div className="space_tit_R">
                        <MoreBtn/>
                    </div>
                </div>
                <div className="space_main_sec">
                    
                    <div className="space_btn_sec">
                        <div className="sp_btn_wrap">
                            <SpaceBtn
                                id="1"
                                onClick={onClickBtn}
                                description="책 놀이터"
                            />
                            <SpaceBtn
                                id="2"
                                onClick={onClickBtn}
                                description="생활 수유실"
                            />
                        </div>
                        <div className="sp_btn_wrap">
                            <SpaceBtn
                                id="3"
                                onClick={onClickBtn}
                                description="동네부엌"
                            />
                            <SpaceBtn
                                id="4"
                                onClick={onClickBtn}
                                description="생생 수유실"
                            />
                            <SpaceBtn
                                id="5"
                                onClick={onClickBtn}
                                description="마주침 공간1"
                            />
                            <SpaceBtn
                                id="6"
                                onClick={onClickBtn}
                                description="마주침 공간2"
                            />
                        </div>
                        <div className="sp_btn_wrap">
                            <SpaceBtn
                                id="7"
                                onClick={onClickBtn}
                                description="한뼘전시"
                            />
                            <SpaceBtn
                                id="8"
                                onClick={onClickBtn}
                                description="무아지경"
                            />
                            <SpaceBtn
                                id="9"
                                onClick={onClickBtn}
                                description="생생살롱1"
                            />
                            <SpaceBtn
                                id="10"
                                onClick={onClickBtn}
                                description="생생살롱2"
                            />
                        </div>
                    </div>


                    <div className="space_img_sec">
                    {/* {SpaceImages.map(item => {

                    })} */}
                        {/* <img src={SpaceImages[spaceId-1].imgSrc} alt="space"/> */}
                        <img src={spaceInfo.imgSrc} alt="space"/>
                    </div>
                </div>
            </div>
            <div className="space_tit our_space">
            <div className="space_tit_L">
                <SectionHeader
                    align="left"
                    color="#222"
                    description="내가 사는 지역 생활문화공간 바로 찾기"
                    title1="우리지역"
                    title2="생활문화공간을 찾아보세요"
                />
            </div>
            <img src="../img/our-center-img.svg" alt="our_space"/>
            <div className="space_tit_R">
                <MoreBtn/>
            </div>
        </div>
        </SectionContainer>
    )
}

export default SpaceInfo
