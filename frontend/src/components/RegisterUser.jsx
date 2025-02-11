import { useState } from 'react';
import { FaCamera } from 'react-icons/fa'

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        image: "",
        email: "",
        fullName: "",
        password: "",
        recheckPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            image: e.target.files[0],
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <div className="justify-items-center bg-gray-50 py-2 rounded-lg">
            <h1 className='text-2xl'>Register User</h1>

            <div className='w-full'>

                {/* Image Ipload Submission */}
                <div className='flex justify-center items-center rounded-full cursor-pointer h-20 w-20 bg-white'>
                    <FaCamera />
                </div>

                {/* Credentials */}
                <div className='px-4'>
                    <div className=''>
                        <label htmlFor="Email" className='block pt-3'>Email* </label>
                        <input
                            type="email"
                            className='w-full px-2 py-1 rounded-md outline-none'
                            placeholder='Enter your Email Address'
                        />
                    </div>
                    <div className=''>
                        <label htmlFor="fullname" className='block pt-3'>Full Name* </label>
                        <input
                            type="text"
                            className='w-full px-2 py-1 rounded-md outline-none'
                            placeholder='Enter your Email Address'
                        />
                    </div>
                    <div className=''>
                        <label htmlFor="password" className='block pt-3'>Passwrod* </label>
                        <input
                            type="password"
                            className='w-full px-2 py-1 rounded-md outline-none'
                            placeholder='Enter your Email Address'
                        />
                    </div>
                    <div className=''>
                        <label htmlFor="re-check-password" className='block pt-3'>Confirm Passwrod* </label>
                        <input
                            type="password"
                            className='w-full px-2 py-1 rounded-md outline-none'
                            placeholder='Enter your Email Address'
                        />
                    </div>
                    <hr className='mt-2 ' />
                    <hr className='' />

                    <div className='mt-2'>
                        <button className='w-full bg-red-200 py-1 rounded-lg'>
                            SignUp
                        </button>
                    </div>

                    <div className='flex'>

                        <p className=''>already have an account.. ?</p>

                    </div>


                </div>

            </div>
        </div>
    );
};

export default RegisterForm;