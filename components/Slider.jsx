import React, { useState, useEffect } from "react";

import { Autoplay, Pagination, Navigation ,Thumbs} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import './style.module.css'
import "swiper/css/thumbs";

export default function Slider() {
  // var mySwiper = new Swiper(".swiper-container", {
  //     effect: "",
  //     loop: false,
  //     speed: 800,
  //     navigation: {
  //        nextEl: ".swiper-button-next",
  //        prevEl: ".swiper-button-prev"
  //     },
  //     pagination: {
  //        el: ".swiper-pagination",
  //        type: "bullets",
  //        clickable: "true"
  //     }
  //  });

  //   //transitions
  //   var btnNext = document.querySelector(".swiper-button-next"),
  //       btnPrev = document.querySelector(".swiper-button-prev"),
  //       sliderText = document.querySelectorAll(".slide-text"),
  //       sliderNumber = document.querySelectorAll(".swiper-slide .number");

  //        btnNext.addEventListener("click", transitionSlideNext);
  //        btnPrev.addEventListener("click", transitionSlidePrev);

  //   function transitionSlideNext() {
  //      var slideActiveText = document.querySelector(".swiper-slide-active .slide-text"),
  //          slidePrevText = document.querySelector(".swiper-slide-prev .slide-text");

  //      slidePrevText.classList.remove("playText");
  //      slideActiveText.classList.add("playText");
  //   }

  //   function transitionSlidePrev() {
  //      var slideActiveText = document.querySelector(".swiper-slide-active .slide-text"),
  //          slideNextText = document.querySelector(".swiper-slide-next .slide-text");

  //      slideNextText.classList.remove("playText");
  //      slideActiveText.classList.add("playText");
  //   }

  return (
    <>
      <div className="swiper-container">
        
        <div className="swiper-wrapper">
        <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            // spaceBetween={20}
            // slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false, // 不设置只会轮播一次
              pauseOnMouseEnter: true // 鼠标移入暂停
            }}
            speed={300} // 是速度
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
            }}
            pagination={{
              el: ".swiper-pagination",
              type: "bullets",
              clickable: "true"
            }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="mySwiper"
          >
           (
            <SwiperSlide>
              <div className="swiper-slide" style={{ backgroundColor: "red" }}>
                <div
                  className="swiper-item"
                  style={{ backgroundImage: "url(/bg-1.jpg)" }}
                >
                   <div className="slider-call">
        <p className="font-bold text-sm uppercase text-white mb-5">AVAVCODO</p>
        <p className="text-6xl font-bold text-white mb-10">Desktop Design Lab</p>
        <p className="text-3xl mb-20 leading-none text-white">Everything Without Limits</p>
        <a href="#" class="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Design yourself</a>
        </div>
                </div>
                 
                
                <span className="number">01</span>
                <div
                  className="slide-text"
                  style={{ backgroundColor: "#d92c30" }}
                >
                  
                  <h1>Fashion Trends 2021</h1>
                  <p>Clothing stores Limited</p>
                  <button className="btn">Buy</button>
                </div>
              </div>
              </SwiperSlide>
             
              <SwiperSlide>
              <div
                className="swiper-slide"
                style={{ backgroundColor: "#f89f07" }}
              >
                <div
                  className="swiper-item"
                  style={{ backgroundImage: "url(/bg-2.jpg)"}}
                >
                  <div className="slider-call">
        <p className="font-bold text-sm uppercase text-white mb-5">AVAVCODO</p>
        <p className="text-6xl font-bold text-white mb-10">Desktop Design Lab</p>
        <p className="text-3xl mb-20 leading-none text-white">Everything Without Limits</p>
        <a href="#" class="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Design yourself</a>
        </div>
                </div>
                <span className="number">02</span>
                <div
                  className="slide-text"
                  style={{ backgroundColor: "#f89f07" }}
                >
                  <h1>Spring Summer 2021</h1>
                  <p>Clothing stores Limited</p>
                  <button className="btn">Buy</button>
                </div>
              </div>
              </SwiperSlide>
             
              <SwiperSlide>
              <div
                className="swiper-slide"
                style={{ backgroundColor: "#000000" }}
              >
                <div
                  className="swiper-item"
                  style={{ backgroundImage: "url(/bg-3.jpg)"}}
                >
                  <div className="slider-call">
        <p className="font-bold text-sm uppercase text-white mb-5">AVAVCODO</p>
        <p className="text-6xl font-bold text-white mb-10">Desktop Design Lab</p>
        <p className="text-3xl mb-20 leading-none text-white">Everything Without Limits</p>
        <a href="#" class="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Design yourself</a>
        </div>
                </div>

                <span className="number">03</span>
                <div
                  className="slide-text"
                  style={{ backgroundColor: "#000000" }}
                >
                  <h1>Wake to fresh Breath</h1>
                  <p>Summer Sales</p>
                  <button className="btn">Buy</button>
                </div>
              </div>
              </SwiperSlide>

              <SwiperSlide>
              <div
                className="swiper-slide"
                style={{ backgroundColor: "#f7b0b8" }}
              >
                <div
                  className="swiper-item"
                  style={{ backgroundImage: "url(/bg-4.jpg)" }}
                >
                  <div className="slider-call">
        <p className="font-bold text-sm uppercase text-white mb-5">AVAVCODO</p>
        <p className="text-6xl font-bold text-white mb-10">Desktop Design Lab</p>
        <p className="text-3xl mb-20 leading-none text-white">Everything Without Limits</p>
        <a href="#" class="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Design yourself</a>
        </div>
                </div>
                <span className="number">04</span>
                <div
                  className="slide-text"
                  style={{ backgroundColor: "#f7b0b8" }}
                >
                  <h1>Look Beautiful</h1>
                  <p>Cosmetics Stores</p>
                  <button className="btn">Buy</button>
                </div>
              </div>
              </SwiperSlide>

              <SwiperSlide>
              <div
                className="swiper-slide"
                style={{ backgroundColor: "#25a1b6" }}
              >
                <div
                  className="swiper-item"
                  style={{ backgroundImage: "url(/bg-5.jpg)" }}
                >
                  <div className="slider-call">
        <p className="font-bold text-sm uppercase text-white mb-5">AVAVCODO</p>
        <p className="text-6xl font-bold text-white mb-10">Desktop Design Lab</p>
        <p className="text-3xl mb-20 leading-none text-white">Everything Without Limits</p>
        <a href="#" class="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Design yourself</a>
        </div>
                </div>
                <span className="number">05</span>
                <div
                  className="slide-text"
                  style={{ backgroundColor: "#25a1b6" }}
                >
                  <h1>Travel Diary 2021</h1>
                  <p>Pre Booking Now</p>
                  <button className="btn">Book</button>
                </div>
              </div>
            </SwiperSlide>
            )
          </Swiper>
        </div>

        <div className="swiper-pagination"></div>

        <div className="swiper-arrows">
          <div className="swiper-button-prev">
            <span></span>
          </div>
          <div className="swiper-button-next">
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
}
