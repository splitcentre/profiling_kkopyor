export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/lush-coconut-plantation-aerial-view.jpg"
          alt="Kampung Kelapa Kopyor"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="font-serif text-6xl md:text-9xl mb-6 leading-none tracking-tighter">
          CASA <br />
          <span className="text-primary italic">KOPYOR</span> <br />
          D'SEMUTEN
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto font-light leading-relaxed mb-12">
          Preserving the heritage of the rare Kopyor coconut through sustainable farming, culture, and community growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-foreground text-background px-10 py-4 rounded-full font-medium hover:bg-primary transition-colors uppercase tracking-widest text-sm">
            Explore Heritage
          </button>
          <button className="border border-foreground px-10 py-4 rounded-full font-medium hover:bg-foreground hover:text-background transition-all uppercase tracking-widest text-sm">
            Our Process
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 w-full overflow-hidden border-y border-foreground/10 py-4">
        <div className="flex animate-marquee whitespace-nowrap gap-12 text-sm uppercase tracking-[0.3em] font-medium opacity-50">
          <span>
            +++ HERITAGE +++ SUSTAINABILITY +++ COMMUNITY +++ EXCELLENCE +++ INNOVATION +++ KAMPUNG KOPYOR +++
          </span>
          <span>
            +++ HERITAGE +++ SUSTAINABILITY +++ COMMUNITY +++ EXCELLENCE +++ INNOVATION +++ KAMPUNG KOPYOR +++
          </span>
        </div>
      </div>
    </section>
  )
}
