import React from 'react'
import { Post } from '../../types/Post'

const PostItem: React.FC<Post> = ({ title, url, description }) => {
  return (
    <a href={url} className="block w-[1000px] mx-auto mb-12 mt-10 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover: cursor-pointer duration-300">
      <p className="text-[20px] text-left text-black mb-4">{title}</p>
      <div className="flex">
        <p className="truncate text-[14px] text-left text-black/[0.38]">{description}</p>
      </div>
      <div className="mt-4">
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
    </a>
  )
}

export default PostItem
