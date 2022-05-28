import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Loading, NavbarUser } from '../../Components';
import Header from './LandingPage/Header';
import iconUser from '../../Assets/img/fi_users.png'
import ServiceDetailItem from './ServiceDetailComponent';
import { useDispatch, useSelector } from 'react-redux';
import { selectStatus } from '../../Redux/slice/carsSlice';
import { getCarById } from '../../Redux/action/carsAction';

const ServiceDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const status = useSelector(selectStatus)
    
    useEffect(() => {
      dispatch(getCarById(id));
    //   return () => {
    //     second
    //   }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    const handlePayment = () =>{
        return navigate('/service/car/payment')
    }
  return (
    <>
        {status === 'pending' && <Loading />}
        <NavbarUser  tag="Our Service" />
        <Header/>
        <div className='-translate-y-5 flex flex-col justify-center items-center'>
            <form>
                 <div className='grid grid-cols-5 rounded-lg bg-white shadow-lg'>
                    <div className='flex flex-col justify-center p-2 gap-1'>
                        <label htmlFor='type_driver' className='text-sm'>
                            Type Driver
                        </label>
                        <select
                            className='border-2 rounded text-gray-400 bg-gray-300'
                            disabled
                            value=''
                        >
                            <option value="" disabled>Open this select menu</option>
                            <option value="true">Dengan Supir</option>
                            <option value="false" className="text-red-800 bg-red-300">
                                Tanpa Supir  (Lepas Kunci)
                            </option>
                        </select>
                    </div>
                    <div className='flex flex-col justify-center p-2 gap-1'>
                        <label htmlFor='date' className='text-sm'>
                            Date
                        </label>
                        <input 
                            className='border-2 rounded text-gray-400 bg-gray-300'
                            id='date'
                            type='date'
                            disabled 
                        />
                    </div>
                    <div className='flex flex-col justify-center p-2 gap-1'>
                        <label htmlFor='time' className='text-sm'>
                            Waktu Jemput/Ambil
                        </label>
                            <input 
                                className='border-2 rounded text-gray-400 bg-gray-300'
                                id='timer'
                                type='time'
                                disabled
                            />
                    </div>
                    <div className='flex flex-col justify-center p-2 gap-1'>
                        <label htmlFor='capacity' className='text-sm'>
                            Capacity
                        </label>
                        <div className='flex flex-row border-2 rounded'>
                            <input 
                                className='text-gray-400 bg-gray-300'
                                id='capacity'
                                type='text'
                                disabled 
                            />
                            <span className='bg-white bg-gray-300'>
                                <img fill='black' src={iconUser} alt='' />
                            </span>
                        </div>
                    </div>
                    <div className='flex justify-center p-3 gap-1'>
                        {/* <button type='submit' className='bg-emerald-500 border-2 px-4 rounded-lg'>
                            Cari Mobil
                        </button>  */}
                    </div>
                </div>
            </form>
        </div>
        <div className='px-10 py-5'>
            <ServiceDetailItem handlePayment={handlePayment} />
        </div>
    </>
  )
}

export default ServiceDetail