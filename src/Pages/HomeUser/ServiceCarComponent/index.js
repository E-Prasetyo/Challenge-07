import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectCars, selectSearch } from '../../../Redux/slice/carsSlice'
import Card from './Card'

const CardCars = () => {
    const data = useSelector(selectCars);
    const search = useSelector(selectSearch);
    const isTrueSet = (search === 'true') ? true : false

    let content
    if(search){
        content = data?.filter((value) => value.status === isTrueSet )?.map((item, i)=> <Card item={item} key={i} />)
    }else{
        content = data?.map((item, i)=> <Card item={item} key={i} />)
    }
   
    useEffect(() => {
    }, [search])
    

  return (
    <div className='grid grid-cols-3 gap-10'>
        {content.length < 1 ? <p className='col-span-3 text-center'>Data Tidak ditemukan</p> : content}
    </div>
  )
}

export default CardCars