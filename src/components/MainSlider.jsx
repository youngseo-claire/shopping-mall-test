
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export default function MainSlider() {

    const slides = [
        { src: "./images/main_slider_01.jpg", alt: "slider1" },
        { src: "./images/main_slider_02.jpg", alt: "slider2" },
        { src: "./images/main_slider_03.jpg", alt: "slider3" },
        { src: "./images/main_slider_04.jpg", alt: "slider4" },
        { src: "./images/main_slider_05.jpg", alt: "slider5" },
    ]

    return (
        <Swiper
            modules={[Autoplay, Navigation, Pagination, Scrollbar]}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false
            }}
            navigation={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            loop={true}
        >
            {slides.map((slide, i) => (
                <SwiperSlide key={i}>
                    <img src={slide.src} alt={slide.alt} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}