
import { Header } from "@/components/header"
import { Backhero } from "@/components/backhero"
import Backreviews from "@/components/backreviews"
import Backthird from "@/components/backthird"
import BackcombinedComponent from "@/components/backcombined"
import Backcenterimg from "@/components/backcenterimg"
import Backfour from "@/components/backfour"
import Backsix from "@/components/backsix"
import WhatSetsUsApart from "@/components/WhatSetsUsApart"
import { Backfooter } from "@/components/backfooter"
import Backchatbot from "@/components/backchatbot"
import Backvideo from "@/components/backvideo"



export default function HomePage() {
  return (
    <>
    <main className="min-h-screen">
      <Header />
      <section id="hero">
      <Backhero />
      </section>
      <section id="treatments">
      <Backthird />
      
      </section>
      <section id="who-is-this-for">
            <Backfour />
            </section>
 <section id="trust">
        <Backsix />
        </section>
        <section id="treatment-methods">
        <Backcenterimg />
        </section>
   <WhatSetsUsApart />
    <Backvideo />
      <section id="testimonials">
      <Backreviews />
      </section>
      <section id="book-your-appointment">
      <BackcombinedComponent />
      </section>
      <Backchatbot />
     <Backfooter />
    </main>
    </>
  )
}
