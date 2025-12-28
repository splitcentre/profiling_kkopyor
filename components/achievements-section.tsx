import { Trophy, Globe, Award, Leaf } from "lucide-react"

const achievements = [
  {
    title: "Eco-Certification 2024",
    description: "Awarded for our 100% pesticide-free and sustainable irrigation model.",
    icon: Leaf,
  },
  {
    title: "Global Export Award",
    description: "Successfully bringing the taste of D'Semuten to five continents.",
    icon: Globe,
  },
  {
    title: "Community Growth",
    description: "Created over 200 sustainable jobs for the local Kampung families.",
    icon: Award,
  },
  {
    title: "Top Kopyor Quality",
    description: "Consistently ranked as the highest grade Kopyor in the region.",
    icon: Trophy,
  },
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 md:py-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-24">
          <span className="uppercase tracking-[0.4em] text-xs font-bold text-primary mb-4 block">Our Impact</span>
          <h2 className="font-serif text-5xl md:text-7xl mb-8">Marking the Future.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="p-10 border border-foreground/10 rounded-3xl hover:bg-accent/10 transition-colors group"
            >
              <item.icon className="w-12 h-12 mb-8 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-accent/20 rounded-[3rem] text-center">
          <h3 className="font-serif text-4xl mb-6">Is your brand ready for the taste of heritage?</h3>
          <button className="bg-foreground text-background px-12 py-5 rounded-full font-medium hover:bg-primary transition-colors uppercase tracking-widest text-sm shadow-xl">
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  )
}
