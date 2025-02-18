import pic from '../../public/me.jpg'
import { FaPencilAlt } from "react-icons/fa";


function ProfileImg() {
    return (
        <div className=''>

            <div className="max-w-fit bg-headers p-1 rounded-full overflow-hidden">
                <img
                    src={pic}
                    alt="Profile Picture"
                    className="h-36 md:h-72 rounded-full transform transition-transform duration-300 ease-in-out hover:scale-110"
                />
            </div>


            {/* <div className='bg-gray-100 border-black  max-w-fit rounded-full p-2 relative -top-12 left-28 md:-top-20 md:left-60 cursor-pointer'>
                <FaPencilAlt size={25} />
            </div> */}
        </div>

    )
}

export default ProfileImg