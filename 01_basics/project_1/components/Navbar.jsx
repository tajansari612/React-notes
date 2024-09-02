
// Initialization for ES Users
import { Collapse, initTWE, } from "tw-elements";

initTWE({ Collapse });
function Navbar() {
  return (
    <div className='w-screen h-auto'>
      <div id="navbar" className="bg-white text-black text-lg py-2 px-6 flex flex-row items-center justify-between">

        {/* brand name and logo */}
        <div id="brandNameLogo" className="flex flex-row items-center">
          <span id="logo">
            <img src="../public/gamingLogo.png" alt=""  width="48px"/>
          </span>
          <span id="brandName" className="-translate-x-4">Gaming Hub</span>
        </div>

        {/* links */}
        <div id="links" className="flex flex-row gap-6">
          <a className=" font-semibold text-[17px] hover:text-blue-700 hover:underline underline-offset-4 hover:ease-in-out" href="#home">Home</a>
          <a className=" font-semibold text-[17px] hover:text-blue-700 hover:underline underline-offset-4" href="#about">About</a>
          <a className=" font-semibold text-[17px] hover:text-blue-700 hover:underline underline-offset-4" href="#contact">Contact</a>
        </div>

        {/* search and buton */}
        <div id="searchAndbutton" className="text-[15px] flex flex-row gap-4">
          <input className="w-48 border-0 py-[1px] pl-4 rounded-md ring-1 ring-inset ring-blue-300 ring-offset-0 focus:outline-none  focus:ring-2 focus:ring-inset focus:ring-blue-400" placeholder="Quick Search" type="text" name="" id="" />
          <button className="bg-blue-400 text-white  pb-[2px] pt-[1px] px-4 rounded-md hover:bg-blue-300" type="button">Search</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar