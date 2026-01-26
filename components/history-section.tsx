import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HistorySection() {
  return (
    <section id="history" className="py-24 px-4 md:py-40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="Photoshoot/kkopyor1.jpg"
                alt="Our History"
                className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-accent rounded-full flex items-center justify-center p-6 text-center text-sm font-serif italic text-accent-foreground leading-tight hidden md:flex">
                Established since the early generations of Kampung D'Semuten
              </div> */}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="uppercase tracking-[0.4em] text-xs font-bold text-primary mb-4 block">Tentang Kampung Kopyor</span>
            <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">Perkebunan Kopyor.</h2>
            <div className="space-y-6 text-lg font-light leading-relaxed text-foreground/80">
              <p>
                Kampung Kopyor merupakan sentra budidaya dan destinasi eduwisata unggulan di Dusun Semuten, Jatimulyo, Bantul, yang mengintegrasikan teknologi modern kultur embrio dengan pemberdayaan petani muda untuk menghasilkan kelapa kopyor berkualitas tinggi sebagai penggerak ekonomi kreatif desa.
              </p>
            </div>
            <Link
              href="/history"
              className="mt-12 group inline-flex items-center gap-3 font-serif italic text-2xl hover:text-primary transition-colors"
            >
              Informasi Lebih Lanjut <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
