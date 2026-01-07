import React from 'react';
import './BachelorProsjekt.css';

const BachelorProsjekt = () => {
  return (
    <div className="bachelor-prosjekt-page">
      <div className="bachelor-prosjekt-container">
        {/* Header Section */}
        <header className="bachelor-prosjekt-header">
          <h1 className="bachelor-prosjekt-main-title">Bachelorprosjekt 2026</h1>
          <h2 className="bachelor-prosjekt-subtitle">
            Team 
            <svg 
              viewBox="0 0 24 24" 
              width="40" 
              height="40" 
              style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0 8px', transform: 'translateY(-7px)' }}
              fill="currentColor"
            >
              <text x="12" y="18" textAnchor="middle" fontSize="20" fontFamily="serif" fontStyle="italic">χ</text>
            </svg>
            - Kristiansand Kommune
          </h2>
          <p className="bachelor-prosjekt-intro">
            Denne siden inneholder oppdateringer, planlegging og dokumentasjon av vårt bachelorprosjekt 
            i samarbeid med Kristiansand Kommune. Her finner du informasjon om prosjektets mål, 
            kvalitetsaspekter og fremdrift.
          </p>
        </header>

        {/* Main Content Sections */}
        <div className="bachelor-prosjekt-content">
          
          {/* Section 1: Hva skal vi utvikle? */}
          <section className="content-section">
            <h2 className="section-title">
              Hva skal vi utvikle?
            </h2>
            <div className="section-body">
              <h3>Mikro-Drømmeplan – En plugin for enklere reguleringsplanforståelse</h3>
              
              <h4>Bakgrunn og utfordring</h4>
              <p>
                I dag opplever mange innbyggere det som vanskelig å finne ut hvilke reguleringsbestemmelser 
                som gjelder for egen tomt. Informasjonen er spredt over flere dokumenter, og det er ofte 
                nødvendig å bruke reguleringsplankartet for å finne korrekt informasjon. På landsbasis er 
                ca. 60% av alle byggesøknader mangelfulle (Digdir, 2023).
              </p>
              
              <p className="quote-text">
                <em>"De finner ikke, de forstår ikke og de får ikke de svarene de er på jakt etter når de går inn på 
                ulike søknadsløsninger på kommunen sin hjemmeside for å finne ut av hva de må gjøre og 
                hva som gjelder på sin tomt."</em> – Heidi Liv Tomren, Seniorrådgiver i KS
              </p>

              <h4>Vår løsning</h4>
              <p>
                Vi skal utvikle en <strong>MVP (Minimum Viable Product)</strong> som fungerer som en plugin-modul 
                til <strong>«Fremtidens Min Eiendom»</strong>. Løsningen gjør reguleringsplaner lettere tilgjengelige 
                ved å la innbyggere søke opp sin adresse og få presentert kun de bestemmelsene som gjelder for 
                deres spesifikke eiendom – ikke alt det andre.
              </p>
              
              <p>
                <strong>Eksempel:</strong> Hvis en innbygger ønsker å bygge en garasje, skal vår plugin automatisk 
                kunne hente relevant data fra reguleringsplanen (byggehøyde, plassering, utnyttelsesgrad osv.) 
                og visualisere dette på en forståelig måte med illustrasjoner og klarspråk.
              </p>

              <h4>To hoveddeler:</h4>
              <div className="subsection">
                <p>
                  <strong>1. Innbyggerdel:</strong> En intuitiv veiviser som presenterer reguleringsbestemmelser 
                  på en lettfattelig måte, slik at innbyggere kan forstå hva som gjelder for deres tomt uten 
                  juridisk ekspertise.
                </p>
                <p>
                  <strong>2. Saksbehandlerdel:</strong> Verktøy for kvalitetssikring hvor underliggende elementer 
                  til drømmeplanen kan kvalitetsheves tematisk gjennom strukturert metadata (hard facts/metadata 
                  kvalitetskontroll).
                </p>
              </div>

              <h4>Teknisk implementering:</h4>
              <ul className="content-list">
                <li>Plugin-funksjonaliteten implementeres på felles backend-rammeverk, men er frittstående med 
                    separate datastores og veldefinerte API-kontrakter</li>
                <li>Grensesnitt både API-basert og web-basert (mobiltilpasset og frittstående)</li>
                <li>Kommunikasjon med «Lokal LLM for saksbehandlere» for kvalitetssikring og presentasjon av 
                    drømmeplan-tematikker</li>
                <li>Tydelig presentering av datakvalitet (sikkerhet/nøyaktighet/kunstig generert/mocked data)</li>
              </ul>

              <h4>Forventet effekt</h4>
              <p>
                Løsningen skal bidra til bedre regelverksforståelse før innsending av byggesøknader, 
                færre henvendelser til kommunenes 1. linjetjenester, og en mer effektiv behandlingsprosess. 
                Pilotkommuner har allerede sett gode resultater med lignende løsninger – innbyggere kan i 
                større grad gjøre jobben selv som følge av enklere og mer tilgjengelig reguleringsinformasjon.
              </p>
            </div>
          </section>

          {/* Section 2: Viktige kvalitetsaspekter */}
          <section className="content-section">
            <h2 className="section-title">
              Viktige kvalitetsaspekter
            </h2>
            <div className="section-body">
              <p>
                Vi har identifisert tre kritiske kvalitetsaspekter for prosjektet:
              </p>
              
              <div className="quality-grid">
                <div className="quality-card">
                  <h3>Funksjonell kvalitet</h3>
                  <p>
                    Pluginen må fungere slik som den skal ved normal bruk. Dette inkluderer korrekt datautvinning 
                    fra reguleringsplaner, metadata-validering, og feilfri kommunikasjon med andre moduler via API.
                  </p>
                  <p className="quality-why">
                    <strong>Hvorfor:</strong> Som en byggeblokk som skal bygges videre på, må vår modul være 
                    stabil og pålitelig. Feil i datautvinning kan føre til feilaktige byggesøknader og tap av 
                    tillit til tjenesten.
                  </p>
                </div>

                <div className="quality-card">
                  <h3>Brukervennlighet</h3>
                  <p>
                    Løsningen må være intuitiv og forståelig for målgruppen: innbyggere uten teknisk bakgrunn 
                    som ønsker å bygge på sin eiendom, og saksbehandlere som skal kvalitetssikre plandata.
                  </p>
                  <p className="quality-why">
                    <strong>Hvorfor:</strong> Målgruppen har ofte lite kunnskaper om hvordan søkeprosessen til 
                    påbyggelse av eiendom fungerer. Hvis systemet er vanskelig å bruke, vil innbyggere fortsatt 
                    være avhengige av manuell hjelp fra kommunen, noe som motvirker digitaliseringsmålet.
                  </p>
                </div>

                <div className="quality-card">
                  <h3>Stabilitet og ytelse</h3>
                  <p>
                    Systemet skal ha konsistent oppetid, håndtere flere samtidige brukere, og ha rask responstid. 
                    API-endepunkter må være stabile og tilgjengelige for andre moduler.
                  </p>
                  <p className="quality-why">
                    <strong>Hvorfor:</strong> Dette skal være en byggeblokk som skal bygges videre på. Ustabilitet 
                    eller dårlig ytelse i vår komponent vil påvirke hele økosystemet negativt og hindre andre team 
                    i SAFe-train-samarbeidet.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Måling av kvalitet */}
          <section className="content-section">
            <h2 className="section-title">
              Måling av kvalitet
            </h2>
            <div className="section-body">
              <p>
                For å vite i hvilken grad ønsket kvalitet er oppnådd, vil vi gjøre mye tester underveis i prosjektet:
              </p>
              
              <ul className="content-list">
                <li>
                  <strong>Enhets- og integrasjonstester:</strong> Kontinuerlig testing av komponenter for å sikre 
                  funksjonell kvalitet
                </li>
                <li>
                  <strong>Brukertesting:</strong> Tester med faktiske brukere (innbyggere og saksbehandlere) for 
                  å validere brukervennlighet
                </li>
                <li>
                  <strong>Ytelsestesting:</strong> Måling av responstider og systemstabilitet
                </li>
                <li>
                  <strong>Cross-team testing:</strong> Testing mot de andre gruppenes prosjekter («Lokal LLM», 
                  «DiBK veiviser», «Fremtidens Min Eiendom») for å sikre at det fungerer på tvers av oppgaver
                </li>
                <li>
                  <strong>API-testing:</strong> Validering av alle API-endepunkter for korrekt funksjonalitet 
                  og feilhåndtering
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4: Planer, backlog og kontroll */}
          <section className="content-section">
            <h2 className="section-title">
              Planer, backlog og kontroll
            </h2>
            <div className="section-body">
              <h3>Arbeidsmetodikk</h3>
              <p>
                Vi jobber agilt i et <strong>SAFe train</strong> med tre andre team som gjør ulike oppgaver som 
                ikke er avhengig av hverandre, men inngår i hverandre. Vi skal jobbe med <strong>Program Increments 
                (PI)</strong> på 7 uker, totalt 4 PI-er gjennom bachelorperioden.
              </p>
              
              <p>
                Innenfor disse 7 ukene bruker vi <strong>Scrum med to 3-ukers sprinter</strong>. Dette gjør at 
                vi kan se hvor langt vi har kommet halvveis i PI og fortsette i samme tempo eller endre planen underveis.
              </p>

              <div className="subsection">
                <h3>Kvalitetssikring av plan</h3>
                <p>Vi sikrer at planene våre er realistiske gjennom:</p>
                <ul className="content-list">
                  <li><strong>Sprint Planning:</strong> Definerer konkrete mål og trekker oppgaver fra backloggen</li>
                  <li><strong>Daily Standups:</strong> Daglige møter for å synkronisere arbeid og identifisere hindringer</li>
                  <li><strong>Sprint Review:</strong> Evaluerer hva som er levert halvveis i PI og justerer ved behov</li>
                  <li><strong>PI Planning møter:</strong> Alle fire team planlegger sammen og koordinerer avhengigheter</li>
                </ul>
              </div>

              <div className="subsection">
                <h3>Kvalitetssikring av backlog</h3>
                <p>For å sikre en god backlog:</p>
                <ul className="content-list">
                  <li><strong>Klart definerte elementer:</strong> Hver oppgave har tydelig beskrivelse og 
                      akseptansekriterier</li>
                  <li><strong>Definition of Done (DoD):</strong> Alle oppgaver må oppfylle DoD før de regnes som 
                      ferdige (kode testet, dokumentasjon oppdatert, code review gjennomført)</li>
                  <li><strong>Backlog Refinement:</strong> Regelmessige møter hvor teamet går gjennom kommende 
                      oppgaver og finjusterer beskrivelser</li>
                  <li><strong>Fellesforståelse:</strong> Alle deltar for å sikre samme forståelse av oppgavene</li>
                </ul>
              </div>

              <div className="subsection">
                <h3>Estimater og timerapportering</h3>
                <p>
                  Ved å bruke 3-ukers sprinter innenfor hver 7-ukers PI vil det være enkelt å vite hvor man er 
                  i forhold til målene som er satt til PI. Vi bruker:
                </p>
                <ul className="content-list">
                  <li><strong>Story Points:</strong> For å estimere kompleksitet og innsats</li>
                  <li><strong>Velocity tracking:</strong> Måler hvor mange story points teamet fullfører per sprint</li>
                  <li><strong>Timerapportering:</strong> Daglig logging av arbeidstid gir innsikt i ressursbruk</li>
                  <li><strong>Burndown charts:</strong> Visualiserer gjenstående arbeid for tidlig å identifisere problemer</li>
                </ul>
              </div>

              <div className="subsection">
                <h3>Effektiv ressursutnyttelse</h3>
                <p>Ressursene er utnyttet på en god måte når:</p>
                <ul className="content-list">
                  <li>Alle oppgaver leveres innen satt tid</li>
                  <li>Det ikke er mye ventetid mellom oppgavene</li>
                  <li>Prosjektet oppfyller alle kvalitetskrav</li>
                  <li>Teammedlemmer har klare, prioriterte oppgaver å jobbe med</li>
                  <li>Vi ikke blokkerer andre team i SAFe-train-samarbeidet</li>
                </ul>
              </div>
            </div>
          </section>

        </div>

        {/* Footer Info */}
        <div className="bachelor-prosjekt-footer">
          <p className="footer-note">
            <strong>Sist oppdatert:</strong> 7. januar 2026
          </p>
          <p className="footer-contact">
            Spørsmål om prosjektet? <a href="/#kontakt">Ta kontakt med oss</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BachelorProsjekt;
