import React from 'react';
import imgService from '../../../Assets/img/img_service.png'
import iconList from '../../../Assets/img/Group 53.png'

const ServiceUp = () => {
  return (
    <div className='grid lg:grid-cols-2 my-5'>
    <div className='container p-2 flex justify-end'>
      <img className='' src={imgService} alt='' />
    </div>
    <div className='p-2 flex flex-col gap-5'>
      <div className='text-3xl font-bold'>
        Best Car Rental for any kind of trip in (Lokasimu)!
      </div>
      <div className='mb-5'>
        Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga 
        lebih murah dibandingkan yang lain kondisi baru, serta kualitas 
        pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, dll.
      </div>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-row gap-5'>
          <img src={iconList} alt='' />
          <span>Sewa Mobil Dengan Supir di Bali 12 Jam</span>
        </div>
        <div className='flex flex-row gap-5'>
          <img src={iconList} alt='' />
          <span>Sewa Mobil Lepas Kunci di Bali 24 Jam</span>
        </div>
        <div className='flex flex-row gap-5'>
          <img src={iconList} alt='' />
          <span>Sewa Mobil Jangka Panjang Bulanan</span>
        </div>
        <div className='flex flex-row gap-5'>
          <img src={iconList} alt='' />
          <span>Gratis Antar - Jemput Mobil di Bandara</span>
        </div>
        <div className='flex flex-row gap-5'>
          <img src={iconList} alt='' />
          <span>Layanan Airport Transfer / Drop In Out</span>
        </div>
      </div>
    </div>
  </div>
  )
}
const ServiceDown = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center my-5'>
        <div className='container bg-blue-800 text-center p-10 text-white rounded-lg'>
            <div className='text-3xl font-bold'>
                Sewa Mobil di (Lokasimu) Sekarang
            </div>
            <div className='my-10 mx-32'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                sed do elusmod tempor incididunt ul labore et dolore 
                magna aliqua
            </div>
            <div>
                <button className='group bg-emerald-500 rounded-md p-2 text-white hover:bg-emerald-800'>
                  <span className='text-sm group-hover:text-gray-300'>Mulai Sewa Mobil</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export {
  ServiceUp, ServiceDown
}