import React from 'react'

const Header = () => {
    return (
        <div className='header-comp'>
            <div className="subtitle w-full items-center justify-center flex h-16">
                <h3 className='text-3xl text-center h-full flex items-center justify-center opacity-70'> SCIENCE TECHNOLOGY SOCIETY </h3>
            </div>
            
            <div className="main-title w-full items-center justify-center flex h-auto lg:h-48">
                <h3 className='text-center h-full flex items-center justify-center'
                > THE TECHNOLOGY in SCIENCE WORLD </h3>
            </div>

            <div className="sx-header h-20">
                <div className="sx-1 h-full grid"> 
                    <h4 className='h-full flex items-center justify-center'> Vol. 1  </h4>
                    <h4 className='h-full flex items-center justify-center'> 1 / 20 / 2025 - 1 / 20 / 2027  </h4>
                </div>
            </div>

            <div className="tx-header flex items-center justify-evenly gap-5 h-auto">
                <div className="tx-1 flex items-center justify-center">
                    <h4 className='h-full flex items-center justify-center w-full'> LESSON 1 </h4>
                </div>
                <div className="tx-1 flex items-center justify-center">
                    <h4 className='h-full flex items-center justify-center w-full'> LESSON 2 </h4>
                </div>
                <div className="tx-1 flex items-center justify-center">
                    <h4 className='h-full flex items-center justify-center w-full'> LESSON 3 </h4>
                </div>
                <div className="tx-1 flex items-center justify-center">
                    <h4 className='h-full flex items-center justify-center w-full'> LESSON 4 </h4>
                </div>
                <div className="tx-1 flex items-center justify-center">
                    <h4 className='h-full flex items-center justify-center w-full'> LESSON 5 </h4>
                </div>
            </div>
            

        </div>
    )
}

export default Header