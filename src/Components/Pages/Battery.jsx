import React from 'react';

const Battery = (props) => {
  return (
    <>
         <div className='max-w-lg lg:w-96 mr-6 w-64'>
            <div className="bg-white w-full h-24 rounded-xl flex items-center justify-between mb-6">
              <div className="bg-blue-500 w-16 h-16 ml-4 rounded-lg flex items-center justify-center">
                    {props.icon}
              </div>
              <div className="mb-4 text-right mr-4">
                <p className="text-heading">{props.name}</p>
                <p className="font-bold text-xl">{props.number}</p>
              </div>
            </div>
        </div> 
    </>
  )
}

export default Battery