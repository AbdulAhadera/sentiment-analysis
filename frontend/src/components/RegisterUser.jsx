import { useState } from 'react';
import { FaCamera } from 'react-icons/fa';

const RegisterForm = () => {
    const [form, setForm] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        profileImage: null,
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
            profileImage: e.target.files[0],
        });
    };

    const toggleForm = () => {
        setForm(!form);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form) {
            // Handle login form submit
            if (formData.email && formData.password) {
                console.log('Login:', formData);
            } else {
                alert('Please fill in both fields.');
            }
        } else {
            // Handle sign-up form submit
            if (formData.password === formData.confirmPassword) {
                console.log('Sign Up:', formData);
            } else {
                alert('Passwords do not match.');
            }
        }
    };

    return (
        <div className="py-4 flex items-center bg-box rounded-md">
            {form ? (
                <div>
                    <h1 className="text-3xl sm:text-4xl text-center mt-3 text-text-title font-roboto">Welcome Back</h1>
                    <form className="pt-4 px-2 md:px-12" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            className="py-2 px-2 my-2 w-full rounded-sm font-semibold bg-white border border-bg-gradient-start focus:outline-none focus:ring-2 focus:ring-headers"
                            placeholder="Enter Your Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            className="py-2 px-2 my-2 w-full rounded-sm font-semibold bg-white border border-bg-gradient-start focus:outline-none focus:ring-2 focus:ring-headers"
                            placeholder="Enter Your Password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <p className="mt-1">
                            Don't have an account? &nbsp;
                            <span
                                className="underline cursor-pointer text-headers"
                                onClick={toggleForm}
                            >
                                Sign Up
                            </span>
                        </p>
                        <hr className="border-gray-500 my-2 mx-1" />
                        <button
                            type="submit"
                            className="w-full  bg-headers py-1 my-2 rounded-sm text-lg text-white font-bold"
                        >
                            Log In
                        </button>
                    </form>
                </div>
            ) : (
                <div>
                     <h1 className="text-3xl sm:text-4xl text-center mt-3 text-text-title font-roboto">Create an account</h1>

                    <div className="mt-4 mx-4 h-20 w-20 flex justify-center items-center cursor-pointer bg-gray-100 rounded-full">
                        <label>
                            <input
                                type="file"
                                className="hidden"
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                            <FaCamera />
                        </label>
                    </div>

                    <form className="pt-4 px-4 md:px-12" onSubmit={handleSubmit}>
                        <div className="block md:w-full md:flex md:justify-between">
                            <input
                                type="text"
                                className="w-full my-2 py-2 md:w-1/2 px-2 rounded-sm font-semibold bg-white border border-bg-gradient-start focus:outline-none focus:ring-2 focus:ring-headers"
                                placeholder="First Name"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                            <span className="px-2"></span>
                            <input
                                type="text"
                                className="w-full my-2 py-2 px-2 md:w-1/2 rounded-sm font-semibold bg-white border border-bg-gradient-start focus:outline-none focus:ring-2 focus:ring-headers"
                                placeholder="Last Name"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </div>
                        <input
                            type="email"
                            className="py-2 px-2 my-2 w-full rounded-sm font-semibold bg-white border border-bg-gradient-start focus:outline-none focus:ring-2 focus:ring-headers"
                            placeholder="Enter Your Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            className="py-2 px-2 my-2 w-full rounded-sm font-semibold bg-white border border-bg-gradient-start focus:outline-none focus:ring-2 focus:ring-headers"
                            placeholder="Enter Your Password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            className="py-2 px-2 my-2 w-full rounded-sm font-semibold bg-white border border-bg-gradient-start focus:outline-none focus:ring-2 focus:ring-headers"
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                        <p className="mt-1">
                            Already have an account? &nbsp;
                            <span
                                className="underline cursor-pointer text-headers"
                                onClick={toggleForm}
                            >
                                Log In
                            </span>
                        </p>
                        <hr className="border-gray-500 my-2 mx-1" />
                        <button
                            type="submit"
                            className="w-full bg-headers py-1 my-2 rounded-sm text-lg text-white font-bold"
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default RegisterForm;
