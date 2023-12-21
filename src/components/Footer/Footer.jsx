import Logo from '../../assets/logo-2.png'
import LinkedInIcon from '../../assets/icon/linkedin.svg'
import WhatsappIcon from '../../assets/icon/whatsapp square.svg'
import InstagramIcon from '../../assets/icon/instagram square.svg'

const Footer = () => {
  return (
    <div className="text-center lg:text-start text-primary-700 px-4 lg:px-20 pt-8 pb-2  bg-grey-200">
      <div className='flex flex-col lg:flex-row justify-between gap-7'>
        <div className='w-full lg:w-1/2'>
          <img src={Logo} alt="logo" className='w-2/5 mb-2 mx-auto lg:mx-0' />
          <p className='mb-3'>Jl. Panjang Arteri Klp. Dua Raya No.8, Kedoya Utara, Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11520</p>
          <p className='mb-3'>Nomor : +62 8221-0860-366</p>
          <p className='mb-3'>Email    : cs.galagather@gmail.com</p>
          <div className='flex items-center w-fit mx-auto lg:mx-0'>
            <img src={LinkedInIcon} alt="linkedind" />
            <img src={InstagramIcon} alt="instagram" />
            <img src={WhatsappIcon} alt="whatsapp" />
          </div>
        </div>
        <div className='w-full lg:w-1/2'>
          <ul>
            <li><a href="#article">Article</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#privacy">Kebijakan Privasi</a></li>
            <li><a href="#terms">Syarat dan Ketentuan</a></li>
            <li><a href="#about">Tentang Kami</a></li>
          </ul>
        </div>
      </div>
      <p className='text-center text-sm mt-6'>Copyright © {new Date().getFullYear()} Galagather. All Right Reserved.</p>
    </div>
  )
}

export default Footer;