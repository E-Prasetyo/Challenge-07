import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline'

const Accordion = () =>{
    const [open, setOpen] = useState(true);

    const handleOpen = () => {
        setOpen(!open);
    }
      return (
        <div className='mb-2 rounded'>
             <div 
                className={`
                    flex flex-row justify-between w-full p-2 text-start 
                    ${open ? '' : ''}
                    cursor-pointer
                `}
                onClick={() => handleOpen()}
            >
                <span className='font-bold text-lg'>
                    Refund, Reschedule, Overtime
                </span>
                <span className='w-5'>
                    {open ? <ChevronDownIcon/> : <ChevronUpIcon/> }
                </span>
            </div>
            <div className={`${open ? 'hidden': ''} px-6 text-gray-500`}>
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                <li>Tidak termasuk akomodasi penginapan</li>
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                <li>Tidak termasuk akomodasi penginapan</li>
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                <li>Tidak termasuk akomodasi penginapan</li>
            </div>
        </div>
      )
}
export default Accordion