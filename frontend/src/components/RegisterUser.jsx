import { useState } from 'react';
import { FaCamera } from 'react-icons/fa';

const RegisterForm = () => {

    return (
        <>
            <div className='py-16'>
                <div className=''>
                    <h1 className='text-3xl sm:text-4xl text-center mt-3'>Create an account</h1>


                    <div className='mt-4 mx-4 h-20 w-20 flex justify-center items-center cursor-pointer bg-white rounded-full'>
                        <FaCamera />
                    </div>

                    <form className='pt-4 px-4 md:px-20'>

                        <div className='block md:w-full md:flex md:justify-between '>
                            <input
                                type="text"
                                className='w-full my-2 py-2 md:w-1/2 px-2 rounded-md font-semibold'
                                placeholder='First Name'
                                name="" id=""
                            />
                            <span className='px-2'></span>
                            <input type="text"
                                className='w-full my-2 py-2 px-2 md:w-1/2 rounded-md font-semibold'
                                placeholder='Last Name'
                                name=""
                                id=""
                            />
                        </div>
                        <input
                            type="email"
                            className='py-2 px-2 my-2  w-full rounded-md font-semibold'
                            placeholder='Enter Your Email'
                            name=""
                            id=""
                        />
                        <input
                            type="password"
                            className='py-2 px-2 my-2  w-full rounded-md font-semibold'
                            placeholder='Enter Your Password'
                            name=""
                            id=""
                        />
                        <input
                            type="password"
                            className='py-2 px-2 my-2  w-full rounded-md font-semibold'
                            placeholder='Confirm Password'
                            name=""
                            id=""
                        />
                        <p className='mt-1'>Already have an account ? <span className='underline'>Log In</span></p>
                        <hr className='border-gray-500 my-2 mx-1' />

                        <button
                            type='submit'
                            className='w-full bg-blue-400 py-1 my-2 rounded-md text-lg text-white font-bold'
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default RegisterForm;
