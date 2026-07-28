'use client'

const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const BORDER_COLOR = '#D5C2A8'
const BG = 'var(--color-cream-bg)' // #EAE5D9


/* Curved concave notch at each corner of the border box */
const CurvedCorners = ({ bg = BG }) => {
  const corners = [
    // top-left  → curve goes bottom-right
    {
      top: '-1px', left: '-1px',
      borderRight: `1px solid ${BORDER_COLOR}`,
      borderBottom: `1px solid ${BORDER_COLOR}`,
      borderBottomRightRadius: '18px'
    },
    // top-right → curve goes bottom-left
    {
      top: '-1px', right: '-1px',
      borderLeft: `1px solid ${BORDER_COLOR}`,
      borderBottom: `1px solid ${BORDER_COLOR}`,
      borderBottomLeftRadius: '18px'
    },
    // bottom-left → curve goes top-right
    {
      bottom: '-1px', left: '-1px',
      borderRight: `1px solid ${BORDER_COLOR}`,
      borderTop: `1px solid ${BORDER_COLOR}`,
      borderTopRightRadius: '18px'
    },
    // bottom-right → curve goes top-left
    {
      bottom: '-1px', right: '-1px',
      borderLeft: `1px solid ${BORDER_COLOR}`,
      borderTop: `1px solid ${BORDER_COLOR}`,
      borderTopLeftRadius: '18px'
    },
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

/* Custom architectural SVG icons matching each card heading */
const IconFoyer = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M9 21V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v12M14 15h.01" />
  </svg>
)

const IconMarble = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M9 21V9M15 9V3M3 15h12M15 15v6" />
  </svg>
)

const IconWood = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M2 10h20M2 16h20M8 10V4M16 16v-6M10 20v-4" />
  </svg>
)

const IconWardrobe = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v2M12 5l-8 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-8-4zM6 13v8M18 13v8M3 21h18" />
  </svg>
)

const IconSuite = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 18v-4h20v4M2 14v-4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4M6 8V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2M4 18v2M20 18v2" />
  </svg>
)

const IconKitchen = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2h12l-1 6H7L6 2zM4 8h16M3 12h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8zM8 16h8" />
    <circle cx="9" cy="16" r="1" />
    <circle cx="15" cy="16" r="1" />
  </svg>
)

const IconDoor = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="3" width="14" height="18" rx="2" />
    <line x1="12" y1="3" x2="12" y2="21" />
    <circle cx="10" cy="12" r="0.5" fill="white" />
    <circle cx="14" cy="12" r="0.5" fill="white" />
    <path d="M3 21h18" />
  </svg>
)

const IconLightGreen = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <line x1="12" y1="4" x2="12" y2="20" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <path d="M15 7.5a2.5 2.5 0 0 1 3-3M7 7.5a2.5 2.5 0 0 0-2-2" />
  </svg>
)

const highlights = [
  { title: 'REFINED SENSE OF ARRIVAL', desc: 'A long foyer for a refined sense of arrival.', Icon: IconFoyer },
  { title: 'IMPORTED MARBLE FLOORING', desc: 'Imported marble flooring in living spaces.', Icon: IconMarble },
  { title: 'ENGINEERED WOOD FLOORING', desc: 'Engineered wood flooring across all bedrooms.', Icon: IconWood },
  { title: 'WALK-IN WARDROBES', desc: 'Walk-in wardrobes in key bedrooms.', Icon: IconWardrobe },
  { title: 'PRIVATE RETREAT SUITE', desc: 'A private retreat suite with its own balcony.', Icon: IconSuite },
  { title: 'SPACIOUS LUXURY KITCHEN', desc: 'Spacious kitchen with a dedicated utility area.', Icon: IconKitchen },
  { title: 'FULL-HEIGHT 8-FOOT DOORS', desc: 'Full-height 8-foot doors throughout.', Icon: IconDoor },
  { title: 'NATURAL LIGHT & GREEN VIEWS', desc: 'Large openings that flood every room with natural light, air and green views.', Icon: IconLightGreen },
]

const Highlights = ({ setIsOpen }) => (
  <section id="highlights" style={{ background: BG, padding: '60px 0 72px' }}>
    <div className="px-4 sm:px-8" style={{ maxWidth: '1200px', margin: '0 auto' }}>

      {/* Heading */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 data-aos="flip-left" data-aos-delay="300" style={{
          fontFamily: F_JOST, fontWeight: '700', fontSize: '17px',
          color: '#684C1B', letterSpacing: '0.1em',
          textTransform: 'uppercase', margin: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          Designed for Comfort, Wellness &amp; Leisure At Mana Skanda The Right Life
        </h2>
      </div>

      {/* Bordered container with curved concave corner notches */}
      <div
        style={{
          position: 'relative',
          border: `1px solid ${BORDER_COLOR}`,
          overflow: 'hidden',
        }}
      >
        <CurvedCorners bg={BG} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[1px]" style={{ background: BORDER_COLOR }}>
          {highlights.map(({ title, desc, Icon }, i) => (
            <div key={i} style={{
              padding: '36px 20px 28px',
              textAlign: 'center',
              background: BG,
            }}>
              {/* Dark red circle */}
              <div style={{
                width: '80px', height: '80px', borderRadius: '50%',
                background: 'var(--color-brand)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 24px',
              }}>
                <Icon />
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: F_JOST, fontSize: '12.5px', fontWeight: '700',
                color: '#3A2A0E', letterSpacing: '0.1em',
                textTransform: 'uppercase', margin: '0 0 12px',
              }}>{title}</h3>

              {/* Description */}
              <p style={{
                fontFamily: F_SANS, fontSize: '13px',
                color: '#4A4540',
                lineHeight: 1.65, margin: 0,
              }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  </section>
)

export default Highlights
