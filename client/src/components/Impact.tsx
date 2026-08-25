/**
 * Design reminder — PassaAqui: impacto deve ser humano, local e visualmente direto. Três blocos
 * editoriais conectam turista, empreendedor e cidade sem recorrer a métricas ou promessas inventadas.
 */

import {
  ArrowDownRight,
  Building2,
  Map,
  Store,
  UsersRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const pillars = [
  {
    icon: Map,
    audience: "para quem explora",
    title: "Mais cidade em cada passo.",
    body: "Descobertas, roteiros e recompensas para viver o Recife por dentro.",
  },
  {
    icon: Store,
    audience: "para quem cria",
    title: "Mais gente chegando perto.",
    body: "Visibilidade para artesãos, lojas e negócios que fazem o centro acontecer.",
  },
  {
    icon: Building2,
    audience: "para a cidade",
    title: "Mais movimento onde importa.",
    body: "Cultura valorizada e economia local ganhando fôlego para circular.",
  },
];

export default function Impact() {
  return (
    <>
      <section className="impact-section" id="impacto">
        <div className="page-frame">
          <div className="impact-heading">
            <p className="section-eyebrow section-eyebrow--orange">
              05 / o impacto fica
            </p>
            <h2 className="display-title section-title section-title--light">
              Quando você explora,
              <br />a cidade <em>cresce junto.</em>
            </h2>
          </div>
          <div className="impact-grid">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <article className="impact-card" key={pillar.audience}>
                  <span className="impact-card__index">0{index + 1}</span>
                  <Icon
                    className="impact-card__icon"
                    size={31}
                    strokeWidth={1.5}
                  />
                  <span className="impact-card__audience">
                    {pillar.audience}
                  </span>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.body}</p>
                </article>
              );
            })}
          </div>
          <div className="impact-statement">
            <UsersRound size={19} /> tecnologia para conectar pessoas, cultura e
            economia local.
          </div>
        </div>
      </section>

      <section className="merchant-section" id="comerciantes">
        <div className="merchant-pattern" aria-hidden="true" />
        <div className="page-frame merchant-layout">
          <div>
            <p className="section-eyebrow">06 / também é seu mapa</p>
            <h2 className="display-title section-title">
              Seu negócio também
              <br />
              faz parte dessa <em>aventura.</em>
            </h2>
          </div>
          <div className="merchant-main">
            <p className="lead-copy">
              Coloque sua loja no mapa, alcance novos clientes e transforme
              visitantes em consumidores.
            </p>
            <div className="merchant-benefits">
              <span>presença no mapa</span>
              <span>novas trilhas</span>
              <span>vendas pelo app</span>
              <span>visibilidade local</span>
            </div>
            <Button
              className="button-primary merchant-button"
              onClick={() =>
                toast("O cadastro de parceiros está sendo preparado.")
              }
            >
              Quero meu negócio no PassaAqui <ArrowDownRight size={19} />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
