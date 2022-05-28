import React, { useEffect } from 'react'
import { NavbarUser } from '../../Components'
import { useForm, Controller } from 'react-hook-form'
import Header from './LandingPage/Header'
import { useDispatch, useSelector } from 'react-redux'
import { 
    carsActions, selectSearch, selectShowSearch 
} from '../../Redux/slice/carsSlice'
import {
    getAllCars
} from '../../Redux/action/carsAction'
import iconUser from '../../Assets/img/fi_users.png'
import CardList from './ServiceCarComponent'

const ServiceCars = () => {
    const { register, control, handleSubmit } = useForm();
    const search = useSelector(selectSearch);
    const show = useSelector(selectShowSearch);
    const dispatch = useDispatch();

    const onSubmit = (value) =>{

        try {
             dispatch(carsActions.setSearch(value.type_driver));
             dispatch(carsActions.setShowSearch());
        } catch (error) {
            console.log(error.message)
        }
       
    }

    useEffect(() => {
        dispatch(getAllCars());
    
    //   return () => {
    //     second
    //   }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    let content;
    if(show){
        content = <CardList />
    }else{
        content = ''
    }
    
  return (
    <>
        <NavbarUser tag="Our Service" />
        <Header/>
        <div className='-translate-y-5 flex flex-col justify-center items-center'>
            <form onSubmit={handleSubmit(onSubmit)}>
                 <div className='grid grid-cols-5 rounded-lg bg-white shadow-lg'>
                    <div className='flex flex-col justify-center p-2 gap-1'>
                        <label htmlFor='type_driver' className='text-sm'>
                            Type Driver
                        </label>
                        <Controller
                            control={control} 
                            name="type_driver"                                           
                            defaultValue={search||""}                                                                        
                            render={({ field: { onChange, value, ref }}) => (
                                <select
                                    onChange={onChange}
                                    // name="type_driver"
                                    className='border-2 rounded'
                                    ref={ref}
                                    value={value}
                                    required
                                >
                                    <option value="" disabled>Open this select menu</option>
                                    <option value="true">Dengan Supir</option>
                                    <option value="false" className="text-red-800 bg-red-300">
                                        Tanpa Supir  (Lepas Kunci)
                                    </option>
                                </select>
                            )}
                            />
                    </div>
                    <div className='flex flex-col justify-center p-2 gap-1'>
                        <label htmlFor='date' className='text-sm'>
                            Date
                        </label>
                        <input 
                            className='border-2 rounded'
                            id='date'
                            type='date' 
                            {...register('date')}
                        />
                    </div>
                    <div className='flex flex-col justify-center p-2 gap-1'>
                        <label htmlFor='time' className='text-sm'>
                            Waktu Jemput/Ambil
                        </label>
                            <input 
                                className='border-2 rounded'
                                id='timer'
                                type='time' 
                                {...register('time')}
                            />
                    </div>
                    <div className='flex flex-col justify-center p-2 gap-1'>
                        <label htmlFor='capacity' className='text-sm'>
                            Capacity
                        </label>
                        <div className='flex flex-row border-2 rounded'>
                            <input 
                                id='capacity'
                                type='text' 
                                {...register('capacity')}
                            />
                            <span className='bg-white'>
                                <img fill='black' src={iconUser} alt='' />
                            </span>
                        </div>
                    </div>
                    <div className='flex justify-center p-3 gap-1'>
                        <button type='submit' className='bg-emerald-500 border-2 px-4 rounded-lg'>
                            Cari Mobil
                        </button> 
                    </div>
                </div>
            </form>
        </div>
        <div className='flex flex-col px-10'>
            {content}
        </div>
    </>
  )
}

export default ServiceCars