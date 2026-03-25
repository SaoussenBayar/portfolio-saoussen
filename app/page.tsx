export default function Home() {
  const projects = [
    {
      title: "Application Mobile Bien-Être",
      subtitle: "Flutter • Firebase • UX Mobile",
      description:
        "Application mobile dédiée au bien-être et au sommeil, avec une expérience immersive, une interface apaisante et une navigation pensée pour l’utilisateur.",
      image: "/images/bien-etre.png",
      tags: ["Flutter", "Firebase", "UI Design", "Mobile"],
    },
    {
      title: "Plateforme Parent & Enfant",
      subtitle: "UI/UX • Web Design",
      description:
        "Conception d’une interface chaleureuse et intuitive pour accompagner les parents avec contenus, activités, espace communautaire et conseils pratiques.",
      image: "/images/parent-enfant.png",
      tags: ["Figma", "UX/UI", "Responsive", "Design"],
    },
    {
      title: "Interfaces Mobiles & Marketplace",
      subtitle: "Figma • Prototype • Product Design",
      description:
        "Création de plusieurs écrans mobiles : messagerie, panier, fiche service, onboarding et expériences e-commerce avec une approche claire et moderne.",
      image: "/images/ui-mobile.png",
      tags: ["Figma", "Prototype", "Mobile UI", "Product"],
    },
  ];

  const skills = [
    "Symfony",
    "Angular",
    "Flutter",
    "Firebase",
    "PHP",
    "TypeScript",
    "JavaScript",
    "MySQL",
    "MongoDB",
    "Docker",
    "GitHub",
    "Figma",
  ];

  return (
    <main className="min-h-screen bg-[#0f1020] text-white">
      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10">
        <nav className="mb-16 flex items-center justify-between">
          <div>
            <p className="text-lg font-semibold tracking-wide">Saoussen Rzig</p>
            <p className="text-sm text-white/60">Développeuse Full-Stack & Mobile</p>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-white/20 px-5 py-2 text-sm transition hover:bg-white hover:text-black"
          >
            Me contacter
          </a>
        </nav>

        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-4 inline-block rounded-full border border-[#ffd86b]/30 bg-[#ffd86b]/10 px-4 py-1 text-sm text-[#ffd86b]">
              Disponible pour opportunités & freelance
            </p>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              Je conçois et développe des applications
              <span className="text-[#ffd86b]"> web et mobiles </span>
              modernes, utiles et élégantes.
            </h1>

            <p className="mb-8 max-w-xl text-base leading-7 text-white/70 md:text-lg">
              Développeuse full-stack junior avec une spécialisation en Symfony,
              Angular et Flutter. J’aime créer des interfaces belles, fluides
              et centrées sur l’utilisateur, du prototype au produit final.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projets"
                className="rounded-full bg-[#ffd86b] px-6 py-3 font-semibold text-black transition hover:scale-[1.02]"
              >
                Voir mes projets
              </a>

              <a
                href="https://github.com/SaoussenBayar"
                target="_blank"
                className="rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:bg-white hover:text-black"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[32px] bg-[#6c4df6] blur-3xl opacity-20" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur">
              <img
                src="/images/bien-etre.png"
                alt="Projet application bien-être"
                className="h-auto w-full rounded-[24px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10">
        <div className="grid gap-6 rounded-[32px] border border-white/10 bg-white/5 p-8 md:grid-cols-3">
          <div>
            <p className="text-3xl font-bold text-[#ffd86b]">3+</p>
            <p className="mt-2 text-white/70">Projets concrets en web, mobile et design UI</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#ffd86b]">1</p>
            <p className="mt-2 text-white/70">Application mobile publiée sur Google Play</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#ffd86b]">Full Stack</p>
            <p className="mt-2 text-white/70">
              De la conception UX/UI jusqu’au développement et au déploiement
            </p>
          </div>
        </div>
      </section>

      <section id="projets" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="mb-12">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#ffd86b]">
            Portfolio
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">Mes projets</h2>
          <p className="mt-4 max-w-2xl text-white/70">
            Voici quelques réalisations qui montrent mon univers visuel, ma capacité
            à construire des interfaces modernes et mon approche orientée utilisateur.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="grid items-center gap-8 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-xl md:grid-cols-2"
            >
              <div className={`${index % 2 !== 0 ? "md:order-2" : ""}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded-[24px] border border-white/10 object-cover"
                />
              </div>

              <div className={`${index % 2 !== 0 ? "md:order-1" : ""}`}>
                <p className="mb-3 text-sm font-medium text-[#ffd86b]">
                  {project.subtitle}
                </p>
                <h3 className="mb-4 text-2xl font-bold md:text-3xl">
                  {project.title}
                </h3>
                <p className="mb-6 leading-7 text-white/70">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="rounded-full bg-white px-5 py-3 font-semibold text-black transition hover:scale-[1.02]">
                  Voir le projet
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#ffd86b]">
              À propos
            </p>
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Un profil hybride entre data, design et développement
            </h2>
            <p className="mb-4 leading-7 text-white/70">
              Je suis développeuse full-stack junior avec une formation certifiée
              en conception et développement d’applications, ainsi qu’un parcours
              d’ingénieure en statistique et analyse de l’information.
            </p>
            <p className="leading-7 text-white/70">
              Cette double compétence me permet d’avoir une vision à la fois
              technique, produit et utilisateur. J’aime transformer une idée
              en interface claire, moderne et fonctionnelle.
            </p>
          </div>

          <div>
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
              <h3 className="mb-6 text-2xl font-semibold">Stack & outils</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-white/10 px-4 py-2 text-sm text-white/90"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="rounded-[32px] border border-white/10 bg-gradient-to-r from-[#6c4df6] to-[#1f203f] p-8 md:p-12">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#ffd86b]">
            Contact
          </p>
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            Discutons de votre projet
          </h2>
          <p className="mb-8 max-w-2xl text-white/80">
            Je suis ouverte aux opportunités en développement web, mobile,
            intégration front-end et création d’interfaces modernes.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:saoussenbayar@gmail.com"
              className="rounded-full bg-[#ffd86b] px-6 py-3 font-semibold text-black"
            >
              saoussenbayar@gmail.com
            </a>

            <a
              href="https://linkedin.com/in/saoussenRZIG"
              target="_blank"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:bg-white hover:text-black"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/SaoussenBayar"
              target="_blank"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:bg-white hover:text-black"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}