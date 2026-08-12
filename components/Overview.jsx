'use client'

import { useState } from 'react'
import Image from 'next/image'
import { overviewImage } from '../lib/images'

const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'



/* Curved concave notch at each corner of the info box */
const CurvedCorners = ({ bg = '#fff' }) => {
  const corners = [
    { top: '-1px', left: '-1px', borderRight: '1px solid #D5C2A8', borderBottom: '1px solid #D5C2A8', borderBottomRightRadius: '18px' },
    { top: '-1px', right: '-1px', borderLeft: '1px solid #D5C2A8', borderBottom: '1px solid #D5C2A8', borderBottomLeftRadius: '18px' },
    { bottom: '-1px', left: '-1px', borderRight: '1px solid #D5C2A8', borderTop: '1px solid #D5C2A8', borderTopRightRadius: '18px' },
    { bottom: '-1px', right: '-1px', borderLeft: '1px solid #D5C2A8', borderTop: '1px solid #D5C2A8', borderTopLeftRadius: '18px' },
  ]

  return corners.map((c, i) => (
    <span key={i} style={{
      position: 'absolute', ...c,
      width: '22px', height: '22px',
      background: bg,
      display: 'block',
    }} />
  ))
}

const infoItems = [
  { label: 'Project Status', value: 'New Launch', highlight: false },
  { label: 'Residential',       value: 'G+32 Tower', highlight: false },
  { label: 'Configurations', value: '2, 3 & 4 BHK', highlight: false },
  { label: 'Township Area',    value: '100 Acres', highlight: true },
]

const Overview = ({ setIsOpen }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  
  return (
    <section
      id="overview"
      style={{ scrollMarginTop: '80px', background: '#fff', padding: '72px 0 80px', borderBottom: '1px solid #f0ede6' }}
    >
      <div className="container mx-auto px-4 sm:px-8 max-w-[1200px]">
      
      {/* ── Mobile Section Heading ── */}
      <div className="block lg:hidden" style={{ marginBottom: '32px', textAlign: 'left' }}>
        <h2 data-aos="flip-right" data-aos-delay="500" style={{
          fontFamily: F_JOST, fontWeight: '700', fontSize: '17px',
          color: '#3A2A0E', letterSpacing: '0.1em',
          textTransform: 'uppercase', margin: '0 0 10px 0',
          display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px'
        }}>
          Welcome to Mana The Right Life
        </h2>
        <h3 style={{
          fontFamily: F_JOST, fontWeight: '500', fontSize: '14px',
          color: '#C9A96E', letterSpacing: '0.05em',
          textTransform: 'capitalize', margin: 0,
        }}>
          The Right Life – Bengaluru's Largest Child-Centric Township
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-14">
        
        {/* ── Left Side: Text Content ── */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          
          {/* ── Desktop Section Heading ── */}
          <div className="hidden lg:block" style={{ marginBottom: '40px', textAlign: 'left' }}>
            <h2 data-aos="flip-right" data-aos-delay="500" style={{
              fontFamily: F_JOST, fontWeight: '700', fontSize: '17px',
              color: '#3A2A0E', letterSpacing: '0.1em',
              textTransform: 'uppercase', margin: '0 0 10px 0',
              display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px'
            }}>
              Welcome to Mana The Right Life
            </h2>
            <h3 style={{
              fontFamily: F_JOST, fontWeight: '500', fontSize: '14px',
              color: '#C9A96E', letterSpacing: '0.05em',
              textTransform: 'capitalize', margin: 0,
            }}>
              The Right Life – Bengaluru's Largest Child-Centric Township
            </h3>
          </div>
          
          {/* Paragraphs */}
          <div data-aos="flip-down" data-aos-delay="500" style={{ marginBottom: '24px' }}>
            <p style={{
              fontFamily: F_SANS, fontSize: '14.5px', color: '#4A4540',
              lineHeight: 1.9,
              marginTop: 0, marginBottom: '8px',
              textAlign: 'justify',
            }}>
              {isExpanded ? (
                <>The Right Life is a prestigious residential development by Mana Skanda, thoughtfully designed around the needs of growing families. Located on Sarjapur-varthur Road in Bangalore East, this expansive, master-planned township brings together child-centric living, abundant open spaces, thoughtfully designed amenities, and world-class craftsmanship. Built with love and foresight, every home at The Right Life is designed to create a nurturing environment where children can learn, explore, play, and grow while families enjoy a refined and peaceful lifestyle. From thoughtfully planned spaces to enriching experiences, every detail reflects Mana Skanda’s commitment to creating homes that truly put family and childhood at the heart of everyday living. Offering luxurious <strong style={{ color: '#C9A96E' }}>2, 3 & 4 BHK homes</strong>, The Right Life provides the perfect balance of tranquillity and connectivity, with reputed schools, major technology hubs, healthcare, and everyday conveniences within easy reach.</>
              ) : (
                <>The Right Life is a prestigious residential development by Mana Skanda, thoughtfully designed around the needs of growing families. Located on Sarjapur-varthur Road in Bangalore East, this expansive, master-planned township brings together child-centric living, abundant open spaces, thoughtfully designed amenities, and world-class craftsmanship. Built with love and foresight, every home at The Right Life is designed to create a...</>
              )}
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                style={{
                  fontFamily: F_JOST, fontSize: '13px', fontWeight: '600',
                  color: '#C9A96E', cursor: 'pointer', background: 'none', border: 'none', padding: 0,
                  textDecoration: 'underline', textUnderlineOffset: '4px', marginLeft: '6px'
                }}
                className="hover:text-[#a08451] transition-colors inline-block"
              >
                {isExpanded ? 'Read Less' : 'Read More'}
              </button>
            </p>
          </div>

          {/* Info Box */}
          <div
            className="block mt-6 lg:mt-4"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-offset="0"
            style={{
              position: 'relative',
              border: '1px solid #D5C2A8',
              overflow: 'hidden',
            }}
          >
            <CurvedCorners />

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-[1px]" style={{ background: '#D5C2A8' }}>
            {infoItems.map((item, i) => (
              <div key={i} className="flex flex-col justify-center" style={{
                background: '#FFFDF2',
                padding: '18px 12px',
                textAlign: 'left',
              }}>
                <div data-aos="fade" data-aos-delay={600 + i * 150} data-aos-duration="800">
                  <p style={{
                    fontFamily: F_JOST, fontSize: '11px', fontWeight: '600',
                    color: '#9E8B75', letterSpacing: '0.06em',
                    textTransform: 'uppercase', margin: '0 0 6px',
                  }}>
                    {item.label}
                  </p>
                  <p className="whitespace-normal" style={{
                    fontFamily: F_JOST, fontSize: '13.5px', fontWeight: '700',
                    color: '#3A2A0E', letterSpacing: '0.04em',
                    textTransform: 'uppercase', margin: 0,
                  }}>
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
            </div>
          </div>

        </div>

        {/* ── Right Side: Image ── */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 order-1 lg:order-2" data-aos="fade-left">
          <div className="relative w-full flex justify-center items-center">
            <Image 
              src={overviewImage} 
              alt="Mana Skanda The Right Life Overview" 
              width={1000}
              height={1200}
              className="w-[95%] lg:w-[75%] h-auto object-contain mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

      </div>
    </div>
  </section>
  )
}

export default Overview
