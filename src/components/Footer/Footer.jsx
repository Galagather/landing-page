import Logo from '../../assets/logo-2.png'
import LinkedInIcon from '../../assets/icon/linkedin.svg'
import WhatsappIcon from '../../assets/icon/whatsapp square.svg'
import InstagramIcon from '../../assets/icon/instagram square.svg'

const Footer = () => {
  return (
    <div className="text-center lg:text-start text-primary-700 px-4 lg:px-20 pt-8  bg-grey-200">
      <div className='flex flex-col-reverse lg:flex-row justify-between gap-1 lg:gap-7'>
        <div className='w-full lg:w-1/2'>
          <img src={Logo} alt="logo" className='w-3/5 lg:w-2/5 mb-2 mx-auto lg:mx-0' />
          <p className='mb-3'>Jl. Panjang Arteri Klp. Dua Raya No.8, Kedoya Utara, Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11520</p>
          <p className='mb-3'>Nomor : +62 813-3300-0312</p>
          <p className='mb-3'>Email    : cs.galagather@gmail.com</p>
          <div className='flex items-center w-fit mx-auto lg:mx-0'>
            {/* <img src={LinkedInIcon} alt="linkedind" /> */}
            <img
              src={InstagramIcon}
              alt="instagram"
              className='w-14 lg:w-8 hover:cursor-pointer'
              onClick={() => {
                window.open(`https://www.instagram.com/galagather?igsh=ODA1NTc5OTg5Nw==`, '_blank');
              }}
            />
            <img
              src={WhatsappIcon}
              alt="whatsapp"
              className='w-14 lg:w-8 hover:cursor-pointer'
              onClick={() => {
                window.open(`https://wa.me/6281333000312`, '_blank');
              }}
            />
          </div>
        </div>
        <div className='w-full lg:w-1/2'>
          <ul className='font-medium text-lg lg:text-base mb-6'>
            <li className='mb-2'><a href="#article">Article</a></li>
            <li className='mb-2'><a href="#faq">FAQ</a></li>
            <li className='mb-2'><a href="#privacy">Kebijakan Privasi</a></li>
            <li className='mb-2'><a href="#terms">Syarat dan Ketentuan</a></li>
            <li className='mb-2'><a href="#about">Tentang Kami</a></li>
          </ul>
          <hr className='block lg:hidden' />
        </div>
      </div>
      <hr className='mt-4 mx-auto' />
      <p className='text-center text-sm py-2 '>Copyright © {new Date().getFullYear()} Galagather. All Right Reserved.</p>
    </div>
  )
}

export default Footer;