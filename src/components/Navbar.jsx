import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, github } from "../assets";

import linkedIn from "/linkedin.png"

const Navbar = () => {

  axios.get("https://movies-data-api.onrender.com/movies");

  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav
        className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
          <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
            <Link
              to="/"
              className='flex items-center gap-2'
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
              >
                <img src={logo} alt='logo' className='w-9 h-9 object-contain'  />
                <p className="text-white text-[18px] font-bold cursor-pointer">Yash Mude <span className='sm:block'>| Portfolio</span></p>
            </Link>
            <ul className='list-none hidden lg:flex flex-row gap-10'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={ () => setActive(link.title)}
                >
                  <a href={`#${link.id}`}> {link.title}</a>
                </li>
              ))}
              <a href='https://www.linkedin.com/in/yash-mude-83b6931a2/' target="_blank"><img src={linkedIn} alt='logo' className='w-8 h-8 object-contain'  /></a>
              <a href='https://github.com/YashM7' target="_blank"><img src={github} alt='logo' className='w-9 h-7 object-contain'  /></a>
            </ul>

            <div className='lg:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <a href='https://www.linkedin.com/in/yash-mude-83b6931a2/' target="_blank"><img src={linkedIn} alt='logo' className='w-9 h-9 object-contain'  /></a>
              <a href='https://github.com/YashM7' target="_blank"><img src={github} alt='logo' className='w-9 h-7 object-contain'  /></a>
            </ul>
          </div>
        </div>

            <div>
              
            </div>
          
          </div>

      </nav>
    </>
  )
}

export default Navbar