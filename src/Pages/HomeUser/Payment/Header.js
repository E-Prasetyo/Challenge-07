import { 
  ArrowNarrowLeftIcon, CheckCircleIcon, MinusIcon
} from '@heroicons/react/outline'
import React from 'react'

const Header = () => {
  return (
    <div className="bg-cyan-100 p-10">
        <div className='flex flex-row'>
          <div className='w-full flex flex-row gap-2'>
            <div className='w-5'><ArrowNarrowLeftIcon /></div>
            <div className=''>
              <p className='font-bold text-sm'>Tiket</p>
              <p className='text-sm'>Order ID : xxxx</p>
            </div>
          </div>
          <div className='w-full'>
            <div className='flex flex-row justify-end items-center gap-3'>
              <div className='flex flex-row gap-1'>
                <CheckCircleIcon fill='blue' className='w-6' />
                <p className='text-sm'>Pilih Metode</p>
              </div>
              <MinusIcon className='w-8' />
              <div className='flex flex-row gap-1'>
                <CheckCircleIcon fill='blue' className='w-6' />
                <p className='text-sm'>Bayar</p>
              </div>
              <MinusIcon className='w-8' />
              <div className='flex flex-row gap-1'>
                <CheckCircleIcon fill='blue' className='w-6' />
                <p className='text-sm'>Tiket</p>
              </div>
            </div>
            <div className=''></div>
          </div>
        </div>
    </div>
  )
}

export default Header