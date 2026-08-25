/**
 * Design reminder — PassaAqui: a jornada deve parecer uma missão jogável, usando faixas,
 * módulos angulares e laranja como sinal de progresso sobre superfícies claras e navy.
 */

import { BadgeCheck, MapPinned, ShoppingBag, Trophy } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Explore",
    body: "Abra o mapa e siga uma trilha pelo Centro do Recife.",
    icon: MapPinned,
  },
  {
    number: "02",
    title: "Faça check-in",
    body: "Chegue aos lugares e registre que você passou por ali.",
    icon: BadgeCheck,
  },
  {
    number: "03",
    title: "Ganhe XP",
    body: "Toda descoberta vira pontos e conquista no seu perfil.",
    icon: Trophy,
  },
  {
    number: "04",
    title: "Converta",
    body: "Use suas recompensas para comprar local e retirar na loja.",
    icon: ShoppingBag,
  },
];

export default function Journey() {
  return (
    <>
      <section className="intro-section page-frame" id="jornada">
        <div className="vertical-label">01 / O CONCEITO</div>
        <div className="intro-layout">
          <div>
            <p className="section-eyebrow">não passe pelo Recife</p>
            <h2 className="display-title section-title">
              O Recife é<br />
              <em>o seu jogo.</em>
            </h2>
          </div>
          <div className="intro-copy">
            <p className="lead-copy">
              Em vez de apenas visitar a cidade, explore, descubra e participe
              dela.
            </p>
            <p>
              O PassaAqui transforma a caminhada pelo centro em uma jornada de
              cultura, comércio e recompensas. Cada parada abre uma nova camada
              da cidade.
            </p>
            <a className="text-link" href="#mapa">
              Ver a missão no mapa <span>↘</span>
            </a>
          </div>
        </div>
        <p className="statement-strip">
          <span>não passe pelo Recife.</span> PasseAqui.
        </p>
      </section>

      <section className="journey-section" id="como-funciona">
        <div className="page-frame">
          <div className="journey-heading">
            <p className="section-eyebrow section-eyebrow--orange">
              sua jornada de descoberta
            </p>
            <p>
              Um caminho simples, feito para te tirar da tela e colocar você
              dentro da cidade.
            </p>
          </div>
          <div className="journey-rail">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article className="journey-step" key={step.number}>
                  <div className="journey-step__line">
                    <span>{step.number}</span>
                    <i />
                  </div>
                  <div className="journey-step__icon">
                    <Icon size={24} strokeWidth={1.9} />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                  
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
