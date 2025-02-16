import { useState, useEffect } from 'react';
import '../App.css'


function Laptopnavbar() {
    const [isScrolled, setIsScrolled] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div>
            <ul
                className={`bg-headers text-white text-lg flex justify-between  text-md p-3 fixed top-0 left-0 w-full transition-all duration-300 z-50 ${isScrolled ? 'backdrop-blur-sm shadow-md bg-headers/80' : 'backdrop-blur-none'
                    }`}
            >
                <li className="relative cursor-pointer group">
                    Logo
                </li>
                <li className="relative cursor-pointer group" >
                    Profile
                </li>
                <li className="relative cursor-pointer group" >
                    Report
                </li>
                <li className="relative cursor-pointer group" >
                    Support
                </li>
            </ul>
        </div>
    );
}

export default Laptopnavbar;