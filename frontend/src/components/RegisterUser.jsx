import { useState } from 'react';
import { FaCamera } from 'react-icons/fa';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    image: '',
    email: '',
    fullName: '',
    password: '',
    recheckPassword: '',
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
    console.log(formData); // Print form data to the console
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full bg-white p-8">

        <h1 className="text-3xl font-semibold text-center text-gray-700 mb-6">Register User</h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Image Upload Section */}
          <div className="flex justify-center items-center rounded-full cursor-pointer h-24 w-24 bg-gray-200 mb-4">
            <label htmlFor="image-upload" className="flex  text-gray-600">
              <input
                type="file"
                id="image-upload"
                className="hidden"
                onChange={handleFileChange}
              />
              {formData.image ? (
                <span className="mt-2 text-sm text-gray-500"></span>
              ) : (
                <span className="mt-2 text-sm text-gray-500"><FaCamera /></span>
              )}
            </label>
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-gray-600">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your Email Address"
              required
            />
          </div>

          {/* Full Name Field */}
          <div>
            <label htmlFor="fullName" className="block text-gray-600">Full Name*</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your Full Name"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-gray-600">Password*</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your Password"
              required
            />
          </div>

          {/* Recheck Password Field */}
          <div>
            <label htmlFor="recheckPassword" className="block text-gray-600">Confirm Password*</label>
            <input
              type="password"
              id="recheckPassword"
              name="recheckPassword"
              value={formData.recheckPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Re-enter your Password"
              required
            />
          </div>

          <div className="mt-4 flex justify-between items-center">
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
              Sign Up
            </button>
          </div>

          <div className="text-center mt-4">
            <p className="text-gray-600 text-sm">
              Already have an account?{' '}
              <a href="/login" className="text-blue-500 hover:text-blue-600">Login here</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
