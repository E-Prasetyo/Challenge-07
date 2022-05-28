import React from 'react';
import FB from '../../../Assets/img/icon_facebook.png'
import TWT from '../../../Assets/img/icon_twitter.png'
import TWH from '../../../Assets/img/icon_twitch.png'
import EM from '../../../Assets/img/icon_mail.png'
import IG from '../../../Assets/img/icon_instagram.png'
import Icon from '../../../Assets/img/Rectangle 74.png'

const Footer = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 px-10'>
        <div className='p-2 flex flex-col gap-3'>
            <p><small>Suroyo No. 161 Mayang Kota Probolinggo 672000</small></p>
            <p><small>binarcarrental@gmail.com</small></p>
            <p><small>081-233-334-808</small></p>
        </div>
        <div className='p-2 flex flex-col justify-center lg:items-center gap-3'>
            <p><small><b>Our service</b></small></p>
            <p><small><b>Why us</b></small></p>
            <p><small><b>Testimonial</b></small></p>
            <p><small><b>FAQ</b></small></p>
        </div>
        <div className='p-2 flex flex-col gap-3'>
            <p><small>Connect with us</small></p>
            <div className='flex fle-row gap-3'>
                <img src={FB} alt=""/>
                <img src={IG} alt=""/>
                <img src={TWT} alt=""/>
                <img src={EM} alt=""/>
                <img src={TWH} alt=""/>
            </div>
        </div>
        <div className='p-2 flex flex-col gap-3'>
            <p><small>Copyright Binar 2022</small></p>
            <img className='w-32' src={Icon} alt=""/>
        </div>
    </div>
  )
}

export default Footer