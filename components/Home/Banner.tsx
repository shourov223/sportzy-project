"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Jost } from 'next/font/google';
import { montserrat } from '../navbar';

const jost = Jost({
    weight: ["400", "500", "600", "700", "800"],
    subsets: ["latin"]
})

const SLIDER_CONFIG = {
    modules: [Autoplay, Pagination, Navigation],
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    speed: 2000,
    pagination: { clickable: true }
};

const SLIDE_CONTENT = {
    tagline: "S P O R T Z Y",
    heading: "THE PERFECT PLACE WHERE THE SPORTY SHOPS",
    description: "Discover the best sports apparel, accessories, and equipment here.",
    buttonText: "SHOP NOW"
};

const SlideContent = () => (
    <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 lg:pt-[150px] pb-32 sm:pb-40 lg:pb-[196px]">
        <span className={`text-[#C1032F] text-sm sm:text-base font-semibold leading-7 pb-4 sm:pb-6 lg:pb-8 select-none ${montserrat.className}`}>
            {SLIDE_CONTENT.tagline}
        </span>

        <h1 className={`text-white text-3xl sm:text-4xl md:text-5xl lg:text-[70px] font-bold leading-tight lg:leading-20 max-w-full sm:max-w-2xl lg:max-w-[981px] mx-auto pb-4 sm:pb-6 lg:pb-[20px] text-center ${jost.className}`}>
            {SLIDE_CONTENT.heading}
        </h1>

        <p className={`text-white text-base sm:text-lg lg:text-[20px] leading-relaxed lg:leading-[30px] pb-8 sm:pb-12 lg:pb-20 text-center max-w-2xl ${montserrat.className}`}>
            {SLIDE_CONTENT.description}
        </p>

        <button className={`py-3 sm:py-4 lg:py-[22px] px-6 sm:px-8 lg:px-10 bg-[#C1032F] text-white text-sm sm:text-base leading-6 cursor-pointer hover:bg-[#a00227] transition-colors duration-300 ${montserrat.className}`}>
            {SLIDE_CONTENT.buttonText}
        </button>
    </div>
);

const Banner = () => {
    return (
        <section className="w-full">
            <Swiper {...SLIDER_CONFIG} className="mySwiper">
                <SwiperSlide>
                    <div className="background_one">
                        <SlideContent />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="background_two">
                        <SlideContent />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="background_three">
                        <SlideContent />
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Banner