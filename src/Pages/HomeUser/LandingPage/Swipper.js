import React, { useRef} from 'react';
import one from '../../../Assets/img/img_photo (1).png';
import two from '../../../Assets/img/img_photo.png';
import star from '../../../Assets/img/Rate.png';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const MySwiper = () => {
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  return (
    <Swiper
        modules={[Navigation, Pagination]}
        // pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={3}
        navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
        }}
        loop={true}
        onSwiper={(swiper) => {
        // Delay execution for the refs to be defined
        setTimeout(() => {
          // Override prevEl & nextEl now that refs are defined
          swiper.params.navigation.prevEl = navigationPrevRef.current
          swiper.params.navigation.nextEl = navigationNextRef.current

          // Re-init navigation
          swiper.navigation.destroy()
          swiper.navigation.init()
          swiper.navigation.update()
        })
      }}
    >
        <SwiperSlide>
          <div className='
            m-2 p-2 border-2 flex flex-row justify-center 
            items-center gap-2 bg-cyan-200'>
            <img className='w-28 h-32' src={one} alt='' />
            <div className='w-56'>
              <img src={star} alt=''/>
              <p className='text-swiper'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Enim velit ullam commodi molestias perspiciatis voluptate 
                tenetur esse rerum laboriosam, animi labore minima 
                delectus obcaecati possimus officiis, repellendus
                maiores placeat recusandae?
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='
            m-2 p-2 border-2 flex flex-row justify-center 
            items-center gap-2 bg-cyan-200'>
            <img className='w-28 h-32' src={two} alt='' />
            <div className='w-56'>
              <img src={star} alt=''/>
              <p className='text-swiper'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Enim velit ullam commodi molestias perspiciatis voluptate 
                tenetur esse rerum laboriosam, animi labore minima 
                delectus obcaecati possimus officiis, repellendus
                maiores placeat recusandae?
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='
            m-2 p-2 border-2 flex flex-row justify-center 
            items-center gap-2 bg-cyan-200'>
            <img className='w-28 h-32' src={one} alt='' />
            <div className='w-56'>
              <img src={star} alt=''/>
              <p className='text-swiper'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Enim velit ullam commodi molestias perspiciatis voluptate 
                tenetur esse rerum laboriosam, animi labore minima 
                delectus obcaecati possimus officiis, repellendus
                maiores placeat recusandae?
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='
            m-2 p-2 border-2 flex flex-row justify-center 
            items-center gap-2 bg-cyan-200'>
            <img className='w-28 h-32' src={two} alt='' />
            <div className='w-56'>
              <img src={star} alt=''/>
              <p className='text-swiper'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Enim velit ullam commodi molestias perspiciatis voluptate 
                tenetur esse rerum laboriosam, animi labore minima 
                delectus obcaecati possimus officiis, repellendus
                maiores placeat recusandae?
              </p>
            </div>
          </div>
        </SwiperSlide>
          <div className='flex flex-row justify-center m-2 gap-5'>
              <div 
                className="
                  px-4 py-2 rounded-full border-2 border-gray-500
                  hover:bg-emerald-500 hover:border-white hover:text-white"
                ref={navigationPrevRef} 
              >
                {'<'}
              </div>
              <div 
                className="
                  px-4 py-2 rounded-full border-2 border-gray-500
                  hover:bg-emerald-500 hover:border-white hover:text-white"
                ref={navigationNextRef}
              >
                {'>'}
              </div>
          </div>
    </Swiper>
  )
}

export default MySwiper