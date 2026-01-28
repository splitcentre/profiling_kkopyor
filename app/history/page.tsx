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
              Sejarah
            </span>
          
            <p className="text-xl md:text-2xl font-serif italic text-foreground/60 leading-relaxed">
              Menelusuri transformasi Kampung Kopyor Semuten dari potensi lokal menjadi pusat inovasi teknologi dan eduwisata di Dlingo, Bantul.
            </p>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-12 font-light leading-relaxed text-foreground/80">
            <section className="space-y-6">
              <h2 className="font-serif text-3xl text-foreground">Awal Mula & Visi Lokal (2023 - 2024)</h2>
              <p>
                Perjalanan Kampung Kopyor Semuten berakar dari keberadaan pohon indukan kelapa kopyor lokal yang telah lama tumbuh di tanah Jatimulyo. Menyadari nilai ekonomi yang luar biasa, Pemerintah Kalurahan Jatimulyo bersama Kelompok Taruna Tani "Rukun Lestari" menginisiasi langkah besar dengan mengalokasikan dana APBKal untuk pembibitan massal varietas lokal guna memberdayakan ekonomi warga.
              </p>
              <div className="my-12">
                <img
                  src="/Photoshoot/kkopyor3.jpg" 
                  alt="Budidaya Kelapa Kopyor Semuten"
                  className="w-full rounded-2xl"
                />
                <p className="text-sm italic mt-4 text-center text-foreground/60">
                  Pengembangan lahan demplot kelapa kopyor sebagai pusat pembelajaran masyarakat.
                </p>
              </div>
              <p>
                Dengan komitmen untuk mengubah komoditas tradisional menjadi produk unggulan, desa ini mulai membangun identitasnya sebagai "Kampung Kopyor". Fokus utamanya bukan sekadar menanam, melainkan menciptakan ekosistem pertanian berkelanjutan yang dikelola secara kolektif oleh warga setempat.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="font-serif text-3xl text-foreground">Inovasi Teknologi Kultur Embrio</h2>
              <p>
                Loncatan besar terjadi saat Kampung Kopyor Semuten mulai mengadopsi teknologi modern melalui kolaborasi dengan Pusat Penelitian Kelapa Sawit (PPKS) Bogor. Melalui teknik Kultur Embrio, mereka berhasil mengatasi keterbatasan alamiah; jika pohon biasa hanya menghasilkan 20% buah kopyor, teknologi ini menjamin hasil panen kopyor hingga 100%.
              </p>
              <p>
                Di atas lahan Tanah Kas Desa seluas 4 hektare, ratusan bibit unggul ditanam dengan sistem tumpangsari. Integrasi antara sains dan pertanian ini tidak hanya meningkatkan produktivitas, tetapi juga menempatkan Semuten sebagai pionir pusat bibit kelapa kopyor berkualitas tinggi di wilayah Yogyakarta.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="font-serif text-3xl text-foreground">Pemberdayaan & Masa Depan Eduwisata</h2>
              <p>
                Saat ini, Kampung Kopyor Semuten telah berkembang menjadi destinasi eduwisata yang menarik minat pengunjung dari berbagai daerah. Melalui kreativitas Taruna Tani, kelapa kopyor kini hadir dalam bentuk produk olahan inovatif seperti minuman kaleng siap saji yang dipasarkan hingga ke objek wisata populer di Dlingo.
              </p>
              <p>
                Inisiatif ini mencerminkan resiliensi petani muda dalam berinovasi. Kampung Kopyor Semuten bukan sekadar tentang hasil bumi, melainkan perwujudan nyata bagaimana teknologi, kolaborasi pemerintah, dan semangat pemuda bersinergi membangun kedaulatan ekonomi desa yang membanggakan.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}