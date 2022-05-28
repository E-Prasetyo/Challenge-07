import React from 'react';
import Loading from '../../Components/Loading'
import Card from './CardCar';

const CarsList = (props) => {
    const { tab, data, status } = props;
    let content;
    if(status === 'pending'){
        content = <Loading />;
    }else if ( status === 'success'){
      if(tab === 'all'){
          content = data?.map((value) => {
              return(
                <div key={value?.id}
                  className="
                    bg-white
                    flex flex-column 
                    border border-black bg-white
                    p-2"
                  >
                  <Card item={value}/>
                </div>
              )
          })
      }else{
        content = data?.filter((value)=> value.category === tab)?.map((value) => {
          return(
            <div key={value?.id}
              className="
                bg-white
                flex flex-column
                border border-black
                p-2"
              >
                <Card item={value}/>
            </div>
          )
      })
      }
      
    }
    else{
      content='data kosong'
    }

    // console.log('render')
  return (
    <>
      <div className='grid grid-cols-3 gap-4'>
        {content}
      </div>
    </>
  )
}

export default CarsList