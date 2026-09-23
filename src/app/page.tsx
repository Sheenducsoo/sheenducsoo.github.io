"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

type Profile = "code" | "film";

type TimelineItem = {
  date: string;
  title: string;
  text: string;
  company?: string;
  label?: string;
  mark?: string;
  logo?: string;
  highlights?: readonly string[];
};

const profileContent = {
  code: {
    title: "Diseño sistemas que se sienten simples.",
    description:
      "Frontend, producto y experiencias digitales con una obsesión clara: que lo complejo se vuelva natural.",
    intro: "Como estudiante de último año de Ingeniería Civil Informática, me especializo en traducir problemas complejos en arquitecturas de software eficientes y escalables.\n\nMás allá de escribir código, mi enfoque está en la resolución estratégica: diseño soluciones robustas que optimizan procesos y conectan tecnología con resultados tangibles. Mi visión integral me permite abordar los desafíos técnicos desde la lógica del backend hasta la experiencia final del usuario, asegurando un producto de alto impacto.",
    toolsIntro: "",
    specialties: [
      { title: "Flujos de trabajo automatizados", text: "Conecto herramientas y elimino tareas repetitivas para que los equipos puedan concentrarse en lo importante." },
      { title: "Análisis y soporte TI", text: "Investigo problemas, ordeno procesos y traduzco necesidades técnicas en soluciones accionables." },
    ],
    toolGroups: [
      { title: "Frontend", note: "Interfaces claras y responsivas.", tools: ["React", "TypeScript", "Next.js", "Tailwind CSS"] },
      { title: "Backend & datos", note: "Servicios sólidos e integraciones.", tools: ["Node.js", "PostgreSQL", "Supabase", "MongoDB"] },
      { title: "Soporte & flujo", note: "Orden para trabajar mejor.", tools: ["Git / GitHub", "Automatización", "M365", "GitHub Copilot"] },
    ],
    education: "Ingeniería Civil Informática / Último año de carrera, con formación en desarrollo de software, sistemas y gestión de proyectos tecnológicos.",
    values: ["Resolución de problemas", "Aprendizaje continuo"],
    timeline: [
      { date: "Mayo 2026 — Actualidad", title: "Soporte de TI y mantenimiento de plataforma comercial", label: "Servicios de TI", logo: "/projects/polvotek.png", text: "Aseguro la continuidad operativa de una plataforma automatizada de reportes comerciales, monitoreando el flujo de datos y resolviendo incidencias en tiempo real.", highlights: ["Operatividad de plataforma automatizada", "Monitoreo del flujo de datos", "Resolución de incidencias"] },
      { date: "Diciembre 2025 — Febrero 2026", title: "Practicante de Ingeniería de Software", logo: "/projects/polvotek.png", text: "Diseñé y construí un sistema de extracción de datos que automatizó la generación de reportes comerciales y eliminó el ingreso manual de información.", highlights: ["Automatización completa de reportes", "Menores tiempos de respuesta", "Mayor exactitud de la información"] },
      { date: "Agosto 2024 — Diciembre 2024", title: "Líder de Desarrollo Móvil", label: "Liderazgo técnico", logo: "/projects/sentiment.png", text: "Lideré la construcción de la aplicación móvil Sentiment, coordinando la integración, la arquitectura y las distintas fases de desarrollo hasta lograr un producto funcional.", highlights: ["Coordinación del equipo técnico", "Supervisión de la arquitectura", "Integración cohesionada de módulos"] },
    ],
    projects: [
      { number: "01", title: "Plataforma Web para Reportes comerciales", type: "Automatización", color: "project-coral", company: "AUTOMATIZACIÓN", description: "Landing page y pipeline de automatización para extraer y generar informes de datos operativos, eliminando tareas manuales y mejorando los tiempos y la precisión comercial.", technologies: ["Node.js", "PostgreSQL", "Supabase", "Automatización"], image: "/projects/Reporte-Polvotek.png", url: "#contacto" },
      { number: "02", title: "Plataforma Web Stronger Human Podcast", type: "Desarrollo web", color: "project-blue", company: "DESARROLLO WEB", description: " Diseño y despliegue integral de una plataforma web completa, desde la conceptualización de la arquitectura hasta la implementación final, con navegación intuitiva e infraestructura estable.", technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"], image: "/projects/stronger-human.png", url: "https://strongerhuman.cl" },
    ],
  },
  film: {
    title: "Creo imágenes que dejan una marca.",
    description:
      "Edición, dirección y producción audiovisual para historias con ritmo, intención y una identidad propia.",
    intro: "Sheen Ducso es un productor y director audiovisual especializado en la creación de narrativas visuales de alto impacto.\n\nCon una sólida experiencia en la dirección general de videopodcasts y la producción de contenido digital, transforma conceptos en experiencias inmersivas. Su visión abarca el control total del proyecto: desde la conceptualización creativa y el manejo de equipos de grabación, hasta la edición dinámica y postproducción, garantizando un estándar estético y sonoro profesional.",
    toolsIntro: "",
    specialties: [
      { title: "Dirección y producción", text: "Organizo equipos, recursos y tiempos para que cada escena tenga una intención clara." },
      { title: "Edición con ritmo", text: "Encuentro la estructura de una historia en el montaje, desde el primer corte hasta la versión final." },
    ],
    toolGroups: [
      { title: "Edición", note: "Montaje con ritmo y precisión.", tools: [ "DaVinci Resolve 20" , "Adobe Podcast","VN" ,"Cap Cut"] },
      { title: "Dirección", note: "Herramientas de IA para generacion de Storytelling ", tools: ["Chatgpt", "Claude", "Ganchos Visuales","CTA"] },
      { title: "Producción", note: "Del plan de rodaje al corte final.", tools: ["Preproducción", "Rodaje", "Color", "Sonido"] },
    ],
    education: "Producción audiovisual / Formación práctica en dirección, edición, cámara y construcción de lenguaje visual.",
    values: ["Mirada propia", "Trabajo en equipo", "Aprendizaje continuo"],
    timeline: [
      { date: "Mayo 2025 — Actualidad", title: "Dirección audiovisual del podcast y hosting", logo: "/projects/podcast%20.png", text: "Host del podcast y responsable de la dirección audiovisual de cada episodio, desde la preparación de las grabaciones y la conducción de las conversaciones hasta la construcción de una propuesta visual y sonora coherente." },
      { date: "Diciembre 2025 — Actualidad", title: "Blogs de calistenia en YouTube", company: "Creador de contenido", text: "Creador de contenido de blogs de calistenia para YouTube, principalmente en videos largos que documentan entrenamientos, progresos y experiencias, buscando conectar con la audiencia a través de relatos auténticos y cercanos." },
      { date: "Septiembre 2024 — Actualidad", title: "Creador de contenido", company: "Creador de contenido", text: "Mis inicios como creador de contenido comenzaron con la creación de retos virales para Facebook, Instagram y YouTube. Desde entonces, he ampliado esta experiencia hacia los blogs de calistenia y la producción de videos largos, desarrollando una voz propia frente a la cámara y una forma de contar procesos reales." },
    ],
    projects: [
      { number: "01", title: "Dirección y producción de podcast", type: "Videopodcast", color: "project-violet", company: "DIRECCIÓN AUDIOVISUAL", description: " Liderazgo integral de un formato de entrevistas: dirección de arte, iluminación, audio profesional y edición multicámara para mantener la retención de la audiencia.", technologies: ["DaVinci Resolve 20", "Motion Graphics", "Guiones estructurados", "Audio"], image: "/projects/podcast%20.png", url: "https://www.strongerhuman.cl/podcast" },
      { number: "02", title: "Documentación y vlogs en terreno", type: "Contenido digital", color: "project-green", company: "PRODUCCIÓN VISUAL", description: "Registro de comunidades y eventos en distintas locaciones, adaptando el equipo a entornos impredecibles con storytelling fluido, documentación clara y cortes precisos.", technologies: ["Storytelling", "Documentación", "Rodaje", "Color"], image: "/projects/ProyectoVISUAL.png", url: "#contacto" },
    ],
  },
} as const;

export default function Home() {
  const [profile, setProfile] = useState<Profile>("code");
  const [activeSection, setActiveSection] = useState("inicio");
  const [photoLoaded, setPhotoLoaded] = useState(true);
  const [activeTimeline, setActiveTimeline] = useState(0);
  const content = profileContent[profile];

  useEffect(() => {
    const sections = ["inicio", "sobre-mi", "proyectos", "recorrido", "contacto"];
    const updateActiveSection = () => {
      const activationLine = Math.min(window.innerHeight * 0.3, 220);
      const current = sections
        .map((id) => document.getElementById(id))
        .filter((element): element is HTMLElement => Boolean(element))
        .filter((element) => element.getBoundingClientRect().top <= activationLine)
        .at(-1);
      if (current) setActiveSection(current.id);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    const timelineItems = Array.from(document.querySelectorAll<HTMLElement>(".timeline-item"));
    if (!timelineItems.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = timelineItems.indexOf(entry.target as HTMLElement);
          if (index >= 0) setActiveTimeline(index);
          entry.target.classList.add("is-visible");
        }
      });
    }, { threshold: 0.35, rootMargin: "-10% 0px -25%" });

    timelineItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [profile]);

  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(".scroll-reveal"));
    if (!revealItems.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16, rootMargin: "0px 0px -8%" });

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [profile]);

  return (
    <main className={`site-shell ${profile}`}>
      <nav className="side-nav" aria-label="Navegación de sección">
        <div className="side-nav-list">
          {[{ id: "inicio", label: "Inicio" }, { id: "sobre-mi", label: "Sobre mí" }, { id: "proyectos", label: "Proyectos" }, { id: "recorrido", label: "Recorrido" }, { id: "contacto", label: "Contacto" }].map((item) => (
            <a className={activeSection === item.id ? "active" : ""} href={`#${item.id}`} key={item.id}>
              <b>{item.label}</b>
            </a>
          ))}
        </div>
      </nav>

      <section className="hero" id="inicio">
        <div className="role-switcher" aria-label="Cambiar rol profesional">
          <div className="role-toggle">
            <button className={profile === "code" ? "active" : ""} onClick={() => setProfile("code")}>Ingeniería Civil Informática</button>
            <button className={profile === "film" ? "active" : ""} onClick={() => setProfile("film")}>Productor visual</button>
            <div className="toggle-light" />
          </div>
        </div>
        <div className="hero-copy">
          <h1>Sheen<br /><em>Fernández.</em></h1>
          <p className="hero-description">{content.description}</p>
          <div className="hero-actions"><a className="hero-button primary-button" href="#proyectos">Ver proyectos <span>↗</span></a><a className="hero-button secondary-button" href="#sobre-mi">Conóceme <span>↓</span></a></div>
          <div className="hero-socials" aria-label="Redes sociales">
            <a href="https://www.linkedin.com/in/sheen-fernandez-806b97337/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><svg className="social-icon linkedin-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 8.2A1.7 1.7 0 1 0 6.5 4.8a1.7 1.7 0 0 0 0 3.4ZM5 19.2h3V9.8H5v9.4Zm5 0h3v-5.1c0-1.3.2-2.6 1.9-2.6 1.7 0 1.7 1.5 1.7 2.7v5h3v-5.6c0-2.8-.6-5-3.9-5-1.6 0-2.6.9-3 1.7h-.1V9.8H10v9.4Z" /></svg></a>
            <a href="https://www.instagram.com/__shxxn__ducsxx/" target="_blank" rel="noreferrer" aria-label="Instagram"><svg className="social-icon instagram-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.8" r="1" className="instagram-dot" /></svg></a>
          </div>
        </div>
      </section>

      <section className="intro-section" id="sobre-mi">
        <div className="intro-grid">
          <div className={`intro-photo ${profile === "film" ? "film-profile-photo" : ""}`}><div className={`photo-placeholder ${photoLoaded ? "has-photo" : ""}`}>{photoLoaded ? <img src={profile === "film" ? "/projects/fotoperfil.jpg" : "/profile-photo.jpg"} alt="Retrato de Sheen Fernández" onError={() => setPhotoLoaded(false)} /> : <span>SF</span>}</div></div>
          <div className="intro-copy"><p className="section-label">Acerca de mí</p><p>{content.intro}</p><div className="specialty-grid">{content.specialties.map((specialty) => <article className="specialty-card" key={specialty.title}><h3>{specialty.title}</h3><p>{specialty.text}</p></article>)}</div></div>
        </div>
        <div className="tools-area" id="herramientas"><div className="tools-heading scroll-reveal"><p className="section-label">Mis Herramientas</p><p>{content.toolsIntro}</p></div><div className="tool-groups">{content.toolGroups.map((group, index) => <article className={`tool-group scroll-reveal reveal-delay-${index + 1}`} key={group.title}><h3>{group.title}</h3><p>{group.note}</p><div className="tool-list">{group.tools.map((tool) => <span key={tool}>{tool}</span>)}</div></article>)}</div></div>
      </section>

      <section className="projects-section" id="proyectos">
        <div className="section-heading"><p className="section-label">Proyectos destacados</p><span>Selección de trabajo ↘</span></div>
        <div className="project-list">
          {content.projects.map((project, index) => (
            <article className={`project-row scroll-reveal reveal-delay-${index + 1} ${index % 2 === 1 ? "reverse" : ""}`} key={project.title}>
              <span className="project-number"></span>
              <div className={`project-thumbnail ${project.color}`}><div className="browser-bar"><span className="browser-dots"><i /><i /><i /></span><small>{project.title.toLowerCase().replaceAll(" ", "-")}.com</small></div>{project.image ? <img src={project.image} alt={`Evidencia visual de ${project.title}`} loading="lazy" decoding="async" onError={(event) => { event.currentTarget.style.display = "none"; }} /> : <span>{profile === "code" ? "&lt;/&gt;" : "REC ●"}</span>}</div>
              <div className="project-name"><p className="project-company">{project.company}</p><h3>{project.title}</h3><div className="project-description"><p>{project.description}</p></div><div className="project-tech">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div><a className="project-link" href={project.url} target={project.url.startsWith("http") ? "_blank" : undefined} rel={project.url.startsWith("http") ? "noreferrer" : undefined}>Visitar sitio <span>↗</span></a></div>
            </article>
          ))}
        </div>
      </section>

      <section className="timeline-section" id="recorrido"><div className="section-heading"><p className="section-label">Recorrido</p></div><div className="timeline-list" style={{ "--active-progress": `${activeTimeline * (100 / Math.max(content.timeline.length - 1, 1))}%` } as CSSProperties}>{content.timeline.map((item: TimelineItem, index) => <article className={`timeline-item ${index === activeTimeline ? "is-active" : ""}`} key={item.date}><span className="timeline-node" aria-hidden="true" /><div className="timeline-card"><span className="timeline-date timeline-card-date">{item.date}</span><h3>{item.title}</h3>{(item.logo || item.company) && <div className="timeline-company-row">{item.logo && <img className="company-logo" src={item.logo} alt="Logo de la empresa" loading="lazy" decoding="async" />}{item.company && <div><p className="timeline-company">{item.company}</p><span className="timeline-label">{item.label}</span></div>}</div>}<p className="timeline-description">{item.text}</p>{item.highlights && <div className="timeline-detail"><p className="timeline-detail-label">Logros</p><ul className="timeline-highlights">{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div>}</div></article>)}</div></section>

      {profile === "code" && <section className="values-section" id="formacion"><div className="section-heading academic-heading"><p className="section-label">Formación académica</p></div><div className="academic-cards"><article className="academic-card education-card"><div className="university-heading"><div className="university-logo"><img src="/projects/UAutonoma.png" alt="Logo de la Universidad Autónoma de Chile" /></div><div className="university-copy"><h2>Universidad Autónoma de Chile</h2><p className="academic-degree">Ingeniería Civil Informática</p><p className="academic-card-label">Marzo 2022 — Marzo 2027(Actualidad)</p><p>Formación integral en desarrollo web, gestión de proyectos tecnológicos y ciencias de la computación, con participación activa en proyectos académicos y grupos de estudio.</p></div></div></article><article className="academic-card values-card"><h3 className="values-card-title"><span aria-hidden="true">✓</span>Enfoques y valores</h3><div className="academic-value"><h3>Resolución de problemas</h3><p>Mentalidad estructurada y diagnóstico metódico para detectar cuellos de botella en software.</p></div><div className="academic-value"><h3>Gestión de proyectos</h3><p>Levantamiento de requerimientos, diseño, análisis y desarrollo con gobernanza desde el inicio hasta el final.</p></div><div className="academic-value"><h3>Aprendizaje continuo</h3><p>Exploración proactiva y entusiasta de nuevas herramientas, ideas y formas de construir mejor.</p></div></article></div></section>}

      <footer id="contacto"><div><p className="section-label contact-label">Contacto</p><h2 className="contact-heading">{profile === "code" ? <>¿Hablemos de tu<br /><em>próximo proyecto?</em></> : <>Hagamos algo<br /><em>que se recuerde.</em></>}</h2><p className="footer-cta">{profile === "code" ? "Construyamos una solución clara, sólida y preparada para crecer." : "Convirtamos una idea en una experiencia audiovisual con intención."}</p><div className="social-links"><a href="https://www.linkedin.com/in/sheen-fernandez-806b97337/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a><a href="https://www.instagram.com/__shxxn__ducsxx/" target="_blank" rel="noreferrer">Instagram <span>↗</span></a></div></div><p className="footer-note">© 2026 Sheen Fernández</p></footer>
    </main>
  );
}
