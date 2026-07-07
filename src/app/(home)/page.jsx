import Service from '@/components/user/Home/Service.jsx'
import TestimonialCards from '@/components/user/Home/TestimonialCards.jsx'
import Testimonials from '@/components/user/Home/Testimonials.jsx'
import About from '../../components/user/Home/About.jsx'
import Banner from '../../components/user/Home/Banner.jsx'
import Contact from '../../components/user/Home/Contact.jsx'
import Products from '../../components/user/Home/Products.jsx'
import Projects from '../../components/user/Home/Projects.jsx'
import Specilization from "../../components/user/Home/Specilization.jsx"
import Logos from '@/components/user/Home/Logos.jsx'
import Numbers from '@/components/user/Home/Numbers.jsx'

export const metadata = {
  verification: {
    google: "Q8CCTaDbZIhUDFsk1jpxGgkhimb-C6sOAKn8KoR-CRs",
  },
};

export default function Home() {
  return (
    <main className="overflow-hidden ">
      <Banner />
      <div className='bg-container relative'>
        <About />
        <Numbers />
        <Products />
        <Service />
        <Projects />
        <Specilization />
        <Testimonials />
        <TestimonialCards />
        <Logos />
        <Contact
          label="Get Started"
          heading="Ready to Elevate?"
          description="Contact us today for a free consultation and quote. Our team is ready to help you find the perfect elevator solution."
          primaryButtonText="Start a Project"
          primaryButtonLink="/reachout"
          secondaryButtonText="View Projects"
          secondaryButtonLink="/projects"
          showSecondaryButton={true}
        />
      </div>
    </main>
  )
}


