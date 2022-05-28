import React from 'react'
import iconKey from '../../Assets/img/Vector.png'
import iconClock from '../../Assets/img/fi_clock.png'
import iconDelete from '../../Assets/img/fi_trash-2.png'
import iconEdit from '../../Assets/img/fi_edit.png'

const Card = ({item}) => {
  const priceRP = new Intl.NumberFormat('id-ID', 
    { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })
    .format(item?.price);
  const dateFormat = new Intl.DateTimeFormat('en-GB', 
    { dateStyle: 'medium', timeStyle: 'short' })
    .format(new Date(item?.updatedAt))

  return(
    <div className=''>
      <img 
        className='img-cars-card' 
        src={item?.image} 
        alt={item?.name} 
      />
      <div className='flex flex-col gap-1 my-2'>
        <p className='font-title'>{item?.name} / {item?.category}</p>
        <p className='font-price'>{priceRP} / hari</p>
        <div className='flex flex-row gap-2'>
          <img className='icon-size' src={iconKey} alt='' />
          <span className='font-rent'>
            {item?.start_rent_at ? item?.start_rent_at : 'Start rent'} 
            {' '}-{' '}
            {item?.finish_rent_at ? item?.finish_rent_at : 'Finish rent'}
          </span>
        </div>
        <div className='flex flex-row gap-2'>
          <img className='icon-size' src={iconClock} alt='' />
          <span className='font-rent'>
            Update at{' '}
            {item?.updatedAt ? dateFormat : '-'} 
          </span>
        </div>
        <div className='flex flex-row justify-around px-2 mt-2 gap-2'>
          <button 
            className="
            bg-transparent hover:bg-red-500 text-emerald-600 font-semibold 
            hover:text-white py-2 px-4 border border-emerald-500 w-24
            hover:border-transparent rounded"
          >
             <span className='flex justify-center items-center gap-2'>
              <img className='icon-button' src={iconDelete} alt='' />
              <span>Delete</span>
            </span>
          </button>
          <button 
            className="
            bg-emerald-500 hover:bg-emerald-800 text-white font-semibold 
            hover:text-white py-2 px-4 border border-emerald-500 w-24
            hover:border-transparent rounded"
          >
             <span className='flex justify-center items-center gap-2'>
              <img className='icon-button' src={iconEdit} alt='' />
              <span>Edit</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card