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
        "Réalisation complète d’une plateforme dédiée aux parents et aux enfants, depuis l’analyse du besoin jusqu’au développement et à la mise en production. J’ai assuré la conception fonctionnelle, le design UI/UX, le développement ainsi que la mise en place d’un processus CI/CD pour une livraison fluide et structurée.",
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

  const services = [
    {
      title: "Développement web",
      description:
        "Création d’applications web modernes, responsive et structurées, avec une attention particulière portée à la performance et à l’expérience utilisateur.",
    },
    {
      title: "Développement mobile",
      description:
        "Conception et développement d’applications mobiles Flutter avec interfaces fluides, navigation intuitive et logique produit claire.",
    },
    {
      title: "UI/UX Design",
      description:
        "Conception de maquettes, prototypes et parcours utilisateur pour transformer une idée en interface claire, élégante et efficace.",
    },
    {
      title: "Intégration & CI/CD",
      description:
        "Mise en place d’un flux de travail propre avec Git, intégration continue et déploiement pour livrer les projets de façon fiable.",
    },
  ];

  const experiences = [
    {
      title: "Freelance – Designer UI/UX & Développeuse Mobile",
      period: "2025 – Présent",
      description:
        "Conception de maquettes UI/UX, développement d’applications Flutter et gestion complète du cycle de vie produit.",
    },
    {
      title: "Data Analyst",
      period: "2017 – 2022",
      description:
        "Analyse statistique, traitement de données, automatisation et création d’outils de collecte et de nettoyage de données.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0f1f] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0f1f]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <a href="#" className="text-lg font-semibold tracking-wide">
            Saoussen Rzig
          </a>

          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#projets" className="transition hover:text-white">
              Projets
            </a>
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#apropos" className="transition hover:text-white">
              À propos
            </a>
            <a href="#experience" className="transition hover:text-white">
              Expérience
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-[#ffd86b] px-5 py-2.5 text-sm font-semibold text-black transition hover:scale-[1.03]"
          >
            Me contacter
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,77,246,0.35),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(255,216,107,0.18),transparent_25%),linear-gradient(to_bottom,#0a0f1f,#111831)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-2 md:px-10 md:py-28">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-[#ffd86b]/20 bg-[#ffd86b]/10 px-4 py-2 text-sm text-[#ffd86b]">
              Développeuse Full-Stack • Web • Mobile • UI/UX
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Je transforme des idées en
              <span className="text-[#ffd86b]"> produits digitaux </span>
              modernes, utiles et élégants.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Développeuse full-stack junior, j’interviens sur tout le cycle de vie
              d’un projet : analyse, conception, design UI/UX, développement,
              intégration et déploiement.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projets"
                className="rounded-full bg-[#ffd86b] px-6 py-3 font-semibold text-black shadow-lg transition hover:scale-[1.03]"
              >
                Voir mes projets
              </a>

              <a
                href="/cv/CV_Saoussen_Rzig_PREMIUM.pdf"
                download
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold transition hover:bg-white hover:text-black"
              >
                Télécharger mon CV
              </a>

              <a
                href="/cv/CV_Saoussen_Rzig_PREMIUM.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold transition hover:bg-white hover:text-black"
              >
                Voir mon CV
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/65">
              <span>Symfony</span>
              <span>Angular</span>
              <span>Flutter</span>
              <span>Firebase</span>
              <span>Figma</span>
              <span>CI/CD</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-6 rounded-[40px] bg-[#6c4df6]/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur">
              <img
                src="/images/saoussen.png"
                alt="Photo de Saoussen Rzig"
                className="h-[520px] w-full rounded-[24px] object-cover object-center"
              />
            </div>

            <div className="absolute -bottom-6 left-1/2 w-[85%] -translate-x-1/2 rounded-[24px] border border-white/10 bg-[#111831]/90 p-5 shadow-xl backdrop-blur">
              <p className="text-lg font-semibold">Saoussen Rzig</p>
              <p className="mt-1 text-sm text-white/70">
                Développeuse Full-Stack & Mobile
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/85">
                  Symfony
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/85">
                  Angular
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/85">
                  Flutter
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10">
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
            Des projets qui montrent ma capacité à construire un produit de bout en bout,
            avec un soin particulier pour l’esthétique, l’expérience utilisateur et la qualité technique.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="grid items-center gap-8 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white/20 md:grid-cols-2 md:p-8"
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
                      className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/85"
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

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="mb-12">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#ffd86b]">
            Services
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">Ce que je peux réaliser</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#ffd86b]/30"
            >
              <h3 className="mb-4 text-xl font-semibold">{service.title}</h3>
              <p className="leading-7 text-white/70">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="apropos" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
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

      <section id="experience" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="mb-12">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#ffd86b]">
            Expérience
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">Mon parcours</h2>
        </div>

        <div className="grid gap-6">
          {experiences.map((experience) => (
            <div
              key={experience.title}
              className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{experience.title}</h3>
                  <p className="mt-3 max-w-3xl leading-7 text-white/70">
                    {experience.description}
                  </p>
                </div>
                <span className="rounded-full border border-[#ffd86b]/20 bg-[#ffd86b]/10 px-4 py-2 text-sm text-[#ffd86b]">
                  {experience.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-r from-[#6c4df6] via-[#2d316d] to-[#111831] p-8 shadow-2xl md:p-12">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#ffd86b]">
            Contact
          </p>

          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            Discutons de votre projet
          </h2>

          <p className="mb-8 max-w-2xl text-lg leading-8 text-white/80">
            Je suis ouverte aux opportunités en développement web, mobile,
            front-end, UI/UX et projets digitaux modernes.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:saoussenbayar@gmail.com"
              className="rounded-full bg-[#ffd86b] px-6 py-3 font-semibold text-black transition hover:scale-[1.03]"
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

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-white/50 md:flex-row md:items-center md:justify-between md:px-10">
          <p>© 2026 Saoussen Rzig. Tous droits réservés.</p>
          <p>Portfolio développé avec Next.js & Tailwind CSS.</p>
        </div>
      </footer>
    </main>
  );
}