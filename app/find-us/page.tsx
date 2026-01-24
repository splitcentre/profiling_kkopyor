'use client'

import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { Navbar } from '@/components/navbar'

export default function FindUsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="font-serif text-5xl md:text-6xl mb-4 text-balance">Temukan Kami</h1>
            <p className="text-xl text-foreground/70">
              Kunjungi Kampung Kelapa Kopyor D'Semuten
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-serif text-3xl mb-8">Get in Touch</h2>

                {/* Location */}
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Location</h3>
                    <p className="text-foreground/70">
                      Kampung Kelapa Kopyor D'Semuten<br />
                      Semuten, Jatimulyo, Dlingo, Bantul Regency, Special Region of Yogyakarta 55783
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary mt-1" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Phone</h3>
                    <a href="tel:+62XXX" className="text-foreground/70 hover:text-primary transition-colors">
                      +62 (XXX) XXX-XXXX
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary mt-1" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Email</h3>
                    <a href="mailto:hello@dsemuten.com" className="text-foreground/70 hover:text-primary transition-colors">
                      hello@dsemuten.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary mt-1" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Jam Kunjungan</h3>
                    <p className="text-foreground/70">
                      Senin - Jumat: 9:00 - 17:00 <br />
                      Sabtu: 10:00 - 15:00<br />
                      Minggu: Tutup
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="space-y-4">
              <h2 className="font-serif text-3xl">Location Map</h2>
              <div className="bg-accent/20 rounded-2xl overflow-hidden h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4265.948434923559!2d110.4716199829106!3d-7.90125456456618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a53d4fe056591%3A0x1c867bca41c81997!2sKampung%20Kopyor%20Jogja!5e1!3m2!1sen!2sid!4v1769255125174!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="font-serif text-3xl mb-6">Ingin Berkunjung?</h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Hubungi kami hari ini untuk mengatur kunjungan Anda ke Kampung Kelapa Kopyor D'Semuten.
            </p>
            <a
              href="mailto:hello@dsemuten.com"
              className="inline-block bg-foreground text-background px-10 py-4 rounded-full font-medium hover:bg-primary transition-colors uppercase tracking-widest text-sm"
            >
              Hubungi Kami
            </a>
        </div>
      </div>
    </main>
    </>
  )
}
