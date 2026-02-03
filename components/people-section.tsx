"use client"

import { useState } from "react"
import { X } from "lucide-react"

const team = [
  {
    name: "Iwan Haryanto",
    role: "Ketua Kelompok Tani Taruna Tani",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/Photoshoot/iwan.jpg",
    fullProfile:
      "Iwan Haryanto Merupakan ketua dari Kelompok Tani Taruna Tani yang telah memimpin berbagai inisiatif pertanian berkelanjutan di Kampung Kopyor. Iwan telah berhasil mengimplementasikan teknologi tepat guna yang meningkatkan produktivitas dan kesejahteraan petani lokal.",
  },
]

export function PeopleSection() {
  const [selectedPerson, setSelectedPerson] = useState<(typeof team)[0] | null>(null)

  const handlePersonClick = (person: (typeof team)[0]) => {
    setSelectedPerson(person)
  }

  const handleClose = () => {
    setSelectedPerson(null)
  }

  if (selectedPerson) {
    return (
      <section id="people" className="py-24 bg-foreground text-background min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto px-4 w-full">
          <button
            onClick={handleClose}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-12"
          >
            <X className="w-5 h-5" />
            <span className="uppercase tracking-widest text-xs font-bold">Back to Team</span>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden rounded-2xl h-[500px]">
              <img
                src={selectedPerson.image || "/placeholder.svg"}
                alt={selectedPerson.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-8">
              <div>
                <p className="uppercase tracking-[0.4em] text-xs font-bold text-primary mb-4">Ketua</p>
                <h2 className="font-serif text-5xl mb-2">{selectedPerson.name}</h2>
                <p className="uppercase tracking-widest text-sm text-background/60 font-bold">{selectedPerson.role}</p>
              </div>

              <p className="text-lg leading-relaxed text-background/90 font-serif italic">"{selectedPerson.bio}"</p>

              <div className="border-t border-background/20 pt-8">
                <p className="text-lg leading-relaxed text-background/80">{selectedPerson.fullProfile}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="people" className="py-24 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="uppercase tracking-[0.4em] text-xs font-bold text-primary mb-4 block">Pengurus</span>
            <h2 className="font-serif text-5xl md:text-7xl leading-tight">Pengurus Kampung Kopyor.</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((person, idx) => (
            <div key={idx} className="group cursor-pointer" onClick={() => handlePersonClick(person)}>
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
