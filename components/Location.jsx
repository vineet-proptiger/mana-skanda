'use client' 
import { useState } from 'react'

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
                  Mana Skanda The Right Life is positioned for fast access to Bangalore’s best healthcare, education, retail and tech hubs. This is the most connected address in Sarjapur Road, Bangalore East.
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
          <div className="w-full lg:flex-1" data-aos="fade-left" data-aos-delay="150" style={{ minHeight: '420px' }}>
            <div style={{
              overflow: 'hidden',
              border: '1px solid #D5C2A8',
              height: '100%', minHeight: '420px',
              position: 'relative',
              background: '#EAE5DC'
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.13332784909!2d77.7479348!3d12.899147199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0dc0ad20cbbb%3A0x68e80745218128fa!2sMana%20Skanda%20%7C%20The%20Right%20Life!5e0!3m2!1sen!2sin!4v1785316145007!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '420px', display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
              <div style={{
                position: 'absolute', bottom: '16px', left: '16px', zIndex: 10,
                background: 'var(--color-gold)', opacity: 0.9, backdropFilter: 'blur(6px)',
                borderRadius: '8px', padding: '6px 14px',
                display: 'flex', alignItems: 'center', gap: '6px',
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span style={{
                  color: '#fff', fontSize: '11px', fontFamily: F_JOST,
                  fontWeight: '700', letterSpacing: '0.04em'
                }}>
                  Sarjapur Road, Bangalore
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Location
