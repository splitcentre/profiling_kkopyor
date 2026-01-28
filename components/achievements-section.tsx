"use client"

import { Trophy, Globe, Award, Leaf, X, FileText } from "lucide-react"
import { useState } from "react"

const achievements = [
  {
    title: "Pemenang Lomba Penerapan Teknologi Tepat Guna (TTG) 2023",
    description: "Memenangkan lomba TTG tingkat nasional dengan Pembuatan Produk olahan Virgin Coconut Oil.",
    icon: Award,
    image: "/Photoshoot/penghargaan1.png",
    // pdf: "/eco-certification-2024.pdf",
  },
  {
    title: "Perintis Lingkungan Tingkat Kabupaten",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: Leaf,
    image: "/global-export-award-certificate.jpg",
    pdf: "/global-export-award.pdf",
  },
]

export function AchievementsSection() {
  const [selectedAchievement, setSelectedAchievement] = useState<number | null>(null)
  const [viewMode, setViewMode] = useState<"image" | "pdf">("image")

  return (
    <section id="achievements" className="py-24 md:py-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-24">
          <span className="uppercase tracking-[0.4em] text-xs font-bold text-primary mb-4 block">Prestasi</span>
          <h2 className="font-serif text-5xl md:text-7xl mb-8">Peraihan dan Penghargaan.</h2>
        </div>

        {selectedAchievement !== null ? (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-background rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
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
                {/* View Mode Toggle */}
                <div className="flex gap-4 mb-8">
                  <button
                    onClick={() => setViewMode("image")}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                      viewMode === "image"
                        ? "bg-primary text-background"
                        : "bg-accent/20 text-foreground hover:bg-accent/40"
                    }`}
                  >
                    View Image
                  </button>
                  {achievements[selectedAchievement].pdf && (
                    <button
                      onClick={() => setViewMode("pdf")}
                      className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                        viewMode === "pdf"
                          ? "bg-primary text-background"
                          : "bg-accent/20 text-foreground hover:bg-accent/40"
                      }`}
                    >
                      <FileText className="w-4 h-4" />
                      View Certificate
                    </button>
                  )}
                </div>

                {/* Image View */}
                {viewMode === "image" && (
                  <div className="mb-8 flex justify-center">
                    <img
                      src={achievements[selectedAchievement].image || "/placeholder.svg"}
                      alt={achievements[selectedAchievement].title}
                      className="w-80 h-96 object-cover rounded-2xl"
                    />
                  </div>
                )}

                {/* PDF View */}
                {viewMode === "pdf" && achievements[selectedAchievement].pdf && (
                  <div className="mb-8 bg-accent/10 rounded-2xl overflow-hidden">
                    <iframe
                      src={achievements[selectedAchievement].pdf}
                      className="w-full h-96 border-0"
                      title={`${achievements[selectedAchievement].title} Certificate`}
                    />
                  </div>
                )}

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
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
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
            </div>
          </>
        )}
      </div>
    </section>
  )
}
