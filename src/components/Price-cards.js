import { PriceCard } from "./Price-card"

export function PriceCards() {

    const cardsInfo = {
        card1: {
            header: ["Basic","A single web site"],
            img: "https://w0.peakpx.com/wallpaper/448/960/HD-wallpaper-blue-liquid-design-abstract-black-colors-cream-flow-lava-magma-mix.jpg", 
            includes: ["A landing web page","Responsive"]
        },
        card2: {
            header: ["Standar","Your own website"],
            img: "https://w0.peakpx.com/wallpaper/389/172/HD-wallpaper-green-liquid-abstract-black-cream-flow-lava-oil.jpg", 
            includes: ["A landing web page","Design Customization","Responsive"]
        },
        card3: {
            header: ["Premium","Personalize your website"],
            img: "https://w0.peakpx.com/wallpaper/917/58/HD-wallpaper-red-lava-flow-abstract-black-colorful-colors-fire-liquid-volcano.jpg", 
            includes: ["A landing web page","Design Customization","Responsive","Docuemntation","Meeting","Figma Design"]
        }
    }
    
  return (
    <section className="cards" id="plans">
        <div style={{textAlign: "center"}}>
            <h1 style={{fontSize: "70px"}}>Plans</h1><br />
            <p style={{fontSize: "20px", color: "#aaa"}}>Take a look to some of the default plans we can discuss</p>
        </div>
        <div className="container-cards">
            <PriceCard key={1} info={cardsInfo.card1}/>
            <PriceCard key={2} info={cardsInfo.card2}/>
            <PriceCard key={3} info={cardsInfo.card3}/>
        </div>
    </section>
  )
}
