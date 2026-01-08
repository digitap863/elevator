import probg from '@/assests/home/probg.png'
import Banner from './Banner.jsx'
import ProductSection from './ProductSection.jsx'  
import Contact from '@/components/user/Home/Contact.jsx'

export default function About() {
  return (
    <main className="overflow-hidden "> 
      <Banner /> 
      <div  style={{ backgroundImage: `url(${probg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <ProductSection />
      <Contact />

      </div>
    </main>
  )
}


