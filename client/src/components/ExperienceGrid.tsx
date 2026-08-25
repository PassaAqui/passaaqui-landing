/**
 * Design reminder — PassaAqui: vitrine de experiências com contraste editorial, fotografia
 * cultural autêntica e categorias em cartões que lembram placas urbanas e desafios de jogo.
 */

import {
  ArrowUpRight,
  Landmark,
  Palette,
  ShoppingBasket,
  UtensilsCrossed,
  VenetianMask,
} from "lucide-react";
import experiencesImage from "../../assets/experience/experiences.webp";

const experiences = [
  {
    title: "Patrimônio",
    detail: "Prédios, praças e histórias que seguem em pé.",
    icon: Landmark,
    tone: "experience-card--ivory",
    number: "01",
  },
  {
    title: "Artesanato",
    detail: "Quem faz com a mão deixa parte de si em cada peça.",
    icon: Palette,
    tone: "experience-card--orange",
    number: "02",
  },
  {
    title: "Comércio local",
    detail: "A cidade que se encontra nas vitrines e nas conversas.",
    icon: ShoppingBasket,
    tone: "experience-card--navy",
    number: "03",
  },
  {
    title: "Gastronomia",
    detail: "Sabores que contam de onde o Recife vem.",
    icon: UtensilsCrossed,
    tone: "experience-card--mustard",
    number: "04",
  },
  {
    title: "Cultura viva",
    detail: "Movimento, música e invenção pelo caminho.",
    icon: VenetianMask,
    tone: "experience-card--blue",
    number: "05",
  },
];

export default function ExperienceGrid() {
  return (
    <section className="experience-section" id="experiencias">
      <div className="page-frame">
        <div className="experience-heading">
          <div>
            <p className="section-eyebrow">04 / o que te espera</p>
            <h2 className="display-title section-title">
              Descubra o que
              <br />o Recife tem de <em>melhor.</em>
            </h2>
          </div>
          <p>Uma cidade feita de camadas. Escolha uma e siga a curiosidade.</p>
        </div>

        <div className="experience-grid">
          <article className="experience-feature">
            <img
              src={experiencesImage}
              alt="Exploradores conhecendo um ateliê e o comércio local do Recife"
            />
            <div className="experience-feature__shade" />
            <div className="experience-feature__content">
              <span>TRILHA EM DESTAQUE</span>
              <h3>
                Da rua ao
                <br />
                <em>ateliê.</em>
              </h3>
              <p>Uma rota para ver o centro com outros olhos.</p>
              <a
                href="#mapa"
                className="round-link focus-ring"
                aria-label="Ver a trilha Da rua ao ateliê"
              >
                <ArrowUpRight size={21} />
              </a>
            </div>
          </article>

          <div className="experience-list">
            {experiences.map(experience => {
              const Icon = experience.icon;
              return (
                <a
                  href="#mapa"
                  className={`experience-card ${experience.tone} focus-ring`}
                  key={experience.title}
                >
                  <span className="experience-card__number">
                    {experience.number}
                  </span>
                  <Icon
                    className="experience-card__icon"
                    size={26}
                    strokeWidth={1.75}
                  />
                  <div>
                    <h3>{experience.title}</h3>
                    <p>{experience.detail}</p>
                  </div>
                  <ArrowUpRight className="experience-card__arrow" size={19} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
