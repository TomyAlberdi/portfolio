import React from 'react'
import ProjectSlide from '../utils/ProjectSlide';
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Projects = () => {
    return (
        <div className='Main Projects'>
            <Swiper
                direction={"vertical"}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Mousewheel, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <ProjectSlide />
                </SwiperSlide>
                <SwiperSlide>
                    <ProjectSlide />
                </SwiperSlide>
                <SwiperSlide>
                    <ProjectSlide />
                </SwiperSlide>
                <SwiperSlide>
                    <ProjectSlide />
                </SwiperSlide>
                <SwiperSlide>
                    <ProjectSlide />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Projects