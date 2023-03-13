import React from 'react'
import { RiChatSmile3Fill } from 'react-icons/ri'
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Sidebar = () => {
  return (
    <div className='flex flex-col md:w-[220px] pt-6 md:border-r md:border-gray-500 bg-input'>
        <div className="sm:mx-auto mx-auto sm:w-full md:h-full md:w-[220px]">
          <div className="m-auto bg-green p-3 rounded-full w-[75px] shadow-xl">
            <RiChatSmile3Fill size={50} className="text-headerText m-auto" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-headerText">
            Shack Chat
          </h2>
          <p className='my-1 m-auto md:px-0 text-center italic font-light text-slate-300 text-sm'>Like Discord, but worse</p>
          <div className='social-icon-container flex flex-row gap-4 justify-center my-1 text-green'>
            <AiFillInstagram size={30} className='hover:shadow-xl hover:scale-110 cursor-pointer' />
            <AiFillGithub size={30} className='hover:shadow-xl hover:scale-110 cursor-pointer' />
            <AiFillLinkedin size={30} className='hover:shadow-xl hover:scale-110 cursor-pointer' />
          </div>
        </div>
        {/* <div>Sign out</div> */}
    </div>
  )
}

export default Sidebar 