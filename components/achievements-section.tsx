"use client"

import { Trophy, Globe, Award, Leaf, X } from "lucide-react"
import { useState } from "react"

const achievements = [
  {
    title: "Eco-Certification 2024",
    description: "Awarded for our 100% pesticide-free and sustainable irrigation model.",
    icon: Leaf,
    image: "/eco-certification-award-2024.jpg",
  },
  {
    title: "Global Export Award",
    description: "Successfully bringing the taste of D'Semuten to five continents.",
    icon: Globe,
    image: "/global-export-award-certificate.jpg",
  },
  {
    title: "Community Growth",
    description: "Created over 200 sustainable jobs for the local Kampung families.",
    icon: Award,
    image: "/community-impact-award.jpg",
  },
  {
    title: "Top Kopyor Quality",
    description: "Consistently ranked as the highest grade Kopyor in the region.",
    icon: Trophy,
    image: "/quality-excellence-award.jpg",
  },
]

export function AchievementsSection() {
  const [selectedAchievement, setSelectedAchievement] = useState<number | null>(null)

  return (
    <section id="achievements" className="py-24 md:py-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-24">
          <span className="uppercase tracking-[0.4em] text-xs font-bold text-primary mb-4 block">Our Impact</span>
          <h2 className="font-serif text-5xl md:text-7xl mb-8">Marking the Future.</h2>
        </div>

        {selectedAchievement !== null ? (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-background rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-background flex justify-between items-center p-8 border-b border-foreground/10">
                <h3 className="font-serif text-3xl">{achievements[selectedAchievement].title}</h3>
                <button
                  onClick={() => setSelectedAchievement(null)}
                  className="p-2 hover:bg-accent/20 rounded-full transition-colors"
                  aria-label="Close"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-8">
                <img
                  src={achievements[selectedAchievement].image || "/placeholder.svg"}
                  alt={achievements[selectedAchievement].title}
                  className="w-full h-64 object-cover rounded-2xl mb-8"
                />
                <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                  {achievements[selectedAchievement].description}
                </p>
                <button
                  onClick={() => setSelectedAchievement(null)}
                  className="w-full bg-foreground text-background px-8 py-4 rounded-full font-medium hover:bg-primary transition-colors uppercase tracking-widest text-sm"
                >
                  Back to Achievements
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {achievements.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedAchievement(idx)}
                  className="text-left p-10 border border-foreground/10 rounded-3xl hover:bg-accent/10 transition-colors group cursor-pointer"
                >
                  <item.icon className="w-12 h-12 mb-8 text-primary group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{item.description}</p>
                </button>
              ))}
            </div>

            <div className="mt-24 p-12 bg-accent/20 rounded-[3rem] text-center">
              <h3 className="font-serif text-4xl mb-6">Is your brand ready for the taste of heritage?</h3>
              <button className="bg-foreground text-background px-12 py-5 rounded-full font-medium hover:bg-primary transition-colors uppercase tracking-widest text-sm shadow-xl">
                Partner With Us
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
