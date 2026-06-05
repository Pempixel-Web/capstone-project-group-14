// Planet table component by Izic1234
import "./Planettable.css";

function Planettable() {
  return (
    <div className="table-wrapper">
      <h1>Planetary Facts at a Glance</h1><br></br>
      <p>Below is a comparative table of major planets in our solar system
        . The data highlights key physical <br></br> properties used by astronomers and researchers worldwide. 
      </p><br></br><br></br>
      <p> <strong>Data about the planets of our solar system (Planetary facts were taken from NASA)</strong> </p>
      <br></br>
      <table>
        <thead>
          <tr>
            <th colSpan="2"></th>
            <th>Name</th>
            <th>Mass (10 24kg)</th>
            <th>Diameter (km)</th>
            <th>Density (kg/m3)</th>
            <th>Gravity (m/s2)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="group terrestial" colSpan="2" rowSpan="4">Terrestial Planets</td>
            <td>Mercury</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>
          <tr>
            <td>Venus</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>
          <tr>
            <td>Earth</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>
          <tr>
            <td>Mars</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>
          <tr>
            <td className="group jovian" rowSpan="4">Jovian<br/>Planets</td>
            <td className="group gas-giants" rowSpan="2">Gas Giants</td>
            <td>Jupiter</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>
          <tr>
            <td>Saturn</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>
          <tr>
            <td className="group ice-giants" rowSpan="2">Ice Giants</td>
            <td>Uranus</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>
          <tr>
            <td>Neptune</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>
          <tr>
            <td className="group dwarf" colSpan="2">Dwarf Planets</td>
            <td>Pluto</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Planettable;