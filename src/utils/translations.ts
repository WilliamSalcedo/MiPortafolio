export const translations = {
    es: {
        "nav.about": "Sobre Mí",
        "nav.projects": "Proyectos",
        "nav.contact": "Contacto",
        "nav.skill": "Habilidades",

        "hero.greeting": "Hola, soy",
        "hero.title": "Desarrollador Front-End",
        "hero.subtitle": "Creando experiencias digitales innovadoras",
        "hero.cta": "Ver Proyectos",

        "about.title": "Sobre Mí",
        "about.description":
            "Soy un desarrollador front-end apasionado por crear interfaces web modernas, responsivas y accesibles. Me especializo en React y TypeScript.",
        "about.subDescription":
            "Con experiencia en desarrollo web moderno, me enfoco en crear productos digitales que no solo se ven bien, sino que también ofrecen una experiencia excepcional al usuario.",
        "about.frontend": "Front End",
        "about.backend": "Back End",
        "about.library": "Librerías",
        "about.animations": "Animación",
        "projects.title": "Proyectos",
        "projects.viewDemo": "Ver Demo",
        "projects.viewCode": "Ver Código",
        "contact.title": "Conectemos",
        "contact.description": "Estoy disponible para nuevos proyectos y colaboraciones",
        "footer.rights": "Todos los derechos reservados",
        "skills.tools":"Herramientas",
        "skills.frontend":"Frontend",
        "skills.backend":"Backend",
    },

    en: {
        "nav.about": "About",
        "nav.projects": "Projects",
        "nav.contact": "Contact",
        "nav.skill": "Skills",
        "hero.greeting": "Hi, I am",
        "hero.title": "Front-End Developer",
        "hero.subtitle": "Creating innovative digital experiences",
        "hero.cta": "View Projects",
        "about.title": "About Me",
        "about.description":
            "I am a front-end developer passionate about creating modern, responsive, and accessible web interfaces. I specialize in React and TypeScript.",
        "about.subDescription":
            "With experience in modern web development, I focus on creating digital products that not only look great but also deliver an exceptional user experience.",
        "about.frontend": "Front End",
        "about.backend": "Back End",
        "about.library": "Libraries",
        "about.animations": "Animations",
        "projects.title": "Projects",
        "projects.viewDemo": "View Demo",
        "projects.viewCode": "View Code",
        "contact.title": "Let's Connect",
        "contact.description": "I'm available for new projects and collaborations",
        "footer.rights": "All rights reserved",
        "skills.tools":"Tools",
        "skills.frontend":"Frontend",
        "skills.backend":"Backend",

    },
} as const;


export type TranslationKey = keyof typeof translations["es"];
