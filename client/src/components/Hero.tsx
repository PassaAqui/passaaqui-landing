/**
 * Design reminder — PassaAqui: hero cinematográfico, assimétrico, com Recife noturno,
 * grande tipografia modular e sinais discretos de rota. O texto deve respirar sobre azul-marinho.
 */

import { useEffect, useState } from "react";
import { ArrowDownRight, Download, Route, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import BrandMark from "./BrandMark";

const navigation = [
  ["A jornada", "#jornada"],
  ["No mapa", "#mapa"],
  ["Para a cidade", "#impacto"],
];

const GITHUB_APK_DOWNLOAD_URL = "https://github.com/PassaAqui/passaaqui-mobile/releases/download/v1.0.0/passaaqui.apk";

export default function Hero() {
  const [canDownloadApp, setCanDownloadApp] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.navigator) return;

    const ua = window.navigator.userAgent || "";
    const vendor = window.navigator.vendor || "";

    // Detecção de iOS (iPhone, iPad, iPod ou iPadOS no Safari/Mac desktop touch)
    const isIOS =
      /iPad|iPhone|iPod/.test(ua) ||
      (window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);

    // Detecção de Safari: tipicamente contém "Safari" e vendor Apple, mas não contém Chrome, Chromium, CriOS, etc.
    const isSafari =
      /Safari/i.test(ua) &&
      /Apple Computer/i.test(vendor) &&
      !/Chrome|Chromium|CriOS|Edg|OPR|FxiOS/i.test(ua);

    // O botão deve aparecer apenas se for Android ou Web (qualquer OS desktop/android),
    // exceto quando for iOS ou usar Safari.
    if (!isIOS && !isSafari) {
      setCanDownloadApp(true);
    }
  }, []);
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
            {canDownloadApp && (
              <Button
                asChild
                variant="outline"
                className="button-ghost button-large"
              >
                <a
                  href={GITHUB_APK_DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download size={15} /> Baixar app
                </a>
              </Button>
            )}
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
