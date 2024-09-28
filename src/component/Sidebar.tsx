import { BsPerson, BsPersonGear } from "react-icons/bs";
import { logo } from "../assets/images"
import { HiOutlineHome } from "react-icons/hi";
import { MdOutlineReport } from "react-icons/md";
import { TbSettings } from "react-icons/tb";
import { BiHelpCircle, BiShapeSquare } from "react-icons/bi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";

const Sidebar = () => {

    const [collapse, setCollapse] =useState(false)

    const handleCollapse = () => {
        setCollapse(!collapse)
    }

  return (
    <div className={`bg-[#434BB4] px-5 items-center text-white flex flex-col h-screen rounded-tr-md rounded-br-md duration-500 ${collapse ? 'w-[82px] ':'w-[216px] '}`}>
        {/* Logo */}
        <div className="flex flex-col items-center ">
            <div className={`w-[175px] h-[117px] text-white overflow-hidden ${collapse ? '':'fixed'}`}>
                <img className="w-full h-full object-cover" src={logo} alt="" />
            </div>
            <p className={`font-semibold mt-24 mb-10  text-xl ${collapse ? 'hidden':'top-[-490px]'}`}>MyPersona</p>
        </div>

        {/* FEATURES */}
        <div className={`font-bold text-xl mb-12 flex items-center space-x-2 `}>
                {/* Icon */}
                <BiShapeSquare size={30} />
                <h1 className={`${collapse ? 'hidden':'top-[-490px]'}`}>FEATURES</h1>
                {/* Toggle Icon */}
                <div onClick={handleCollapse}>
                    {collapse ? <MdKeyboardArrowRight size={28}/> : <MdKeyboardArrowLeft size={28}/>}
                </div>
            </div>

            {/*Nav List Link */}
            <ul className="text-xl font-medium space-y-8">
                <li className="flex hover:text-gray-200 items-center gap-5">
                    <a href="/"><HiOutlineHome  size={30}/></a>
                    <a href="/" className={`${collapse ? 'hidden':'top-[-490px]'}`}>Home</a>
                </li>
                <li className="flex hover:text-gray-200 items-center gap-5">
                    <a href="/profile"><BsPerson  size={30}/></a>
                    <a href="/profile" className={`${collapse ? 'hidden':'top-[-490px]'}`}>Profile</a>
                </li>
                <li className="flex hover:text-gray-200 items-center gap-5">
                    <a href="/edit_profile"><BsPersonGear  size={30}/></a>
                    <a href="/edit_profile" className={`${collapse ? 'hidden':'top-[-490px]'}`}>Edit Profile</a>
                </li>
                <li className="flex hover:text-gray-200 items-center gap-5">
                    <a href="/report"><MdOutlineReport  size={30}/></a>
                    <a href="/report" className={`${collapse ? 'hidden':'top-[-490px]'}`}>Report</a>
                </li>
                <li className="flex hover:text-gray-200 items-center gap-5">
                    <a href="/settings"><TbSettings size={30} /></a>
                    <a href="/settings" className={`${collapse ? 'hidden':'top-[-490px]'}`}>Settings</a>
                </li>
            </ul>

        {/* Border top */}
        <p className="border-t-2 mt-40 pt-20 border-white w-full"></p>

        {/* Log Out and help */}
            <ul className="   space-y-10 font-normal text-xl">
                <li className="flex hover:text-gray-200 items-center gap-5">
                    <a href="/help"><BiHelpCircle  size={30}/></a>
                    <a href="/help" className={`${collapse ? 'hidden':'top-[-490px]'}`}>Help</a>
                </li>
                <li className="flex hover:text-gray-200 items-center gap-5">
                    <a href="/logout"><RiLogoutCircleRLine  size={30}/></a>
                    <a href="/logout" className={`${collapse ? 'hidden':'top-[-490px]'}`}>Log Out</a>
                </li>
            </ul>
            
    </div>
  )
}

export default Sidebar