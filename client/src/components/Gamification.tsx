import {
  BadgeCheck,
  ChevronRight,
  Crown,
  MapPin,
  Sparkles,
  Ticket,
  Trophy,
} from "lucide-react";
import sampleVideo from "../../assets/video/sample.mp4";

export default function Gamification() {
  return (
    <section className="game-section">
      <div className="page-frame game-layout">
        <div className="game-copy">
          <p className="section-eyebrow section-eyebrow--orange">
            03 / seus passos contam
          </p>
          <h2 className="display-title section-title section-title--light">
            De cada passo,
            <br />
            uma <em>conquista.</em>
          </h2>
          <p>
            A cidade responde ao seu caminho. Check-ins viram XP, XP libera
            conquistas e suas conquistas abrem vantagens para continuar
            explorando.
          </p>
          <div className="game-proof">
            <span>
              <BadgeCheck size={18} /> presença real
            </span>
            <span>
              <Ticket size={18} /> benefício real
            </span>
          </div>
        </div>

        <div
          className="game-device"
          aria-label="Exemplo de perfil de explorador no aplicativo PassaAqui"
        >
          <video
            src={"https://s3.harisoncleyton.tech/passaaqui-landing/sample.mp4"}
            controls
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
    </section>
  );
}
