import { useState } from "react";
import "./PlanetCard.css";

const planets = [
  {
    name: "Mercury",
    distance: "57.9 Million km",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/65/Colors_of_the_Innermost_Planet_2.jpg?_=20130623112649",
  },
  {
    name: "Venus",
    distance: "108.2 Million km",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Venus_globe.jpg/1280px-Venus_globe.jpg?_=20190107164518",
  },
  {
    name: "Earth",
    distance: "149.6 Million km",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/960px-The_Earth_seen_from_Apollo_17.jpg",
  },
  {
    name: "Mars",
    distance: "227.9 Million km",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/960px-OSIRIS_Mars_true_color.jpg",
  },
  {
    name: "Jupiter",
    distance: "778.5 Million km",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Jupiter_OPAL_2024.png/960px-Jupiter_OPAL_2024.png",
  },
  {
    name: "Saturn",
    distance: "1.43 Billion km",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Saturn_-_High_Resolution%2C_2004.jpg",
  },
  {
    name: "Uranus",
    distance: "2.87 Billion km",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg",
  },
  {
    name: "Neptune",
    distance: "4.5 Billion km",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/1280px-Neptune_Full.jpg?_=20140926142443",
  },
  {
  name: "Pluto",
  distance: "5.9 Billion km",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/1280px-Pluto_in_True_Color_-_High-Res.jpg?_=20180724051044",
}
];

function PlanetCard() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  
  return (
    <section className="planet-section">
      <div className="planet-header">
        <h2>Visualizing the Differences Between Planets</h2>
        <p>
          Each planet in our solar system has unique characteristics. Click on a
          planet to explore it.
        </p>
      </div>

      <div className="planet-grid">
        {planets.map((planet, index) => (
          <div
            key={index}
            onClick={() => setSelectedPlanet(index)}
            className={`planet-card ${
              selectedPlanet === index ? "active" : ""
            } ${
              selectedPlanet !== null && selectedPlanet !== index
                ? "inactive"
                : ""
            }`}
          >
            <div className="planet-image">
              <img src={planet.image} alt={planet.name} />
            </div>

            <div className="planet-overlay">
              <h3>{planet.name}</h3>
            </div>

            <div className="planet-content">
              <h4>{planet.name}</h4>
              <p>{planet.distance} from Sun</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PlanetCard;