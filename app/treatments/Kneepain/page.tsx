
import ClinicLocationMap from "@/components/maps"
import Chatbot from "@/components/chatbot"
import ComponentName from "@/components/hero-section"
import StatsComponent from "@/components/about-section"
import KneePainConditionsGrid from "@/components/fisness"
import KneePainTreatment from "@/components/consultation-section"
import PatientSuccessStories from "@/components/expertssection"
import AppointmentBanner from "@/components/appointment"
import { ConsultationModal } from "@/components/popupform"
import CombinedComponent from "@/components/combinebanmap"
import { Footer } from "@/components/footer"
import KneePainReliefCards from "@/components/scrollstak"
import Kneevideo from "@/components/kneevideo"
import { Kneeheader } from "@/components/kneeheader"



export default function HomePage() {
  return (
    <>
    <main className="min-h-screen">
      <Kneeheader />
      <section id="hero">
      <ComponentName />
      </section>
      <section id="">
      <StatsComponent />
      </section>
      <section id="treatments">
      <KneePainConditionsGrid />
      </section>
      <section id="who-is-this-for">
      <KneePainTreatment />
      </section>
      <section id="trust">
      <KneePainReliefCards />
      </section>
      <section id="reviews">
        {/* <Kneevideo /> */}
      <PatientSuccessStories />
      </section>
      <section id="book-your-appointment">
      <CombinedComponent />
      </section>
      <Chatbot />
     <Footer />
    </main>
    </>
  )
}
