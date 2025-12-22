import React from 'react'

const Usercard = ({user}) => {
  return (
    <div className='w-full h-full p-0'>
    <div className='w-85.5 h-125 p-2 bg-black border rounded-3xl relative'>
        <div className='w-[330] h-35 bg-white p-10px rounded-3xl'>
            <img src={user.background} alt="" className='w-full h-full object-cover rounded-3xl outline-none' />
        </div>
        <div className='w-25 h-25 bg-red-400 rounded-[50%] absolute left-29 top-30'>
            <img src={user.avatar} alt="" className='w-full h-full object-cover rounded-[50%] outline-none'/>
        </div>
        <div className='text-center mt-[35%] px-6 '>
            <h2 className='text-xl font-semibold text-white'>{user.name}</h2>
            <p className='text-sm text-gray-400 mt-5'>{user.bio}</p>
        </div>

        <div className="mt-6 px-6">
        <div className="bg-gray-50 rounded-2xl py-4 flex justify-between text-center">
          
          <div className="flex-1">
            <p className="text-lg font-semibold text-gray-800">{user.likes}</p>
            <p className="text-xs text-gray-500">Likes</p>
          </div>

          <div className="flex-1 border-x">
            <p className="text-lg font-semibold text-gray-800">{user.posts}</p>
            <p className="text-xs text-gray-500">Posts</p>
          </div>

          <div className="flex-1">
            <p className="text-lg font-semibold text-gray-800">{user.views}</p>
            <p className="text-xs text-gray-500">Views</p>
          </div>

        </div>
      </div>

      <div className="flex justify-center gap-6 py-5 text-gray-600">
        <span className="cursor-pointer text-white hover:text-black"><i class="ri-instagram-line"></i></span>
        <span className="cursor-pointer text-white hover:text-black"><i class="ri-twitter-x-line"></i></span>
        <span className="cursor-pointer text-white hover:text-black"><i class="ri-at-line"></i></span>
      </div>

    </div>
    </div>
  )
}

export default Usercard
