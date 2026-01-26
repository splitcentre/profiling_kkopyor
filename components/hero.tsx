export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/Photoshoot/kkopyor2.jpg"
          alt="Kampung Kelapa Kopyor"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="font-serif text-6xl md:text-9xl mb-6 leading-none tracking-tighter">
          KAMPUNG <br />
          <span className="text-primary italic">KOPYOR</span> <br />
          D'SEMUTEN
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto font-light leading-relaxed mb-12">
          Website Resmi Kampung Kopyor D'Semuten.
        </p>
      </div>

      <div className="absolute bottom-10 left-0 w-full overflow-hidden border-y border-foreground/10 py-4">
        <div className="flex animate-marquee whitespace-nowrap gap-12 text-sm uppercase tracking-[0.3em] font-medium opacity-50">
          <span>
            +++ SUKUN +++ PISANG +++ KELAPA KOPYOR +++ TALAS +++ KAMPUNG KOPYOR +++
          </span>
          <span>
            +++ SUKUN +++ PISANG +++ KELAPA KOPYOR +++ TALAS +++ KAMPUNG KOPYOR +++
          </span>
        </div>
      </div>
    </section>
  )
}
