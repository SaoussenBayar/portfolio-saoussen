export default function Home() {
  const projects = [
    {
      title: "Application Mobile Bien-Être",
      subtitle: "Flutter • Firebase • Expérience mobile immersive",
      description:
        "Développement d’une application mobile dédiée au bien-être et au sommeil, avec une interface immersive, une navigation fluide et une expérience pensée pour apaiser l’utilisateur. Publication sur Google Play Store.",
      image: "/images/bien-etre.png",
      tags: ["Flutter", "Firebase", "Mobile", "UX", "Google Play"],
    },
    {
      title: "Plateforme Parent & Enfant",
      subtitle: "Projet complet de bout en bout",
      description:
        "Réalisation complète d’une plateforme dédiée aux parents et aux enfants, depuis l’analyse du besoin jusqu’au développement et à la mise en production. J’ai assuré la conception fonctionnelle, le design UI/UX, le développement de l’interface ainsi que la mise en place d’un processus CI/CD pour une livraison fluide et structurée.",
      image: "/images/parent-enfant.png",
      tags: ["Conception", "UI/UX", "Développement", "CI/CD", "Web"],
    },
    {
      title: "UI Mobile & Parcours Utilisateur",
      subtitle: "Figma • Interfaces modernes • Product design",
      description:
        "Création de plusieurs interfaces mobiles modernes : messagerie, panier, fiche service, onboarding et écrans e-commerce. Travail centré sur la clarté, l’esthétique visuelle et la fluidité du parcours utilisateur.",
      image: "/images/ui-mobile.png",
      tags: ["Figma", "Prototype", "UI Mobile", "Design System"],
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
    "Git",
    "GitHub",
    "Jenkins",
    "SonarQube",
    "Figma",
  ];

  return (
    <main className="min-h-screen bg-[#0b1020] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,77,246,0.28),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(255,216,107,0.16),transparent_25%),linear-gradient(to_bottom,#0b1020,#111831)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-8 md:px-10 md:py-10">
          <nav className="mb-16 flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold tracking-wide">Saoussen Rzig</p>
              <p className="text-sm text-white/60">
                Développeuse Full-Stack • Web • Mobile
              </p>
            </div>

            <a
              href="#contact"
              className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium backdrop-blur transition hover:bg-white hover:text-black"
            >
              Me contacter
            </a>
          </nav>

          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-[#ffd86b]/20 bg-[#ffd86b]/10 px-4 py-2 text-sm text-[#ffd86b]">
                Disponible pour opportunités, freelance et alternance
              </p>

              <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
                Je conçois et développe des
                <span className="text-[#ffd86b]"> applications web et mobiles </span>
                modernes, utiles et élégantes.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
                Développeuse full-stack junior, j’interviens sur tout le cycle de vie
                d’un projet : analyse du besoin, conception, design UI/UX,
                développement, intégration et déploiement.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projets"
                  className="rounded-full bg-[#ffd86b] px-6 py-3 font-semibold text-black shadow-lg transition hover:scale-[1.02]"
                >
                  Voir mes projets
                </a>

                <a
                  href="https://github.com/SaoussenBayar"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold transition hover:bg-white hover:text-black"
                >
                  GitHub
                </a>

                <a
                  href="https://linkedin.com/in/saoussenRZIG"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold transition hover:bg-white hover:text-black"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[38px] bg-[#6c4df6]/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur">
                <img
                  src="/images/bien-etre.png"
                  alt="Projet bien-être"
                  className="w-full rounded-[24px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <p className="text-3xl font-bold text-[#ffd86b]">3+</p>
            <p className="mt-3 leading-7 text-white/70">
              Projets concrets en web, mobile, UX/UI et conception produit.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <p className="text-3xl font-bold text-[#ffd86b]">De A à Z</p>
            <p className="mt-3 leading-7 text-white/70">
              Analyse, conception, design, développement, intégration et déploiement.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <p className="text-3xl font-bold text-[#ffd86b]">1 app publiée</p>
            <p className="mt-3 leading-7 text-white/70">
              Application mobile publiée sur Google Play avec une vraie logique produit.
            </p>
          </div>
        </div>
      </section>

      <section id="projets" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="mb-12">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#ffd86b]">
            Portfolio
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">Mes réalisations</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-white/70">
            Voici quelques projets qui illustrent ma capacité à intervenir sur un
            produit de bout en bout, avec une attention particulière portée à
            l’expérience utilisateur, à la qualité visuelle et à la solidité technique.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="grid items-center gap-8 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur md:grid-cols-2 md:p-8"
            >
              <div className={index % 2 !== 0 ? "md:order-2" : ""}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded-[24px] border border-white/10 object-cover"
                />
              </div>

              <div className={index % 2 !== 0 ? "md:order-1" : ""}>
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#ffd86b]">
                  {project.subtitle}
                </p>

                <h3 className="mb-4 text-2xl font-bold md:text-3xl">
                  {project.title}
                </h3>

                <p className="mb-6 leading-8 text-white/70">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm text-white/85"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
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
              Un profil hybride entre technique, design et vision produit
            </h2>

            <p className="mb-4 leading-8 text-white/70">
              Développeuse full-stack junior avec une formation certifiée en
              conception et développement d’applications, ainsi qu’un parcours
              d’ingénieure en statistique et analyse de l’information.
            </p>

            <p className="leading-8 text-white/70">
              Cette double compétence me permet d’aborder un projet avec une vision
              à la fois technique, fonctionnelle et utilisateur. J’aime transformer
              une idée en solution claire, moderne, utile et bien structurée.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h3 className="mb-6 text-2xl font-semibold">Compétences & outils</h3>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/90"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-r from-[#6c4df6] via-[#312f73] to-[#111831] p-8 shadow-2xl md:p-12">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#ffd86b]">
            Contact
          </p>

          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            Discutons de votre projet
          </h2>

          <p className="mb-8 max-w-2xl text-lg leading-8 text-white/80">
            Je suis ouverte aux opportunités en développement web, mobile,
            intégration front-end, UI/UX et projets digitaux modernes.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:saoussenbayar@gmail.com"
              className="rounded-full bg-[#ffd86b] px-6 py-3 font-semibold text-black transition hover:scale-[1.02]"
            >
              saoussenbayar@gmail.com
            </a>

            <a
              href="https://linkedin.com/in/saoussenRZIG"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold transition hover:bg-white hover:text-black"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/SaoussenBayar"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold transition hover:bg-white hover:text-black"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}