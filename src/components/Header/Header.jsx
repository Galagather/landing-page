import Logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div className="px-20 py-2 flex items-center justify-between">
      <img src={Logo} alt="logo" className='w-16' />
      <ul className='flex items-center justify-between gap-8 font-medium text-primary-600 text-xl'>
        <li><a href="#" className='border-b-3 border-secondary-500'>Selamat Datang</a></li>
        <li><a href="#whyus">Mengapa Galagather</a></li>
        <li><a href="#service">Layanan</a></li>
        <li><a href="#process">Proses Order</a></li>
      </ul>
    </div>
  )
}

export default Header;