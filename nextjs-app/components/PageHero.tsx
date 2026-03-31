interface PageHeroProps {
  eyebrow: string
  title: string
  description: string
}

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <div className="bg-gradient-to-br from-navy via-navy-2 to-[#204080] text-white py-11 pb-9">
      <div className="container">
        <div className="page-hero-eyebrow">{eyebrow}</div>
        <h1 className="text-[clamp(26px,3vw,36px)] font-black text-white tracking-tight mb-2">{title}</h1>
        <p className="text-white/70 text-[15px] leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
