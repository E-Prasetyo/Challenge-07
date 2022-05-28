import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'

const data = [
    {
        title: 'Apa saja syarat yang dibutuhkan',
        content: 'Placeholder content for this accordion'
    },
    {
        title: 'Berapa hari minimal sewa mobil lepas kunci ?',
        content: 'Placeholder content for this accordion'
    },
    {
        title: 'Berapa hari sebelumnya sebaiknya booking sewa mobil ?',
        content: 'Placeholder content for this accordion'
    },
    {
        title: 'Apakah Ada biaya antar-jemput ?',
        content: 'Placeholder content for this accordion'
    },
    
]

const FQA = () => {
  return (
    <div className='grid grid-cols-2 m-10'>
        <div className=''>
            <div className='text-2xl font-bold pb-5'>
                Frequently Asked Question
            </div>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </div>
        </div>
        <div className=''>
            {data.map((value, index) => <Accordion item={value} key={index}/>)}
        </div>
    </div>
  )
}

export default FQA


const Accordion = ({item}) =>{
    const {title, content} = item;
    const [open, setOpen] = useState(true);

    const handleOpen = () => {
        setOpen(!open);
    }
      return (
        <div className='mb-2 border-2 rounded'>
             <div 
                className={`
                    flex flex-row justify-between w-full p-2 text-start 
                    ${open ? '' : 'border-b-2 bg-cyan-200 border-2'}
                    cursor-pointer
                `}
                onClick={() => handleOpen()}
            >
                <span>{title}</span>
                <span className='w-5'>
                    {open ? <ChevronUpIcon/>: <ChevronDownIcon/>}
                </span>
            </div>
            <div className={`${open ? 'hidden': ''} p-2 text-sm`}>
                {content}
            </div>
        </div>
      )
}