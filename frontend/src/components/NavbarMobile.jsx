import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import 'animate.css';
import { motion } from "framer-motion";

function NavbarMobile() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openNav, setOpenNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const toggleNav = () => {
    setOpenNav(prevState => !prevState);
  };

  return (
    <div>
      <ul
        className={`flex justify-between font-nexa text-md fixed top-0 left-0 w-full transition-all duration-300 z-50
                     ${isScrolled ? ' backdrop-blur-sm shadow-md bg-headers/40' : 'backdrop-blur-none'
          }`}
      >
        {
          openNav ?
            <div className="flex justify-between w-full p-2 bg-headers text-white">
              <li className="relative cursor-pointer  group">Logo</li>
              <li className="relative cursor-pointer " onClick={toggleNav}>
                <GiHamburgerMenu size={20} />
              </li>
            </div>
            :
            <motion.div
              className="min-h-screen backdrop-blur-md w-full bg-headers/50"
              initial={{ y: -320, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 25,
                duration: 0.5
              }}
            >
              <div className="flex justify-between text-white">
                <ul className="text-lg ml-3 w-full">
                  <li className="my-3 cursor-pointer">Home</li>
                  <hr />
                  <li className="my-3 cursor-pointer">Profile</li>
                  <hr />
                  <li className="my-3 cursor-pointer">Report</li>
                  <hr />
                  <li className="my-3 cursor-pointer">Support</li>
                </ul>
                <ImCross
                  className="cursor-pointer m-4"
                  onClick={toggleNav}
                  size={25}
                />
              </div>
            </motion.div>
        }
      </ul>
    </div>
  );
}

export default NavbarMobile;