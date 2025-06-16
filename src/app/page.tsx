import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Values from '@/components/Values'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Values />
      <Services />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
