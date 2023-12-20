import Process1Icon from '../../assets/icon/process-1.svg'
import Process2Icon from '../../assets/icon/process-2.svg'
import Process3Icon from '../../assets/icon/process-3.svg'
import Process4Icon from '../../assets/icon/process-4.svg'

const process = [
  {
    title: 'Pilih Paket Layanan & Kirim Data',
    desc: 'Pilih paket layanan yang sesuai dan kirim data undangan via Whatsapp.',
    icon: Process1Icon
  },
  {
    title: 'Pemilihan Tema dan Design',
    desc: 'Pilih tema dan design yang kamu inginkan, dan kami akan buatkan.',
    icon: Process2Icon
  },
  {
    title: 'Preview dan Revisi',
    desc: 'Kamu bisa set meeting online untuk melakukan preview dan meminta revisi.',
    icon: Process3Icon
  },
  {
    title: 'Pembayaran',
    desc: 'Lakukan pembayaran sesuai tagihan dari paket layanan yang dipilih.',
    icon: Process4Icon
  }
]

const OrderProcess = () => {
  return (
    <div className='px-4 lg:px-20 pb-32'>
      <h1 className='text-3xl lg:text-4xl mx-auto font-semibold text-primary-700 leading-normal mb-8'>BAGAIMANA PROSES ORDER?</h1>
      <div className='flex flex-col lg:flex-row justify-center gap-5 lg:gap-10'>
        {process.map((pro, index) => {
          return (
            <div key={index} className='text-center lg:text-start mx-auto bg-white w-5/6 lg:w-1/4 rounded-3xl py-7 px-6 shadow-secondary'>
              <img src={pro.icon} alt="" className='mx-auto mb-2' />
              <h3 className='text-primary-700 font-medium text-2xl mb-2'>{pro.title}</h3>
              <p className='text-grey-800 text-xl'>{pro.desc}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default OrderProcess;