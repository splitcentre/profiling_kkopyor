import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ShoppingBag, ExternalLink } from "lucide-react"
import Image from "next/image"

const marketplaces = [
  {
    name: "Tokopedia",
    description: "Link untuk Official Tokopedia",
    url: "https://tokopedia.com",
    color: "bg-[#42b549]",
    logo: "/Logo/tokopedia-logo.png",
  },
  {
    name: "Shopee",
    description: "Link untuk Official Shopee",
    url: "https://shopee.co.id",
    color: "bg-[#FF9F8C]",
    logo: "/Logo/shopee.png",
  },
  {
    name: "TikTok Shop",
    description: "Link untuk Official TikTok Shop",
    url: "https://tiktok.com",
    color: "bg-[#0095da]",
    logo: "/Logo/tiktok.png",
  }
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
              <ShoppingBag size={14} />
              Marketplace Kami
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tighter mb-8 leading-[0.9]">
              Jelajahi <br /> <span className="italic text-primary">Produk Kami</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-muted-foreground font-light leading-relaxed">
              Temukan produk resmi kami di berbagai marketplace Indonesia terkemuka.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {marketplaces.map((market) => (
              <a
                key={market.name}
                href={market.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-[2.5rem] bg-muted/30 p-10 transition-all hover:bg-muted/50 border border-border/50"
              >
                <div className="flex flex-col h-full justify-between gap-12">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-16 h-16 rounded-2xl ${market.color} p-3 flex items-center justify-center shadow-xl`}
                      >
                        <Image
                          src={market.logo || "/placeholder.svg"}
                          alt={market.name}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold tracking-tight">{market.name}</h3>
                        <p className="text-muted-foreground font-medium">{market.description}</p>
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <ExternalLink size={20} />
                    </div>
                  </div>

                  <div className="mt-auto">
                    <span className="uppercase tracking-widest text-xs font-black text-primary border-b border-primary/20 pb-1">
                      Shop Now
                    </span>
                  </div>
                </div>

                {/* Visual Flair */}
                <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
