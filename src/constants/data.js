export const NAV_LINKS = [
  { label: 'Home',     href: '#home' },
  { label: 'Studio',   href: '#studio' },
  { label: 'Services', href: '#services' },
  { label: 'Contact',  href: '#contact' },
  { label: 'FAQs',     href: '#faqs' },
]

// Exact layout from the image: 8 people spread across row
// Large pair left, tall single, shorter pair mid, large right, pair far right
export const HERO_AVATARS = [
  { src: '/images/person6.png', w: 100, h: 100, left:  20,  top: 120, delay: '0.0s' }, // hat guy, left-bottom
  { src: '/images/person2.png', w:  88, h:  88, left: 106,  top:  76, delay: '0.4s' }, // glasses/stripe
  { src: '/images/person5.png', w: 110, h: 110, left: 230,  top:  40, delay: '0.2s' }, // dreadlocks top
  { src: '/images/person4.png', w:  90, h:  90, left: 256,  top: 140, delay: '0.8s' }, // asian model, shorter
  { src: '/images/person8.png', w:  88, h:  88, left: 440,  top:  60, delay: '0.6s' }, // glasses guy
  { src: '/images/person7.png', w:  84, h:  84, left: 520,  top: 130, delay: '1.0s' }, // asian holding item
  { src: '/images/person3.png', w: 110, h: 110, left: 650,  top:  30, delay: '0.3s' }, // bearded/light shirt
  { src: '/images/person9.png', w: 110, h: 110, left: 650,  top:  30, delay: '0.3s' }, // bearded/light shirt
  { src: '/images/person1.png', w:  95, h:  95, left: 752,  top: 110, delay: '0.7s' }, // striped shirt
]

export const SERVICES = [
  { category: 'Office of multiple interest content',          title: 'Colaborative & partnership' },
  { category: 'The hanger US Air force digital experimental', title: 'We talk about our weight' },
  { category: 'Delta faucet content, social, digital',        title: 'Piloting digital confidence' },
]

export const TESTIMONIALS = [
  { text: "Elementum  delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn't used, which have also proved to be easy to use and reliable" },
  { text: "Working with Elementum was absolutely transformative. Their team brought strategic insight and creative depth to every deliverable, helping us reach entirely new audiences far faster than we ever thought possible." },
]

export const TEST_AVS_LEFT = [
  { src: '/images/person4.png', size: 58,  top: '6%',  left: '0%',  delay: '0s'   },
  { src: '/images/person2.png', size: 50,  top: '40%', left: '-1%', delay: '0.7s' },
  { src: '/images/person6.png', size: 46,  top: '74%', left: '4%',  delay: '1.2s' },
  { src: '/images/person1.png', size: 96,  top: '70%', left: '9%',  delay: '0.4s' },
]
export const TEST_AVS_RIGHT = [
  { src: '/images/person5.png', size: 48,  top: '4%',  right: '9%', delay: '0.9s' },
  { src: '/images/person3.png', size: 62,  top: '28%', right: '0%', delay: '0.2s' },
  { src: '/images/person7.png', size: 98,  top: '65%', right: '1%', delay: '0.6s' },
]

export const FOOTER_COLS = [
  { title: 'Company',          links: ['Home','Studio','Service','Blog'] },
  { title: 'Terms & Policies', links: ['Privacy Policy','Terms & Conditions','Explore','Accesibility'] },
  { title: 'Follow Us',        links: ['Instagram','LinkedIn','Youtube','Twitter'] },
  { title: 'Terms & Policies', isContact: true,
    address: '1498w Fluton ste, STE\n2D Chicgo, IL 63867.',
    phone: '(123) 456789000', email: 'Info@elementum.com' },
]
