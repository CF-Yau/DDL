import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

import './style.module.css'

const items = [
  {
    title:'Join the Fight!',
    img:'https://xboxdesignlab.xbox.com/media/wysiwyg/home/inspired-by/XDL_Sync-Slider-1084_239045_1600x720.jpg',
    thumb: 'https://xboxdesignlab.xbox.com/media/wysiwyg/home/inspired-by/XDL_Slider-Tile-0_239045_218x245_02.jpg',
    text:'Inspired by epic team battles. Jump into Overwatch 2 and play 35 unique heroes, in 6 distinct modes, across 22 global maps.',
  },
  {
    title: 'Break the timeloop in style.',
    img:'https://xboxdesignlab.xbox.com/media/wysiwyg/home/inspired-by/XDL_Sync-Slider-1084_211356_1600x720_02.jpg',
    thumb: 'https://xboxdesignlab.xbox.com/media/wysiwyg/home/inspired-by/XDL_Sync-Slider-Tile-0_211356_218x245_02.jpg',
    text:'Inspired by DEATHLOOP. 24 hours. 8 targets. 1 rival assassin.',
  },
  {
    title: 'Vault-Tec Presents:',
    img:'https://xboxdesignlab.xbox.com/media/wysiwyg/home/inspired-by/XDL_Sync-Slider-1084_3497241_1600x720_02.jpg',
    thumb: 'https://xboxdesignlab.xbox.com/media/wysiwyg/home/inspired-by/XDL_Sync-Slider-Tile-0_3497241_218x245_03.jpg',
    text:'Celebrate 25 years of deathclaws, Nuka-Cola, and surviving in the Wasteland with these Fallout-inspired designs.',
  },
  {
    title: 'Revenge solves everything',
    img: 'https://xboxdesignlab.xbox.com/media/wysiwyg/home/inspired-by/XDL_Sync-Slider-1084_222345_1600x720_02.jpg',
    thumb: 'https://xboxdesignlab.xbox.com/media/wysiwyg/home/inspired-by/XDL_Sync-Slider-Tile-0_222345_218x245_02.jpg',
    text:'However you choose to play - stealth, head-on - do it style with these designs inspired by Dishonored.',
  },
  {
    title: 'Inspired by the Horizon Festival',
    img: 'https://xboxdesignlab.xbox.com/media/wysiwyg/home/inspired-by/XDL_Sync-Slider-1084_687254_1600x720_02.jpg',
    thumb: 'https://xboxdesignlab.xbox.com/media/wysiwyg/home/inspired-by/XDL_Sync-Slider-Tile-0_687254_218x245_02.jpg',
    text:'Explore the vibrant and ever-evolving open world landscapes of Mexico with a design inspired by the Mercedes-AMG ONE.'
  }
]

const Hero = ( ) => {
  const [ swiperInstance,  setSwiperInstance] = useState();
  const [ activeIndex,  setActiveIndex] = useState(0);

  return (
   <div>
    <div >
    <div class="mx-auto max-w-screen-xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
    <div class="mx-auto max-w-xl text-center">
      <h2 class="text-4xl font-bold tracking-tight sm:text-5xl -mt-20 -mb-11" >
        Inspired by
      </h2>
      </div>
      </div>

      <div className='nike-container -mt-20'>
      <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          // spaceBetween={20}
          // slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false, // 不设置只会轮播一次
            pauseOnMouseEnter: true, // 鼠标移入暂停
          }}
          speed={300} // 是速度
          loop={true}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          onSlideChange={(swiper) => setActiveIndex((swiper.activeIndex -1)  %5)}
        >
          {items.map(item=>
            <SwiperSlide>
              <div className='w-full justify-center flex'>
                <img src={item.img} alt="" />
              </div>
              
            </SwiperSlide>)}
        
        </Swiper>
        {/* thumbs */}
        <section className="relative w-full flex z-10" style={{marginTop: "-120px"}}>
            <div className="flex mx-auto md:flex-nowrap bottom-11p p-12 w-11/12">
                {items.map((item, index)=> 
                        <div className="flex w-full" 
                            onClick={()=>{
                                swiperInstance.slideTo(index + 1)
                                setActiveIndex(index)
                            }}>
                            <img 
                                className={`object-cover object-center max-w-full ${activeIndex== index? 'border-4 border-black	border-solid	outline-4 outline-green-500 outline': ''}`} 
                                src={item.thumb} 
                                alt="blog" />
                        </div>
                    ) }
            </div>
        </section>
        {/* title text */}
        <h1 className='text-3xl text-center'>{items[activeIndex].title }</h1>
        <p className='text-center m-2.5'>{items[activeIndex].text}</p>
   </div>
   </div>
   </div>
  )
}

export default Hero