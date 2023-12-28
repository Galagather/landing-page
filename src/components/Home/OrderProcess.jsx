import { useEffect, useRef } from 'react'
import Process1Icon from '../../assets/icon/process-1.svg'
import Process2Icon from '../../assets/icon/process-2.svg'
import Process3Icon from '../../assets/icon/process-3.svg'
import Process4Icon from '../../assets/icon/process-4.svg'
import Process5Icon from '../../assets/icon/process-5.svg'
import Process6Icon from '../../assets/icon/process-6.svg'
import ClampImage from '../../assets/image/clamp-two.png'
import line from '../../assets/icon/process-line.svg'

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
  },
  {
    title: 'Publikasi',
    desc: 'Website undanganmu akan kami publikasi sesuai design dan data yang kamu berikan.',
    icon: Process5Icon
  },
  {
    title: 'Layanan Setelah Pembelian',
    desc: 'Kami siap membantu kamu membagikan website undangan ke setiap tamu undangan agar lebih mudah.',
    icon: Process6Icon
  }
]

const OrderProcess = () => {
  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = e => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: "smooth"
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);

  return (
    <>
      <div className='relative px-4 lg:px-20 pb-32 scroll-mt-24 z-40' data-section id='process'>
        <h1
          className='flex flex-wrap justify-center gap-1 lg:gap-3 text-3xl lg:text-4xl mx-auto font-semibold text-primary-700 leading-normal'
        >
          BAGAIMANA
          <div>
            PROSES ORDER?
            <img className='' src={line} alt="" />
          </div>
        </h1>
        <br />
        <br />
        <div
          ref={elRef}
          style={{
            scrollbarWidth: 'none'
          }}
          className='flex flex-nowrap gap-8 overflow-x-scroll whitespace-nowrap w-full pb-8 px-4 '
        >
          {process.map((pro, index) => {
            return (
              <div
                key={index}
                className='group hover:cursor-pointer text-center lg:text-start bg-white  rounded-3xl py-7 px-6 shadow-secondary'
                style={{
                  width: 'fit-content',
                }}
              >
                <div className='bg-grey-100 group-hover:bg-secondary-500 rounded-full pt-0 pe-0 ps-3 pb-3 w-fit mx-auto mb-2'>
                  <img src={pro.icon} alt="" className='mx-auto' />
                </div>
                <h3 className='text-primary-700 font-medium text-2xl mb-2 mx-auto w-60 whitespace-normal'>{pro.title}</h3>
                <p className='text-grey-800 text-xl mx-auto w-60 whitespace-normal'>{pro.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
      <img src={ClampImage} alt="" className='absolute -mt-56 z-0' />
    </>
  )
}

export default OrderProcess;