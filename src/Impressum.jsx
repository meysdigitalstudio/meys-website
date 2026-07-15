import { Link } from "react-router-dom";
import "./App.css";

function Impressum() {
  return (
    <main className="legalPage">
      <div className="legalGlow"></div>

      <section className="legalContainer">
        <p className="sectionNumber">RECHTLICHE INFORMATIONEN</p>

        <h1>Impressum</h1>

        <div className="legalContent">

          <h2>Angaben gemäß § 5 DDG</h2>

          <p>
            <strong>Meys Digital Studio</strong>
            <br />
            Inhaber und verantwortlich für den Geschäftsbetrieb:
            <br />
            Mohamed Ali Basha
            <br />
            <br />
            Markgrafenstraße 110
            <br />
            47166 Duisburg
            <br />
            Deutschland
          </p>

          <h2>Kontakt und Kommunikation</h2>

          <p>
            Für geschäftliche Anfragen und allgemeine Anliegen stehen Ihnen
            folgende Kontaktmöglichkeiten zur Verfügung:
            <br />
            <br />

            Telefon:{" "}
            <a href="tel:+4915754591981">
              +49 1575 4591981
            </a>
            <br />

            E-Mail:{" "}
            <a href="mailto:meys2008business@gmail.com">
              meys2008business@gmail.com
            </a>
          </p>

          <h2>Umsatzsteuerliche Angaben</h2>

          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27a
            Umsatzsteuergesetz:
            <br />
            <strong>DE361756492</strong>
          </p>

          <h2>Hinweis zur Online-Präsenz</h2>

          <p>
            Meys Digital Studio präsentiert über diese Website Leistungen in
            den Bereichen Webdesign, Webentwicklung und digitale Gestaltung.
            Die auf dieser Website bereitgestellten Inhalte dienen der
            Information über das Leistungsangebot sowie der Möglichkeit zur
            geschäftlichen Kontaktaufnahme.
          </p>

        </div>

        <Link to="/" className="legalBackBtn">
          ← Zurück zur Startseite
        </Link>
      </section>
    </main>
  );
}

export default Impressum;