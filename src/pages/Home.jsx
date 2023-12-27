import Hero from "../components/Home/Hero";
import OrderProcess from "../components/Home/OrderProcess";
import Services from "../components/Home/Services";
import WhyUs from "../components/Home/WhyUs";

const Home = () => {
  return (
    <div >
      <Hero />
      <WhyUs />
      <Services />
      <OrderProcess />
    </div>
  )
}

export default Home;