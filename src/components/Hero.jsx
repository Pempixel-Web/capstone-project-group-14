import './Hero.css';
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          Explore Our Solar
          System Through Data
        </h1>
        <p>
          Understand the planets not just by name,
           but by measurable facts.
            From size and mass to gravity and density, 
            this page breaks down the solar system in a clear, data-driven way..
        </p>
        <div className="hero-buttons">
          <a href="#PlanetsCards" className="Explore-btn">
            Explore the Data
          </a>
          <a href="#contact-header" className="contact-btn">
            Contact Us
          </a>
        </div>
      </div>
      <figure className="hero-image">
        <img src="/planet.png" alt="Planet Earth" />
        <figcaption>
          A stunning view of our planet Earth.
        </figcaption>
      </figure>
    </section>
  );
}