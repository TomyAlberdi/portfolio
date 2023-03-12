import React from 'react'
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
                    <h2>1</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <h2>2</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <h2>3</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <h2>4</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <h2>5</h2>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Projects