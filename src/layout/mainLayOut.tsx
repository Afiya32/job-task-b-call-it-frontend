import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import logo from "../assets/logo-black.webp"
import HoverPages from '../component/hoverPages';
import { RxCross1 } from "react-icons/rx";
const MainLayOut = () => {
  const [isSearch,setIsSearch]=useState(false)
  const handleSearch = () => {
    setIsSearch(!isSearch)
    
  }
  return (
    <div className="drawer">
    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col">
      {/* Navbar */}
      <div className="sticky top-0 z-10 navbar justify-center font-semibold items-center bg-white text-black w-full">
       
        <div className="mx-2 mt-2 flex-1 px-2"><img src={logo} alt="logo" /></div>
        <div className="hidden flex-none lg:block">
          <ul className="menu menu-horizontal flex items-center justify-center">
            {/* Navbar menu content here */}
            <li><a href='/'>
            <div className="dropdown dropdown-right dropdown-bottom  dropdown-hover">
  <div tabIndex={0} role="button" className=" m-1">HOME</div>
  <ul tabIndex={0} className="dropdown-content font-semibold text-2xl  menu bg-black text-white  z-[1] w-auto  p-2 shadow">
    <li>
      <div className='flex w-[520px] justify-evenly items-center'>
        <div>
          <li>Agency</li>
          <li><a href="/">Digital Marketing</a></li>
          <li><a href="/">Design Studio</a></li>
          <li><a href="/">Digital Agency</a></li>
          <li><a href="/">Creative Agency</a></li>
          <li><a href="/">Startup Agency</a></li>
          <li><a href="/">Modern Agency</a></li>
          <li><a href="/">Personal Portfolio</a></li>
        </div>
        <div>
        <li>Agency</li>
          <li><a href="/">Digital Marketing</a></li>
          <li><a href="/">Design Studio</a></li>
          <li><a href="/">Digital Agency</a></li>
          <li><a href="/">Creative Agency</a></li>
          <li><a href="/">Startup Agency</a></li>
          <li><a href="/">Modern Agency</a></li>
          <li><a href="/">Personal Portfolio</a></li>
        </div>
      </div>
    </li>
   
  </ul>
               </div></a></li>
            <li><a href='/'>ABOUT</a></li>
            <li><a href='/'>
            <div className="dropdown  dropdown-bottom  dropdown-hover">
  <div tabIndex={0} role="button" className=" m-1">PAGES</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100  z-[1] w-[860px] p-2 shadow">
    <HoverPages />
  </ul>
            </div></a></li>
            <li><a href='/'><div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className=" m-1">SERVICES</div>
  <ul tabIndex={0} className="dropdown-content menu bg-black text-white  z-[1] w-52 p-2 shadow">
    <li><a href='/'>Services</a></li>
    <li><a href='/'>Services Dark</a></li>
    <li><a href='/'>Services v2</a></li>
    <li><a href='/'>Services v2 Dark</a></li>
    <li><a href='/'>Services v3</a></li>
    <li><a href='/'>Services v3 Dark</a></li>
    
  </ul>
             </div></a></li>
            <li><a href='/'>
            <div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className=" m-1">TEAM</div>
  <ul tabIndex={0} className="dropdown-content menu bg-black text-white z-[1] w-52 p-2 shadow">
    <li><a href='/'>Team</a></li>
    <li><a href='/'>Team Details</a></li>
  </ul>
</div>
            </a></li>
            <li><a href='/'>
            <div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className=" m-1">BLOG</div>
  <ul tabIndex={0} className="dropdown-content menu bg-black text-white z-[1] w-52 p-2 shadow">
    <li><a href="/">Blogs</a></li>
    <li><a href="/">Blogs v2</a></li>
    <li><a href="/">Category</a></li>
    <li><a href="/">Blog Details</a></li>
  </ul>
</div></a></li>
            <li className='w-[460px]'><a href='/'>CONTACT</a></li>
            <li>
            <details className="dropdown dropdown-left dropdown-bottom">
  <summary onClick={handleSearch} className=" m-1">{isSearch?<RxCross1/>:<IoSearch/>}</summary>
  <ul className="menu dropdown-content bg-white text-white border-black z-[1] w-52 p-2 shadow">
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  </ul>
</details>
            </li>
          </ul>
        </div>
        <div className="flex-none ">
          <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-6 w-6 stroke-current">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </label>
        </div>
      </div>
      {/* Page content here */}
      <Outlet/>
    </div>
    <div className="drawer-side">
      <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
      <ul className="menu bg-base-200 min-h-full w-80 p-4">
        {/* Sidebar content here */}
        <li><a href='/'>Sidebar Item 1</a></li>
        <li><a href='/'>Sidebar Item 2</a></li>
      </ul>
    </div>
  </div>
  );
};

export default MainLayOut;