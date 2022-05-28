import React from 'react'
import iconOne from '../../../Assets/img/icon_complete.png'
import iconTwo from '../../../Assets/img/icon_price.png'
import iconThree from '../../../Assets/img/icon_24hrs.png'
import iconFour from '../../../Assets/img/icon_professional.png'

const WhyUs = () => {
  return (
      <>
        <div className='py-5 px-8'>
            <div className='text-2xl font-bold'>Why Us ?</div>
            <div>Mengapa harus pilih Binar Car Rental ?</div>
        </div>
        <div className='py-5 px-8 flex flex-row'>
            <div className='w-full p-2'>
                <div className='border-2 p-2 min-h-56 flex flex-col gap-3'>
                    <img className='w-14' src={iconOne} alt=''/>
                    <div className='font-bold'>Mobil Lengkap</div>
                    <p>
                        Tersedia banyak pilihan mobil, kondisi masih baru, 
                        bersih dan terawat
                    </p>
                </div>
            </div>
            <div className='w-full p-2'>
                <div className='border-2 p-2 min-h-56 flex flex-col gap-3'>
                    <img className='w-14' src={iconTwo} alt=''/>
                    <div className='font-bold'>Harga Murah</div>
                    <p>
                        Harga murah dan bersaing, bisa bandingkan 
                        dengan rental mobil lain
                    </p>
                </div>
            </div>
            <div className='w-full p-2'>
                <div className='border-2 p-2 min-h-56 flex flex-col gap-3'>
                    <img className='w-14' src={iconThree} alt=''/>
                    <div className='font-bold'>Layanan 24 Jam</div>
                    <p>
                        Siap Melayani kebutuhan Anda selama 24 jam nonstop.
                        Kami juga tersedia di akhir minggu
                    </p>
                </div>
            </div>
            <div className='w-full p-2'>
                <div className='border-2 p-2 min-h-56 flex flex-col gap-3 rounded'>
                    <img className='w-14' src={iconFour} alt=''/>
                    <div className='font-bold'>Sopir Profesional</div>
                    <p>
                        Sopir yang profesional, berpengalaman, jujur, 
                        ramah dan selalu tepat waktu
                    </p>
                </div>
            </div>
        </div>
      </>
  )
}

export default WhyUs