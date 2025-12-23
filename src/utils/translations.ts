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
            "Soy desarrollador Front-end especializado en React y TypeScript, enfocado en crear interfaces web modernas, responsivas y accesibles. Trabajo con buenas prácticas y componentes reutilizables para desarrollar aplicaciones escalables, mantenibles y centradas en el usuario.",
        "about.subDescription":
            "Me encuentro en constante aprendizaje, explorando nuevas herramientas y tendencias del desarrollo web moderno. Busco formar parte de equipos donde pueda aportar, crecer profesionalmente y participar en la creación de productos digitales con impacto positivo.",
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
            "I am a Front-end Developer specialized in React and TypeScript, focused on building modern, responsive, and accessible web interfaces. I follow best practices and use reusable components to develop scalable, maintainable, and user-centered applications.",
        "about.subDescription":
            "I am constantly learning, exploring new tools and trends in modern web development. I am looking to be part of teams where I can contribute, grow professionally, and help build digital products with a positive impact.",
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
