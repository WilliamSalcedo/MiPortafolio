import { ExternalLink } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import ghostPlay from "../assets/ghostPlay.png";
import verly from "../assets/verlyOptical.png";
import womenLogo from "../assets/womenLogo.png";
import GithubIcon from "./icons/GitHub";

export default function Projects() {
  const { t, language } = useLanguage();

  const projects = [
    {
      title: "Ghost Play",
      description:
        "Página web en desarrollo  con React y MongoDB con el objetivo de unir a la comunidad gamer. La plataforma cuenta con foros de discusión, guías para videojuegos y una sección de contenido visual.",
      descriptionEn:
        "Web application in developed with React and MongoDB aimed at bringing the gaming community together. The platform features discussion forums, videogame guides, and visual content sections. Additional features focused on enhancing user interaction are planned for future releases.",
      image: ghostPlay,
      tags: ["React", "TypeScript", "Zustand"],
      demo: "https://ghostplay1.netlify.app/",
      code: "https://github.com/WilliamSalcedo/ghostPlayer.git",
    },
    {
      title: "Verly Optical",
      description:
        "Sitio web desarrollado para una óptica, donde participé en la integración de la base de datos para implementar el sistema de autenticación de usuarios. Además, realicé mejoras en la interfaz y estilos visuales con el objetivo de optimizar la experiencia de usuario.",
      descriptionEn:
        "Website developed for an optical store, where I contributed by integrating the database to implement the user authentication system. Additionally, I made improvements to the interface and visual styles to enhance the overall user experience.",
      image: verly,
      tags: ["React", "Supabase", "Tailwind"],
      demo: "#",
      code: "#",
    },
    {
      title: "The Women Who Made Us",
      description:
        "Página web para un musical orientada al registro de personas interesadas, con el objetivo de mantenerlas informadas sobre novedades y próximos lanzamientos. Actualmente, se encuentra en desarrollo una automatización de correos para el envío de actualizaciones y notificaciones.",
      descriptionEn:
        "Website for a musical focused on registering interested users to keep them up to date with news and upcoming releases. An email automation system for notifications and updates is currently under development.",
      image: womenLogo,
      tags: ["React", "Supabase", "Tailwind"],
      demo: "https://thewomenwhomadeus.com/",
      code: "https://github.com/WilliamSalcedo/the-women-who-made-us.git",
    },
  ];

  return (
    <div id="projects" className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-5 text-gray-900 dark:text-white mt-15">
          {t("projects.title")}
        </h2>
        <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-20" />

        <div className="grid md:grid-cols-2 gap-8 mb-15">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-4">
                  <a
                    href={project.demo}
                    target="blank"
                    className="p-3 bg-white text-gray-900 rounded-full hover:scale-110 transition-transform"
                    aria-label="View demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.code}
                    target="blank"
                    className="p-3 bg-white text-gray-900 rounded-full hover:scale-110 transition-transform"
                    aria-label="View code"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {language === "es"
                    ? project.description
                    : project.descriptionEn}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
