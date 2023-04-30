import logo from '../assets/logo.png'

const Header = () => {
  return (
    <div className="header">
      <nav className="bg-white py-2 md:py-4">
        <div className="container px-4 mx-auto md:flex md:items-center">
          <div className="flex justify-between items-center">
            <a href="">
              <img src={logo} className="w-40"></img>
            </a>
            {/* <a href="#" className="font-bold text-xl text-zinc-500">
              COLECTO
            </a> */}
            <button
              className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
              id="navbar-toggle"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
            id="navbar-collapse"
          >
            <a href="#" className="p-2 lg:px-4 md:mx-2 text-white rounded bg-sky-600">
              임시메뉴1
            </a>
            <a
              href="#"
              className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              임시메뉴2
            </a>
          </div>
          <div
            className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
            id="navbar-collapse"
          >
            <a
              href="#"
              className="p-2 lg:px-4 md:mx-2 text-sky-600 text-center border border-transparent rounded hover:bg-sky-100 hover:text-sky-700 transition-colors duration-300"
            >
              Login
            </a>
            <a
              href="#"
              className="p-2 lg:px-4 md:mx-2 text-sky-600 text-center border border-solid border-sky-600 rounded hover:bg-sky-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
            >
              Signup
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
