/**
 * Design reminder — PassaAqui: o fechamento retoma a capa com Recife noturno, navy profundo,
 * laranja luminoso e uma chamada curta que transforma a energia da cidade em convite de ação.
 */

import { ArrowDownRight, Instagram, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import BrandMark from "./BrandMark";

export default function FinalCTA() {
  return (
    <>
      <section className="final-section">
        <div className="final-image" aria-hidden="true" />
        <div className="final-overlay" aria-hidden="true" />
        <div className="page-frame final-content">
          <p className="section-eyebrow section-eyebrow--orange">
            A cidade está chamando
          </p>
          <h2 className="display-title final-title">
            Pronto para passar
            <br />
            por Recife de um
            <br />
            jeito <em>diferente?</em>
          </h2>
          <p>Sua próxima aventura começa aqui.</p>
          <div className="hero-actions">
            <Button asChild className="button-primary button-large">
              <a href="#jornada">
                Explorar Recife <ArrowDownRight size={19} />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="button-ghost button-large"
            >
              <a href="#comerciantes">Sou comerciante</a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-frame footer-main">
          <div>
            <BrandMark invert />
            <p>Transforme a cidade em uma aventura.</p>
          </div>
          <div className="footer-meta">
            <span>Equipe Harison, Kauã, Wandersson e William</span>
            <span>Senac Paulista — 2026</span>
          </div>
          <div className="social-links" aria-label="Redes sociais do projeto">
            <span title="Instagram ainda não informado">
              <Instagram size={18} />
            </span>
            <span title="GitHub ainda não informado">
              <Github size={18} />
            </span>
            <span title="LinkedIn ainda não informado">
              <Linkedin size={18} />
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
