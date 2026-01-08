import { Instagram, Linkedin, Twitter, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
        <div>
          <h2 className="font-serif text-5xl md:text-7xl mb-12 leading-tight">Get in touch.</h2>
          <p className="text-xl text-background/60 mb-8 max-w-md font-light leading-relaxed">
            Whether you are looking for partnerships, tours, or high-quality Kopyor supply, we'd love to hear from you.
          </p>
          <a
            href="mailto:hello@dsemuten.com"
            className="text-3xl font-serif italic border-b border-background/20 pb-2 hover:text-primary hover:border-primary transition-all"
          >
            hello@dsemuten.com
          </a>

          <div className="flex gap-6 mt-12">
            <Instagram className="hover:text-primary cursor-pointer" />
            <Linkedin className="hover:text-primary cursor-pointer" />
            <Twitter className="hover:text-primary cursor-pointer" />
            <Facebook className="hover:text-primary cursor-pointer" />
          </div>
        </div>

        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-8 text-sm uppercase tracking-widest font-bold">
            <div>
              <p className="text-primary mb-4">Location</p>
              <p className="text-background/60 font-medium">
                Kampung D'Semuten
                <br />
                Central Java, Indonesia
              </p>
            </div>
            <div>
              <p className="text-primary mb-4">Inquiries</p>
              <p className="text-background/60 font-medium">
                +62 21 555 0123
                <br />
                info@dsemuten.id
              </p>
            </div>
          </div>

          <div className="bg-background/5 p-10 rounded-3xl border border-background/10">
            <p className="uppercase tracking-[0.2em] text-xs font-bold text-primary mb-6">Join our newsletter</p>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-transparent border-b border-background/20 py-2 flex-1 focus:outline-none focus:border-primary transition-colors"
              />
              <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full uppercase tracking-widest text-[10px] font-black">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="flex flex-col md:flex-row justify-between items-center px-4 py-8 border-t border-background/10 text-xs tracking-widest text-background/40 font-bold">
          <p>© 2025 KAMPUNG KOPYOR D'SEMUTEN. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8 mt-4 md:mt-0 uppercase">
            <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-white transition-colors">Terms of Use</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
