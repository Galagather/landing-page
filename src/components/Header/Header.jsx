import { useEffect, useRef, useState } from 'react';
import Logo from '../../assets/logo.png'
import { IoIosMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

const Header = (link) => {
  const [hamburgerActive, setHamburgerActive] = useState(false)
  const [activeSection, setActiveSection] = useState(null);
  const sections = useRef([]);

  const handleClickScroll = () => {
    const element = document.getElementById(link);
    // console.log(link)
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setHamburgerActive(false)
  };

  // const nav = document.querySelector(".navbar");



  const handleScroll = () => {
    const pageYOffset = window.pageYOffset;
    let newActiveSection = null;

    const mobileAgents = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i
    ];

    const isMobile = mobileAgents.some((mobileAgent) => {
      return navigator.userAgent.match(mobileAgent);
    });

    sections.current.forEach((section) => {
      const sectionOffsetTop = isMobile ? section.offsetTop - 100 : section.offsetTop - 96;
      const sectionHeight = section.offsetHeight;
      if (pageYOffset >= sectionOffsetTop) {
        newActiveSection = section.id;
      }
    });

    setActiveSection(newActiveSection);
  };

  useEffect(() => {
    sections.current = document.querySelectorAll('[data-section]');
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed px-4 lg:px-20 py-2 flex items-center justify-between w-full bg-grey-50 z-50">
      <a href="#home" onClick={() => handleClickScroll('#')}>
        <img src={Logo} alt="logo" className='w-16' />
      </a>
      <ul className='hidden lg:flex items-center justify-between gap-8 font-medium text-primary-600 text-xl'>
        <li><a href="#home" className={activeSection === 'home' ? 'border-b-3 border-secondary-500' : ''} onClick={() => handleClickScroll('#home')}>Selamat Datang</a></li>
        <li><a href="#whyus" className={activeSection === 'whyus' ? 'border-b-3 border-secondary-500' : ''} onClick={() => handleClickScroll('#whyus')}>Mengapa Galagather</a></li>
        <li><a href="#service" className={activeSection === 'service' ? 'border-b-3 border-secondary-500' : ''} onClick={() => handleClickScroll('#service')}>Layanan</a></li>
        <li><a href="#process" className={activeSection === 'process' ? 'border-b-3 border-secondary-500' : ''} onClick={() => handleClickScroll('#process')}>Proses Order</a></li>
      </ul>
      <div
        className='flex items-center justify-center lg:hidden rounded-lg w-16 h-12'
        onClick={() => setHamburgerActive(true)}
      >
        <IoIosMenu size={50} className='text-primary-600' />
      </div>
      <div
        className={`${hamburgerActive ? 'block' : 'hidden'} lg:hidden absolute bg-grey-900 w-screen h-screen top-0 opacity-40 left-0 transition-all duration-700`}
        onClick={() => setHamburgerActive(false)}
      ></div>
      <div
        className={`block lg:hidden absolute bg-grey-50 w-1/2 h-screen top-0 ${hamburgerActive ? 'left-1/2' : 'left-full'} transition-all duration-700`}
      >
        <div
          className='flex items-center justify-center rounded-lg w-16 h-12 ms-auto me-4 mt-4'
          onClick={() => setHamburgerActive(false)}
        >
          <RxCross1 size={40} className='text-primary-600' />
        </div>
        <ul className='font-semibold text-primary-600 text-lg w-full text-start ps-4'>
          <li className='mt-8 mb-4'><a href="#home" className={activeSection === 'home' ? 'border-b-3 border-secondary-500' : ''} onClick={() => handleClickScroll('#home')}>Selamat Datang</a></li>
          <li className='mb-4'><a className={activeSection === 'whyus' ? 'border-b-3 border-secondary-500' : ''} href="#whyus" onClick={() => handleClickScroll('#whyus')}>Mengapa Galagather</a></li>
          <li className='mb-4'><a className={activeSection === 'service' ? 'border-b-3 border-secondary-500' : ''} href="#service" onClick={() => handleClickScroll('#service')}>Layanan</a></li>
          <li><a href="#process" className={activeSection === 'process' ? 'border-b-3 border-secondary-500' : ''} onClick={() => handleClickScroll('#process')}>Proses Order</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header;