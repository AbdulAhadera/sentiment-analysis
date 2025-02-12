import { FaBars } from "react-icons/fa";

function Navbar() {

  return (
    <nav className="w-full  flex justify-around py-1 px-2 md:px-20 shadow-3xl">
      <div className="w-1/2">
        <h1 className="text-roboto-black text-xl">Logo</h1>
      </div>

      <div className="w-1/2">
       
            <ul className="visible md:hidden flex justify-end py-1 cursor-pointer">
              <FaBars size={20}/>
            </ul>

            <ul className="hidden md:flex justify-evenly text-lg cursor-pointer">
              <li className="">Home</li>
              <li className="">Reports</li>
              <li className="">Profile</li>
              <li className="">Support</li>
            </ul>
        
      </div>

    </nav>
  )
}

export default Navbar