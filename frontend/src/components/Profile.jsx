import ProfileImg from '../components/ProfileImg'


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
                        <button className='bg-headers w-full my-2 py-1 text-white font-semibold rounded-md hover:bg-headers/90'>
                            Edit Profile
                        </button>
                    </div>
                </div>

            </div>

            <div className="w-full md:w-2/3 bg-red-400 ">
                {/* Prdoucts */}a
            </div>
        </div>
    )
}

export default Profile