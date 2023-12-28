import { useState } from 'react';
import WhyUsIcon from '../../assets/image/whyus.png'
import WhyUsIcon2 from '../../assets/image/whyus-2.png'
import WhyUsIcon3 from '../../assets/image/whyus-3.png'
import WhyUsIcon4 from '../../assets/image/whyus-4.png'
import StampImage from '../../assets/image/stamp-one.png'
import line from '../../assets/icon/whyus-line.svg'

const reason = [
  {
    title: 'Design yang Kece',
    desc: 'Buat website undangan dengan desain yang keren, cakep, dan sesuai dengan acaramu.',
    icon: WhyUsIcon
  },
  {
    title: 'Mudah dan Cepat',
    desc: 'Proses mudah dan cepat, gunakan waktumu untuk persiapkan acaramu.',
    icon: WhyUsIcon2
  },
  {
    title: 'Eksklusif',
    desc: 'Dapatkan website undangan dengan design yang tidak dijual bebas ke banyak orang.',
    icon: WhyUsIcon3
  },
  {
    title: 'Dedicated',
    desc: 'Kami siap berdiskusi denganmu untuk menghasilkan website undangan keren, sesuai yang kamu inginkan.',
    icon: WhyUsIcon4
  }
]

const WhyUs = () => {
  const [icon, setIcon] = useState(reason[0]?.icon)
  return (
    <>
      <img src={StampImage} alt="" className='absolute mt-96 lg:-mt-14 lg:right-0 z-0' />
      <div className='relative px-4 lg:px-20 mb-32 scroll-mt-24  z-40' data-section id='whyus'>
        <h1
          className='flex justify-center flex-wrap gap-1 lg:gap-2 text-3xl lg:text-4xl mx-auto font-semibold text-primary-700 leading-normal mb-8'
        >
          MENGAPA HARUS
          <div>
            GALAGATHER
            <img className='' src={line} alt="" />
          </div>
        </h1>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-12'>
          <img src={icon} alt="" className='hidden lg:block w-full lg:w-1/2' />
          <div className='text-center lg:text-start w-9/12 lg:w-1/2'>
            {reason.map((reas, index) => {
              return (
                <div
                  className={`bg-white shadow-primary hover:shadow-primary-hover rounded-2xl py-5 px-6 ${index !== reason.length - 1 && 'mb-6'} hover:cursor-pointer`}
                  key={index}
                  // onClick={() => setIcon(reas.icon)}
                  onMouseEnter={() => setIcon(reas.icon)}
                >
                  <h3 className='text-primary-700 font-semibold text-2xl mb-2'>{reas.title}</h3>
                  <p className='text-grey-900 text-lg'>{reas.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default WhyUs;