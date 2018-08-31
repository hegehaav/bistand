import React from 'react';
import '../styles/About.css';

const About = () => (

    <div className="about">
      <h1 className="title">Om serien</h1>
      <p className="text">
        Målfrid er 23 år gammel og har nettopp kommet tilbake fra utveksling i Barcelona.
        Alle vennene hennes har dratt på utveksling, så hverdangen i Trondheim viser seg å ikke være like enkel som hun håpet.
        Hun blir med i en gjeng som skal arrangere en veldedighetsfest for linjeforeningen Abakus.
        Serien kan følges på bistand.abakus.no, og karakterene kan følges på deres helt egne instagramprofiler.
      </p>

      <h1 className="title">Om veldedighetsfesten</h1>
      <div className="info">
        <p>
          Dato
          <span className="bold"> 20. Oktober </span>
        </p>
      </div>
      <div className="info">
        <p>
          Sted <span className="bold"> Sukkerhuset</span>
        </p>

      </div>
      <div className="info">
        <p >
          Påmelding
          <span className="bold"> abakus.no</span>
        </p>

      </div>
      <div className="info">
        <p >Pris
          <span className="bold"> GRATIS</span>
        </p>
      </div>
      <div className="info">
        <p>
          Info
          <span className="bold"> TBA</span>
        </p>
      </div>


      <h1 className="title">Om redaksjonen</h1>
      <div className="info">
        <p>
          <span className="bold">Målfrid Aaras </span>
          Skuespiller, designer, produsent, PR-ansvarlig
        </p>
      </div>
      <div className="info">
        <p>
          <span className="bold">Marie Haga </span>
          Skuespiller, designer, produsent, prosjektleder
        </p>
      </div>
      <div className="info">
        <p>
          <span className="bold">Hege Haavaldsen </span>
          Skuespiller, produsent, arrangementsansvarlig, nettside
        </p>
      </div>
      <div className="info">
        <p>
          <span className="bold">Ida Merete Enholm </span>
          Film
        </p>
      </div>
    </div>

)

export default About
