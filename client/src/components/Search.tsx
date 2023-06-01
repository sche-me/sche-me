import React from 'react'

const Search = () => {
  const searchTypeRef = React.useRef<HTMLSelectElement>(null)
  const searchInputRef = React.useRef<HTMLInputElement>(null)

  const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log(searchTypeRef.current && searchTypeRef.current.value)
    console.log(searchInputRef.current && searchInputRef.current.value)
  }

  return (
    <form className="flex flex-col md:flex-row gap-3 justify-center">
      <div className="flex">
        <select
          ref={searchTypeRef}
          name="searchType"
          className="w-[100px] mr-[10px] h-10 border-2 border-sky-600 focus:outline-none focus:border-sky-600 text-sky-600 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
        >
          <option value="All" defaultValue="">
            전체
          </option>
          <option value="Title">제목</option>
          <option value="Content">내용</option>
          <option value="Source">출처</option>
        </select>
        <div className="flex">
          <input
            type="text"
            ref={searchInputRef}
            placeholder="검색조건을 선택해주세요"
            className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-sky-600 focus:outline-none focus:border-sky-600"
          />
          <button
            type="submit"
            onClick={submitHandler}
            className="bg-sky-600 text-white rounded-r px-2 md:px-3 py-0 md:py-1"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  )
}

export default Search
