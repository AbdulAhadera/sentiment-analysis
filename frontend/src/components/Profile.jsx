import ProfileImg from '../components/ProfileImg'
import { ExpandableCardDemo } from './ProductCard';
import pic from '../../public/me.jpg'
import { IoIosStar } from "react-icons/io";
import { CiLinkedin, CiFacebook, CiLocationOn } from "react-icons/ci";
import { IoIosLink, IoMdTime } from "react-icons/io";

function Profile() {

    let lorem = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Amet impedit et culpa possimus ratione cupiditate perspiciatis autem iure maxime, harum id voluptates vel eos quod ? Nihil blanditiis laboriosam laborum quos.";

    return (
        <div className="block  md:flex">

            {/* Image DIV */}
            <div className="w-full md:w-1/3  px-4 pt-3 bg-box  rounded-lg shadow-xl" >

                <div className='justify-items-center'>
                    <ProfileImg />
                </div>

                <div>
                    <h1 className='text-3xl font-roboto-black'>Abdul Ahad</h1>
                    <hr />
                    <div className=''>
                        <p className='text-gray-400 font-thin text-sm'>About</p>
                        <p className='text-sm font-roboto-black'>{lorem.slice(0, 80) + "..."}
                            <span
                                onClick={() => {

                                }}
                                className='text-gray-400 font-thin text-sm cursor-pointer'
                            >&nbsp;&nbsp;Read more </span>
                        </p>
                        <hr />

                        <hr />
                        <button className='bg-headers w-full my-2 py-1 text-white font-semibold rounded-md hover:bg-headers/90'>
                            Edit Profile
                        </button>
                    </div>
                </div>

            </div>

            <div className="w-full  mx-0 my-2 bg-white rounded-lg flex flex-col px-2 shadow-lg md:w-2/3 md:mx-2 md:my-0">
                <h1 className='text-center text-2xl'>Products</h1>
                <div className='h-60 my-1 overflow-y-auto'>
                    <ExpandableCardDemo />
                </div>

                <div className=' my-1'>

                    <div className=' sm:flex min-h-full'>

                        <div className='w-full sm:w-1/2 min-h-full m-1'>
                            <p className='text-lg '>Badges</p>
                            <div className='flex overflow-x-auto'>
                                <img src={pic} alt="badges" className='h-16 rounded-full mx-1' />
                                <img src={pic} alt="badges" className='h-16 rounded-full mx-1' />
                                <img src={pic} alt="badges" className='h-16 rounded-full mx-1' />
                                <img src={pic} alt="badges" className='h-16 rounded-full mx-1' />
                                <img src={pic} alt="badges" className='h-16 rounded-full mx-1' />
                                <img src={pic} alt="badges" className='h-16 rounded-full mx-1' />

                            </div>
                            <p className='text-lg'>Reviews</p>
                            <div className='flex justify-center'>
                                <IoIosStar size={25} className='mx-1' />
                                <IoIosStar size={25} className='mx-1' />
                                <IoIosStar size={25} className='mx-1' />
                                <IoIosStar size={25} className='mx-1' />
                                <IoIosStar size={25} className='mx-1' />
                            </div>
                        </div>

                        <div className='w-full md:w-1/2 min-h-full m-1'>
                            <h1 className='text-lg'>Other Info</h1>
                            <div className='flex'>
                                <CiLocationOn size={20} className='mt-1' /><p className='text-lg mx-2'>Karachi, Sindh</p>
                            </div>
                            <div className='flex'>
                                <IoMdTime size={20} className='mt-1' /><a href="#" className='text-lg mx-2'>my Local Time</a>
                            </div>

                            <h1 className='text-lg'>Socials</h1>
                            <div className='flex'>
                                <CiLinkedin size={20} className='mt-1' /><p className='text-lg mx-2'>Linkedin Link</p>
                            </div>
                            <div className='flex'>
                                <CiFacebook size={20} className='mt-1' /><a href="#" className='text-lg mx-2'>Facebook Link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile;