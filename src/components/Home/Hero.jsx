import HeroImage from '../../assets/image/hero.png'
import PrimaryButton from '../Button/PrimaryButton';

const Hero = () => {
  return (
    <div className='pt-20 ps-4 flex flex-col-reverse lg:flex-row items-center justify-between lg:ps-20 gap-2 mb-28'>
      <div className='w-full lg:w-1/2 text-start'>
        <h1 className='text-4xl lg:text-5xl font-medium text-primary-700 leading-normal mb-8'>Ciptakan <span className='font-bold'>Web Undangan</span> yang Autentik untuk  Acaramu yang Estetik </h1>
        <PrimaryButton
          text='Order Sekarang'
        />
      </div>
      <img className='w-full lg:w-1/2' src={HeroImage} alt="hero" />
    </div>
  )
}

export default Hero;