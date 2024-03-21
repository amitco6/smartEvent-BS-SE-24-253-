import heroImg from "../assets/photo1.jpg";


export default function Hero() {
  return (
    <>
        <div className="hero">
            <img src={heroImg} alt="HeroImg"/>

            <div className="hero-text">
                <h1></h1>
                <p></p>
                <a href="/">Travel Plan</a>
            </div>
        </div>
    </>
  )
}
