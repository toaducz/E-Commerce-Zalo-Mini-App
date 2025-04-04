import React, {useState} from "react";
import {Page, Swiper, Icon} from "zmp-ui"

const SwiperAutoPlay: React.FunctionComponent = () => {
    return(
       
            <Swiper autoplay duration={5000}>
                <Swiper.Slide>
                    <img
                        className="slide-img"
                        src="https://stc-zmp.zadn.vn/zmp-zaui/images/0e05d63a7a93a6cdff826.jpg"
                        alt = "img1"
                    >
                    </img>
                </Swiper.Slide>
                <Swiper.Slide>
                    <img
                        className="slide-img"
                        src="https://stc-zmp.zadn.vn/zmp-zaui/images/0f7c061caab576eb2fa45.jpg"
                        alt = "img2"
                    >
                    </img>
                </Swiper.Slide>
                <Swiper.Slide>
                    <img
                        className="slide-img"
                        src="https://stc-zmp.zadn.vn/zmp-zaui/images/4f417921d58809d650997.jpg"
                        alt = "img3"
                    >
                    </img>
                </Swiper.Slide>
            </Swiper>
     
    );
}

export default SwiperAutoPlay;