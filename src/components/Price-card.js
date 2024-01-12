import { FaCheck } from "react-icons/fa";

export function PriceCard({ info }) {
  return (
    <>
    <article className="card">
        <header className="header-card">
            <h2>{info.header[0]}</h2>
            <p>{info.header[1]}</p>
            <img src={info.img}/>
        </header>
        <footer className="footer-card">
            <div className="texto--footer-card">
                <h3>Includes:</h3>
                <ul> 
                    {
                        info.includes.map((element, i)=>{
                        return(
                        <>
                            <span key={i}><FaCheck /> {element} </span><br />
                        </>
                        )
                        })
                    }
                </ul>
            </div>
        </footer>
        <div className="btn-card">
            <button>
            <a style={{textDecoration: "none", color: "#fff"}} href="#connect">
                Lets Talk !
            </a>
            </button>
        </div>
    </article>
    </>
  )
}
