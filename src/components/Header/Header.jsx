import Logo from '../../assets/logo.png'

const Header = (link) => {
  const handleClickScroll = () => {
    const element = document.getElementById(link);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="px-4 lg:px-20 py-2 flex items-center justify-between">
      <img src={Logo} alt="logo" className='w-16' />
      <ul className='hidden lg:flex items-center justify-between gap-8 font-medium text-primary-600 text-xl'>
        <li><a href="#" className='border-b-3 border-secondary-500' onClick={() => handleClickScroll('#')}>Selamat Datang</a></li>
        <li><a href="#whyus" onClick={() => handleClickScroll('#whyus')}>Mengapa Galagather</a></li>
        <li><a href="#service" onClick={() => handleClickScroll('#service')}>Layanan</a></li>
        <li><a href="#process" onClick={() => handleClickScroll('#process')}>Proses Order</a></li>
      </ul>
    </div>
  )
}

export default Header;