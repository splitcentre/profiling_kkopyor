import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-32 pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-bold text-primary mb-12 hover:opacity-70 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <header className="mb-16">
            <span className="uppercase tracking-[0.4em] text-xs font-bold text-primary mb-4 block">
              The Full Chronicle
            </span>
            <h1 className="font-serif text-5xl md:text-8xl mb-8 leading-tight">A Legacy Through Generations</h1>
            <p className="text-xl md:text-2xl font-serif italic text-foreground/60 leading-relaxed">
              Tracing the roots of Kampung Kelapa Kopyor D'Semuten from its humble beginnings to a regional heritage.
            </p>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-12 font-light leading-relaxed text-foreground/80">
            <section className="space-y-6">
              <h2 className="font-serif text-3xl text-foreground">The Early Seeds (1950s - 1970s)</h2>
              <p>
                The story of D'Semuten began in the post-independence era, when the elders of the village discovered a
                peculiar anomaly in their coconut harvest. While most trees produced standard coconuts, a select few
                yielded what we now know as 'Kopyor'—a natural genetic mutation where the meat is soft, crumbly, and
                detached from the shell.
              </p>
              <div className="my-12">
                <img
                  src="/vintage-farming-village-indonesia.jpg"
                  alt="Traditional farming practices"
                  className="w-full rounded-2xl grayscale"
                />
                <p className="text-sm italic mt-4 text-center text-foreground/60">
                  Traditional harvesting techniques preserved since the 1950s.
                </p>
              </div>
              <p>
                Initially considered a "spoiled" fruit by those unfamiliar with its rarity, the local farmers soon
                realized the unique culinary and cultural value of the Kopyor. It became a delicacy reserved for
                community celebrations and a symbol of nature's unexpected gifts.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="font-serif text-3xl text-foreground">Cultivation and Mastery (1980s - 2000s)</h2>
              <p>
                As the demand for Kopyor grew, the community of D'Semuten began to study the trees with scientific
                curiosity combined with ancestral wisdom. They identified which soil conditions favored the Kopyor
                mutation and began a systemic effort to protect these unique trees.
              </p>
              <p>
                This period marked the transition from accidental harvesting to intentional cultivation. The techniques
                developed during these decades—such as specific irrigation patterns and natural pest management—remain
                the cornerstone of our operations today.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="font-serif text-3xl text-foreground">Modern Heritage (2010 - Present)</h2>
              <p>
                Today, Kampung Kelapa Kopyor D'Semuten stands as a testament to sustainable branding and cultural
                preservation. We have successfully integrated modern agricultural technology while strictly adhering to
                the organic and traditional practices of our forebears.
              </p>
              <p>
                Our history is not just about a fruit; it is about the resilience of a community that saw beauty in a
                mutation and turned it into a legacy that feeds both the soul and the economy of our village.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
