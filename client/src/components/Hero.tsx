/**
 * Design reminder — PassaAqui: hero cinematográfico, assimétrico, com Recife noturno,
 * grande tipografia modular e sinais discretos de rota. O texto deve respirar sobre azul-marinho.
 */

import { ArrowDownRight, Play, Route, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import BrandMark from "./BrandMark";

const navigation = [
  ["A jornada", "#jornada"],
  ["No mapa", "#mapa"],
  ["Para a cidade", "#impacto"],
];

export default function Hero() {
  return (
    <section className="hero-shell" id="inicio">
      <div className="hero-image-wrapper" aria-hidden="true">
        <img
          src="/hero/hero-background.webp"
          alt=""
          className="hero-image"
          fetchPriority="high"
          decoding="async"
        />
      </div>
      <div className="hero-noise" aria-hidden="true" />

      <header className="site-header">
        <a
          href="#inicio"
          className="focus-ring"
          aria-label="PassaAqui, voltar ao início"
        >
          <BrandMark invert />
        </a>

        <nav className="site-nav" aria-label="Navegação principal">
          {navigation.map(([label, href]) => (
            <a key={href} href={href} className="site-nav__link">
              {label}
            </a>
          ))}
        </nav>

        <a href="#comerciantes" className="header-merchant focus-ring">
          Sou comerciante <ArrowDownRight size={16} strokeWidth={2.4} />
        </a>
      </header>

      <div className="hero-content page-frame">
        <div className="hero-copy">
          <p className="hero-overline reveal-two">A cidade não é cenário.</p>
          <h1 className="display-title hero-title reveal-three">
            transforme a <em>cidade</em>
            <br />
            em aventura.
          </h1>
          <p className="hero-summary reveal-four">
            Explore o Centro do Recife, encontre histórias que não cabem no guia
            e transforme cada passo em uma recompensa real.
          </p>
          <div className="hero-actions reveal-five">
            <Button asChild className="button-primary button-large">
              <a href="#jornada">
                Começar aventura <ArrowDownRight size={19} strokeWidth={2.5} />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="button-ghost button-large"
            >
              <a href="#como-funciona">
                <Play size={15} fill="currentColor" /> Como funciona
              </a>
            </Button>
          </div>
        </div>

        <aside
          className="hero-mission-card reveal-six"
          aria-label="Resumo da missão"
        >
          <div className="hero-mission-card__top">
            <Route size={19} />
            <span>rota em destaque</span>
            <span className="hero-mission-card__status">ao vivo</span>
          </div>
          <div className="hero-mission-card__name">Explore todo o Recife</div>
          <div className="hero-mission-card__bottom">
            <span>
              <Sparkles size={14} /> até 450 XP
            </span>
            <span>2.5km / 7km</span>
          </div>
          <div className="mission-progress">
            <span />
          </div>
        </aside>
      </div>

      <div className="hero-footer page-frame" aria-hidden="true">
        <span>arraste para descobrir</span>
        <div className="scroll-glyph">
          <span />
        </div>
        <span>RECIFE // BRASIL</span>
      </div>
    </section>
  );
}
