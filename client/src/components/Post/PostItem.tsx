import React from 'react'
import { PostProps } from '../../types/PostProps'

const PostItem: React.FC<PostProps> = ({ title, icon, source }) => {
  return (
    <div className="w-[1000px] h-[41px] mx-auto mb-12 mt-10 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover: cursor-pointer duration-300">
      <p className="text-[20px] text-left text-black mb-4">{title}</p>
      <div className="flex w-[150px] h-[30px]">
        <img src={icon} className="w-[18px] h-[19px] object-cover mr-2" />
        <p className="text-[14px] text-left text-black/[0.38]">{source}</p>
      </div>
      <svg
        width={999}
        height={1}
        viewBox="0 0 481 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className=""
        preserveAspectRatio="none"
      >
        <line
          x1="0.997925"
          y1="0.500031"
          x2="480.002"
          y2="0.500031"
          stroke="#C4C4C4"
          stroke-opacity="0.5"
        />
      </svg>
    </div>
  )
}

export default PostItem
