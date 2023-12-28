import PrimaryButton from "../Button/PrimaryButton";
import CheckIcon from "../../assets/icon/check.svg"
import InfoIcon from "../../assets/icon/info-circle.svg"
import ClampImage from '../../assets/image/clamp-one.png'
import LetterImage from '../../assets/image/letter.png'
import StampImage from '../../assets/image/stamp-two.png'
import line from '../../assets/icon/service-line.svg'

const serviceData = [
  {
    name: 'Reguler',
    desc: 'Pilih desain website undangan yang cocok dengan seleramu',
    price: 'Coming Soon',
    benefits: [
      "Design yang bertema dan estetik",
      "Musik yang sesuai dengan desain",
      "Proses mudah, tanpa ribet",
      "URL Website per-tamu undangan",
      "Jumlah undangan tanpa batas",
      "Sesuaikan design dengan tema acaramu"
    ]
  },
  {
    name: 'Custom',
    desc: 'Web undangan dengan design sesukamu, kami yang buatin!',
    price: 'Hubungi Kami',
    benefits: [
      "Web undangan dengan design seleramu",
      "Konsultasi desian sampai jadi kece",
      "Bebas revisi design sampai cocok",
      "Design menjadi hak milikmu",
      "Musik yang sesuai dengan desain",
      "Proses mudah, tanpa ribet",
      "URL Website per-tamu undangan"
    ]
  }
]

const Services = () => {
  return (
    <>
      <img src={ClampImage} alt="" className='absolute -ms-16 lg:ms-0 -mt-14 z-0' />
      <img src={LetterImage} alt="" className='absolute mt-96 lg:mt-14 right-0 z-0' />
      <div className='relative px-10 lg:px-20 mb-32 scroll-mt-24 z-40' data-section id="service">
        <h1
          className='flex flex-wrap justify-center gap-2 lg:gap-3 text-3xl lg:text-4xl lg:text-4xl mx-auto font-semibold text-primary-700 leading-normal mb-8'
        >
          <div>
            LAYANAN
            <img className='' src={line} alt="" />
          </div>
          KAMI
        </h1>
        <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-20">
          {serviceData.map((serv, index) => {
            return (
              <div className="bg-white w-full lg:w-1/3 rounded-3xl py-10 px-8 border-grey-300 hover:border-primary-300 border-2" key={index}>
                <h3 className="text-grey-900 font-semibold text-3xl mb-2">{serv.name}</h3>
                <p className="text-grey-900 text-xl mb-8">{serv.desc}</p>
                <h2 className="text-3xl text-primary-700 font-medium mb-6">{serv.price}</h2>
                <PrimaryButton
                  text={"Pilih"}
                  width="70%"
                  disabled={index === 0 ? true : false}
                  onClick={() => {
                    window.open(`https://wa.me/6281333000312`, '_blank');
                  }}
                />
                <hr className="mt-5 mb-4" />
                <p className="text-lg font-medium mb-5">Yang Kamu Dapat</p>
                <ul className="text-start">
                  {serv.benefits.map((ben) => {
                    return (
                      <li className="mt-4 flex items-center justify-between">
                        <img src={CheckIcon} alt="" />
                        <p className="w-11/12">{ben}</p>
                        {/* <img src={InfoIcon} alt="" /> */}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
      <img src={StampImage} alt="" className='absolute -mt-40 lg:-mt-56 z-0' style={{ left: '40vw' }} />
    </>
  )
}

export default Services;