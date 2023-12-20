import WhyUsIcon from '../../assets/image/whyus.png'

const WhyUs = () => {
  return (
    <div className='px-4 lg:px-20 mb-32'>
      <h1 className='text-3xl lg:text-4xl mx-auto font-semibold text-primary-700 leading-normal mb-8'>MENGAPA HARUS GALAGATHER</h1>
      <div className='flex flex-col lg:flex-row items-center justify-center gap-12'>
        <img src={WhyUsIcon} alt="" className='w-full lg:w-1/2' />
        <div className='text-center lg:text-start w-5/6 lg:w-1/2'>
          <div className='bg-white shadow-primary rounded-2xl py-5 px-6 mb-6'>
            <h3 className='text-primary-700 font-medium text-3xl mb-2'>Design yang Kece</h3>
            <p className='text-grey-900 text-xl'>Buat website undangan dengan desain yang keren, cakep, dan sesuai dengan acaramu.</p>
          </div>
          <div className='bg-white shadow-primary rounded-2xl py-5 px-6 mb-6'>
            <h3 className='text-primary-700 font-medium text-3xl mb-2'>Mudah dan Cepat</h3>
            <p className='text-grey-900 text-xl'>Proses mudah dan cepat, gunakan waktumu untuk persiapkan acaramu.</p>
          </div>
          <div className='bg-white shadow-primary rounded-2xl py-5 px-6 mb-6'>
            <h3 className='text-primary-700 font-medium text-3xl mb-2'>Eksklusif</h3>
            <p className='text-grey-900 text-xl'>Dapatkan website undangan dengan design yang tidak dijual bebas ke banyak orang.</p>
          </div>
          <div className='bg-white shadow-primary rounded-2xl py-5 px-6'>
            <h3 className='text-primary-700 font-medium text-3xl mb-2'>Dedicated</h3>
            <p className='text-grey-900 text-xl'>Kami siap berdiskusi denganmu untuk menghasilkan website undangan keren, sesuai yang kamu inginkan.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyUs;