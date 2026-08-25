/**
 * Design reminder — PassaAqui: o mapa é uma missão editorial ilustrada, não um Google Maps.
 * Usar pins, rotas e cartelas escuras para revelar oportunidade e recompensa em cada bairro.
 */

import { Compass, MapPin, Navigation, Plus } from "lucide-react";
import map from "../../assets/map/map-sample.webp";

const missions = [
  { area: "Recife Antigo", task: "Marco histórico", xp: "+150 XP", position: "map-pin--one" },
  { area: "São José", task: "Oficina local", xp: "+100 XP", position: "map-pin--two" },
  { area: "Santo Antônio", task: "Experiência cultural", xp: "+80 XP", position: "map-pin--three" },
  { area: "Boa Vista", task: "Comércio de rua", xp: "+50 XP", position: "map-pin--four" },
];

export default function MissionMap() {
  return (
    <section className="map-section" id="mapa">
      <div className="page-frame map-section__frame">
        <div className="map-heading">
          <div>
            <p className="section-eyebrow">02 / a cidade em missão</p>
            <h2 className="display-title section-title">Sua próxima<br /><em>descoberta</em> está<br />no caminho.</h2>
          </div>
          <div className="map-heading__aside">
            <Compass size={28} />
            <p>Quatro bairros, centenas de histórias e um mapa que convida você a sair andando.</p>
          </div>
        </div>

        <div className="mission-map">
          <img src={map} alt="Ilustração do Centro do Recife como mapa de exploração" />
          <div className="map-topbar" aria-hidden="true">
            <span><Navigation size={15} fill="currentColor" /> trilha urbana</span>
            <span>04 bairros ativos</span>
          </div>
          {missions.map((mission) => (
            <div className={`map-pin ${mission.position}`} key={mission.area}>
              <span className="map-pin__dot"><MapPin size={15} fill="currentColor" /></span>
              <div className="map-pin__label">
                <strong>{mission.area}</strong>
                <span>{mission.task} <b>{mission.xp}</b></span>
              </div>
            </div>
          ))}
          <span className="map-expand" aria-label="Mais pontos no mapa">
            <Plus size={21} />
          </span>
        </div>

        <div className="map-caption">
          <span className="map-caption__arrow">↘</span>
          <p><strong>Não é só chegar.</strong> É saber onde olhar, com quem conversar e o que levar com você.</p>
          <a href="#experiencias" className="text-link">Descobrir experiências <span>↘</span></a>
        </div>
      </div>
    </section>
  );
}
