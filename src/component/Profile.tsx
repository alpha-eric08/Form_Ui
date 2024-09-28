import { BsFillEyeFill, BsPerson } from "react-icons/bs"
import { profileimg } from "../assets/images"

const Profile = () => {
  return (
    <div className="px-16 py-16 w-full flex gap-20">
        <div className="space-y-10 w-[296px]">
            {/* Profile Image */}
            <div className="flex w-[296px] h-[254px] overflow-hidden rounded-md">
                <img className=" object-cover h-full w-full " src={profileimg} alt="" />
            </div>

            {/* Skills */}
            <div className="space-y-5 ">
                <div className="flex gap-2">
                    <h1 className="font-medium text-xl  text-[#7F7F7F]">SKILL </h1>
                    <p className="border-b h-[21px] w-full border-[#7F7F7F]"></p>
                </div>
                <h2 className="font-medium text-xl ">Graphic Designer</h2>
                <p className="text-sm font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu</p>
            </div> 

            {/* SKILL LEVEL */}
            <div className="space-y-5 ">
                <div className="flex">
                    <h1 className="font-medium text-xl w-[190px] text-[#7F7F7F]">SKILL LEVEL </h1>
                    <p className="border-b h-[21px] w-full border-[#7F7F7F]"></p>
                </div>
                <h2 className="font-medium text-xl ">Intermediate</h2>
                <p className="text-sm font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu</p>
            </div> 
        </div>

            {/* 2nd part */}
        <div className="space-y-7  w-full">
            {/* Name and Position */}
            <div>
                <h1 className="font-semibold text-2xl">Samuel Freeman</h1>
                <h2 className="font-medium text-[#323232] text-lg">Product Designer</h2>
            </div>

            {/* Bio */}
            <div className="space-y-2 w-[430px]">
                <h3 className="text-[#7F7F7F] font-medium text-base">BIOGRAPHY</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            {/* buttons */}
            <div className="font-medium text-base space-x-5">
                <button className="">Send Message</button>
                <button className="text-[#1c259b] p-2 rounded bg-[#F3F3F3]">Contact</button>
                <button className="text-[#7F7F7F]">Report Users</button>
            </div>

            <div className="flex gap-5 w-[100%] border-b-2 border-[#C1C1C1]">
                <div className="text-[#7F7F7F] flex items-center text-xl font-medium gap-2"> 
                    <BsFillEyeFill />
                    <p>Timeline</p>
                </div>
                <div className="text-black flex items-center text-xl font-medium gap-2"> 
                    <BsPerson  />
                    <p>About</p>
                </div>
            </div>

            {/* Contact Info */}
            <div>
                <h3 className="text-[#7F7F7F] font-medium my-8 text-xl">CONTACT INFORMATION</h3>
                <ul className="space-y-5 ">
                    <li className="grid grid-cols-2 w-6/12">
                        <p className="font-medium text-xl">Phone:</p>
                        <a href="#" className="text-[#0012FF] font-normal text-xl">+233 555500000</a>
                    </li>
                    <li className="grid grid-cols-2 w-6/12">
                        <p className="font-medium text-xl">Email:</p>
                        <a href="#" className="text-[#0012FF] font-normal text-xl">samuelfreeman@gmail.com</a>
                    </li>
                    <li className="grid grid-cols-2 w-6/12 font-medium text-xl">
                        <p>Interest:</p>
                        <p>Technology</p>
                    </li>
                </ul>
            </div>

            {/* Basic Info */}
            <div>
                <h3 className="text-[#7F7F7F] font-medium my-8 text-xl">BASIC INFORMATION</h3>
                <ul className="space-y-5 ">
                <li className="grid grid-cols-2 w-6/12 font-medium text-xl">
                        <p>Joined Date:</p>
                        <p>June 15, 2024</p>
                    </li>
                    <li className="grid grid-cols-2 w-6/12 font-medium text-xl">
                        <p>Gender:</p>
                        <p>Male</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Profile