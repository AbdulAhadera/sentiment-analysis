import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-headers text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo Section */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-3xl font-roboto-black">Critique AI</h1>
            <p className="text-sm mt-2">Your AI-driven solution for better feedback</p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-4 md:mb-0">
            <a href="#about" className="text-sm hover:text-button-hover transition">About</a>
            <a href="#services" className="text-sm hover:text-button-hover transition">Services</a>
            <a href="#contact" className="text-sm hover:text-button-hover transition">Contact</a>
            <a href="#privacy" className="text-sm hover:text-button-hover transition">Privacy Policy</a>
          </div>

          {/* Social Media Icons Section */}
          <div className="flex gap-6">
            <a href="#" className="text-xl hover:text-button-hover">
              <FaFacebookF />
            </a>
            <a href="#" className="text-xl hover:text-button-hover">
              <FaLinkedin />
            </a>
            <a href="#" className="text-xl hover:text-button-hover">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-6 text-sm">
          <p>&copy; 2025 Critique AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;