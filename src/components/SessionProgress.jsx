import React from 'react'

const SessionProgress = () => {
  return (
    <div className='flex flex-col gap-4 w-full'>
      <div className='flex justify-between px-2 py-2'>
        <p className='text-[#423B35]'>Today's focus sessions</p>
        <span className='text-[#6F8068]'>0 of 4</span>
      </div>
      <div className='flex gap-2 px-2'>
        <div className='bg-[#E7EDE3] h-2 flex-1 rounded-full'></div>
        <div className='bg-[#E7EDE3] h-2 flex-1 rounded-full'></div>
        <div className='bg-[#E7EDE3] h-2 flex-1 rounded-full'></div>
        <div className='bg-[#E7EDE3] h-2 flex-1 rounded-full'></div>
      </div>
    </div>
  )
}

export default SessionProgress
