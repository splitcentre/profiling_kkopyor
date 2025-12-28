import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { HistorySection } from "@/components/history-section"
import { PeopleSection } from "@/components/people-section"
import { AchievementsSection } from "@/components/achievements-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <HistorySection />
      <PeopleSection />
      <AchievementsSection />
      <Footer />
    </main>
  )
}
