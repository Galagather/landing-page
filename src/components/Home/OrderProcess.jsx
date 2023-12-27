import { useEffect, useRef } from 'react'
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
  },
  {
    title: 'Preview dan Revisi',
    desc: 'Kamu bisa set meeting online untuk melakukan preview dan meminta revisi.',
    icon: Process3Icon
  },
  {
    title: 'Pilih Paket Layanan & Kirim Data',
    desc: 'Pilih paket layanan yang sesuai dan kirim data undangan via Whatsapp.',
    icon: Process1Icon
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
    <div className='px-4 lg:px-20 pb-32 scroll-mt-24' id='process'>
      <h1 className='text-3xl lg:text-4xl mx-auto font-semibold text-primary-700 leading-normal mb-8'>BAGAIMANA PROSES ORDER?</h1>
      {/* <div className='flex flex-nowrap overflow-x-scroll flex-col lg:flex-row justify-center gap-5 lg:gap-10 bg-primary-200 w-1/2'>
        {process.map((pro, index) => {
          return (
            <div key={index} className='text-center lg:text-start bg-white w-5/6 lg:w-1/4 rounded-3xl py-7 px-6 shadow-secondary'>
              <img src={pro.icon} alt="" className='mx-auto mb-2' />
              <h3 className='text-primary-700 font-medium text-2xl mb-2'>{pro.title}</h3>
              <p className='text-grey-800 text-xl'>{pro.desc}</p>
            </div>
          )
        })}
      </div> */}
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
              className='text-center lg:text-start bg-white  rounded-3xl py-7 px-6 shadow-secondary'
              style={{
                width: 'fit-content',
              }}
            >
              <img src={pro.icon} alt="" className='mx-auto mb-2' />
              <h3 className='text-primary-700 font-medium text-2xl mb-2 mx-auto w-60 whitespace-normal'>{pro.title}</h3>
              <p className='text-grey-800 text-xl mx-auto w-60 whitespace-normal'>{pro.desc}</p>
            </div>
          )
        })}
        {/* <div
          style={{
            textAlign: 'start',
            overflowX: 'scroll',
            width: '250px',
            backgroundColor: 'green'
          }}
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores non ratione nemo qui nihil cumque consequatur impedit veritatis sit? Illum consectetur deserunt ducimus laboriosam veniam repellat sint quisquam nesciunt modi?</div> */}
      </div>
    </div>
  )
}

export default OrderProcess;