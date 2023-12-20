import PrimaryButton from "../Button/PrimaryButton";
import CheckIcon from "../../assets/icon/check.svg"
import InfoIcon from "../../assets/icon/info-circle.svg"

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
    <div className='px-10 lg:px-20 mb-32 '>
      <h1 className='text-3xl lg:text-4xl lg:text-4xl mx-auto font-semibold text-primary-700 leading-normal mb-8'>LAYANAN KAMI</h1>
      <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-20">
        {serviceData.map((serv) => {
          return (
            <div className="bg-white w-full lg:w-1/3 rounded-3xl py-10 px-8">
              <h3 className="text-grey-900 font-semibold text-3xl mb-2">{serv.name}</h3>
              <p className="text-grey-900 text-xl mb-8">{serv.desc}</p>
              <h2 className="text-3xl text-primary-700 font-medium mb-6">{serv.price}</h2>
              <PrimaryButton
                text={"Pilih"}
                width="70%"
              />
              <hr className="mt-5 mb-4" />
              <p className="text-lg font-medium mb-5">Yang Kamu Dapat</p>
              <ul className="text-start">
                {serv.benefits.map((ben) => {
                  return (
                    <li className="mt-3 flex items-center justify-between">
                      <img src={CheckIcon} alt="" />
                      <p className="w-10/12">{ben}</p>
                      <img src={InfoIcon} alt="" />
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Services;