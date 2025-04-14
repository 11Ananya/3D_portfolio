import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import playLogo from "../assets/play-logo.svg";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef(new Audio());

  useEffect(() => {
    audioRef.current.src = '/media/take-on-the-world.mp3';
    audioRef.current.loop = true;
    return () => {
      audioRef.current.pause();
      audioRef.current.src = '';
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-3 fixed top-0 z-20 backdrop-blur-sm ${
        scrolled ? "bg-primary/90" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              togglePlay();
            }}
            className="relative group"
          >
            <img 
              src={playLogo} 
              alt='Play Music' 
              className={`w-14 h-14 object-contain transition-transform duration-300 ${isPlaying ? 'scale-110' : 'hover:scale-110'}`} 
            />
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[#1a0b2e] text-[#915EFF] px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {isPlaying ? 'Pause' : 'Take On The World'}
            </div>
          </button>
          <div className='flex flex-col'>
            <h1 className='text-white text-[20px] font-bold cursor-pointer'>
              Ananya Dabas
            </h1>
            <p className='text-[14px] text-secondary hidden sm:block'>
              Software Developer
            </p>
          </div>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${                active === nav.title ? "text-[#915EFF]" : "text-secondary"              } hover:text-[#915EFF] text-[16px] font-medium cursor-pointer transition-colors duration-300`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>


      </div>
    </nav>
  );
};

export default Navbar;