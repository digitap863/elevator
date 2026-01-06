import bgimg from '@/assests/home/bgimg.png'
import Service from '@/components/user/Home/Service.jsx'
import TestimonialCards from '@/components/user/Home/TestimonialCards.jsx'
import Testimonials from '@/components/user/Home/Testimonials.jsx'
import About from '../../components/user/Home/About.jsx'
import Banner from '../../components/user/Home/Banner.jsx'
import Products from '../../components/user/Home/Products.jsx'
import Contact from '../../components/user/Home/Contact.jsx'
import Projects from '../../components/user/Home/Projects.jsx'
  
export default function Home() {
  return (
    <main className="overflow-hidden "> 
      <Banner /> 
      <div  style={{ backgroundImage: `url(${bgimg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <About />
      <Products />
      <Service />
      <Projects />
      <Testimonials />
      <TestimonialCards />
      <Contact />
      </div>
    </main>
  )
}


