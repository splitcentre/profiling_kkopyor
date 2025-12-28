const team = [
  {
    name: "Pak Sudarmo",
    role: "Lead Cultivator",
    bio: "With over 40 years of experience, he is the heart of our plantation knowledge.",
    image: "/portrait-of-elderly-indonesian-farmer.jpg",
  },
  {
    name: "Ibu Ratna",
    role: "Community Director",
    bio: "Pioneering sustainable practices and empowerment for local women in D'Semuten.",
    image: "/portrait-of-smiling-indonesian-woman-farmer.jpg",
  },
  {
    name: "Aris Wijaya",
    role: "Innovation Lead",
    bio: "Merging modern irrigation techniques with traditional organic farming methods.",
    image: "/young-indonesian-agronomist-portrait.jpg",
  },
]

export function PeopleSection() {
  return (
    <section id="people" className="py-24 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="uppercase tracking-[0.4em] text-xs font-bold text-primary mb-4 block">The Guardians</span>
            <h2 className="font-serif text-5xl md:text-7xl leading-tight">People Behind the Palms.</h2>
          </div>
          <p className="max-w-md text-background/60 text-lg leading-relaxed">
            Our community is built on the hard work of dedicated individuals who treat every tree as a member of the
            family.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((person, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6 h-[450px]">
                <img
                  src={person.image || "/placeholder.svg"}
                  alt={person.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <p className="text-white text-lg italic font-serif leading-relaxed">"{person.bio}"</p>
                </div>
              </div>
              <h3 className="text-2xl font-serif mb-1">{person.name}</h3>
              <p className="uppercase tracking-widest text-xs text-primary font-bold">{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
