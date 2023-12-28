import HeroImage from '../../assets/image/hero.png'
import PrimaryButton from '../Button/PrimaryButton';
import StringImage from '../../assets/image/string.png'

const Hero = () => {
  return (
    <>
      <div className='relative pt-20 ps-4 flex flex-col-reverse lg:flex-row items-center justify-between lg:ps-20 gap-2 mb-28 z-40' data-section id='home'>
        <div className='w-full lg:w-1/2 text-start'>
          <h1 className='text-4xl lg:text-5xl font-medium text-primary-700 leading-normal mb-8'>Ciptakan <span className='font-bold'>Web Undangan</span> yang Autentik untuk  Acaramu yang Estetik </h1>
          <PrimaryButton
            text='Order Sekarang'
            onClick={() => {
              window.open(`https://wa.me/6281333000312`, '_blank');
            }}
          />
        </div>
        <img className='w-full lg:w-1/2' src={HeroImage} alt="hero" />
      </div>
      <img src={StringImage} alt="" className='absolute hidden lg:block top-1/3 mt-20 ms-48 lg:ms-0 lg:mt-0 lg:top-80 left-10 z-0' />
    </>
  )
}

export default Hero;