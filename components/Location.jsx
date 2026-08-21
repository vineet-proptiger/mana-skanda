'use client' 
import { useState } from 'react'
import Image from 'next/image'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

const locationItems = [
  { name: 'Wipro Corporate Office', dist: '9 km' },
  { name: 'RGA Tech Park', dist: '8 km' },
  { name: 'RMZ EcoWorld', dist: '12 km' },
  { name: 'Greenwood High International School', dist: '4 kms' },
  { name: 'Oakridge International School', dist: '7 kms' },
  { name: 'Inventure Academy', dist: '4 kms' },
  { name: 'Manipal Hospital Sarjapur', dist: '13 km' },
  { name: 'Apollo Hospital Sarjapur Road', dist: '11 km' },
  { name: 'Carmelaram Railway Station', dist: '8 km' },
  { name: 'Kempegowda International Airport', dist: '48 km' },
]

const Location = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  return (
    <section id="location" style={{
      padding: '72px 0',
      background: '#EAE5DC', // Matched to the screenshot background
    }}>
      <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">

        {/* Section Header */}
        <div style={{ marginBottom: '40px', textAlign: 'center' }} data-aos="fade-up">
           <h2 style={{
             fontFamily: F_JOST, fontWeight: '700', fontSize: '18px',
             color: '#684C1B', letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0,
             display: 'flex', alignItems: 'center', justifyContent: 'center',
           }}>
             LOCATION ADVANTAGES
           </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">

          {/* LEFT — Accordion */}
          <div className="w-full lg:w-[45%]" data-aos="fade-right" data-aos-delay="100">
            <div style={{ border: '1px solid #D5C2A8', background: '#EAE5DC' }}>

              {/* <div style={{ padding: '26px 24px', background: '#FFF9F0', borderBottom: '1px solid #D5C2A8' }}>
                <p style={{
                  fontFamily: F_JOST, fontWeight: '700', fontSize: '16px',
                  color: '#684C1B', margin: 0, lineHeight: 1.4,
                  textTransform: 'uppercase', letterSpacing: '0.08em'
                }}>
                  Prime Connectivity in Sarjapur Road
                </p>
                <p style={{
                  fontFamily: F_SANS, fontWeight: '500', fontSize: '14px',
                  color: '#674B1A', margin: '14px 0 0', lineHeight: '1.7rem'
                }}>
                 Mana The Right Life is positioned for fast access to Bangalore’s best healthcare, education, retail and tech hubs. This is the most connected address in Sarjapur Road, Bangalore East.
                </p>
              </div> */}

              {/* Table Header */}
              <div style={{
                display: 'grid', gridTemplateColumns: '1.2fr 1fr',
                background: '#000000', color: '#fff',
                fontFamily: F_JOST, fontWeight: '600', fontSize: '13.5px',
                letterSpacing: '0.04em', textTransform: 'uppercase',
                borderBottom: '1px solid #D5C2A8',
              }}>
                <div style={{ padding: '10px 16px', borderRight: '1px solid #D5C2A8' }}>LANDMARK</div>
                <div style={{ padding: '10px 16px', textAlign: 'center' }}>TIME / DISTANCE</div>
              </div>

              {/* Flat List */}
              <div>
                {locationItems.map((item, i) => (
                  <div key={i} style={{
                    display: 'grid', gridTemplateColumns: '1.2fr 1fr',
                    background: i % 2 === 0 ? '#F4EFE6' : '#EAE5DC',
                    color: '#684C1B', fontFamily: F_SANS,
                    fontSize: '13px', fontWeight: '600',
                    borderBottom: '1px solid #D5C2A8',
                  }}>
                    <div style={{ padding: '12px 16px', borderRight: '1px solid #D5C2A8', display: 'flex', alignItems: 'center' }}>
                      {item.name}
                    </div>
                    <div style={{ padding: '12px 16px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {item.dist}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* RIGHT — Map */}
          <div className="w-full lg:flex-1 flex flex-col justify-center" data-aos="fade-left" data-aos-delay="150">
            <div 
              className="overflow-hidden border border-[#D5C2A8] bg-[#EAE5DC] relative flex items-center justify-center w-full h-full min-h-[350px] lg:min-h-[400px] cursor-pointer"
              onClick={() => setIsLightboxOpen(true)}
            >
              {/* Display location map image responsively without cropping */}
              <Image
                src="/images/location/location.webp"
                alt="Mana Skanda - Location Map & Prime Connectivity"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />

              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 bg-[var(--color-gold)] opacity-95 backdrop-blur-[6px] rounded-lg py-1.5 px-3 sm:py-1.5 sm:px-3.5 flex items-center gap-1.5 shadow-sm">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-white text-[11px] font-bold tracking-[0.04em]" style={{ fontFamily: F_JOST }}>
                  Sarjapur Road, Bangalore
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* Lightbox for Location Map */}
      {isLightboxOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 99999,
          background: 'rgba(0,0,0,0.85)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '20px'
        }} onClick={() => setIsLightboxOpen(false)}>
          <button style={{
            position: 'absolute', top: '30px', right: '30px',
            background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', 
            borderRadius: '50%',
            width: '44px', height: '44px', color: '#fff', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 100000, transition: 'all 0.2s'
          }} onClick={(e) => { e.stopPropagation(); setIsLightboxOpen(false); }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <div style={{ position: 'relative', width: '100%', maxWidth: '1200px', height: '90vh' }} onClick={(e) => e.stopPropagation()}>
            <Image src="/images/location/location.webp" alt="Mana Skanda Location Map Full" fill style={{ objectFit: 'contain' }} />
          </div>
        </div>
      )}
    </section>
  )
}

export default Location
