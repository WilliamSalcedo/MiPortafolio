import { Moon, Sun, Globe } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();


  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-blue-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors w-full h-15  ">
      <div className="flex justify-between mx-10 items-center h-full">
        <div className="text-sm md:text-xl lg:text-4xl xl:text-3xl font-bold bg-linear-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
          Portafolio
        </div>
        <div className="hidden md:flex items-center gap-6" >
          <button
            onClick={() => scrollToSection("about")}
            className="sm:text-sm md:text-md lg:text-lg xl:text-2xl text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-2xl">
            {t("nav.about")}
          </button>
          
          <button
            onClick={() => scrollToSection("skills")}
            className="sm:text-sm md:text-md lg:text-lg xl:text-2xl text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-2xl mx-10">
            {t("nav.skill")}
          </button>
					<button onClick={() => scrollToSection("projects")} className=" sm:text-sm md:text-md lg:text-lg xl:text-2xl text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-2xl mr-10">
						{t('nav.projects')}
					</button>
					<button onClick={() => scrollToSection("contact")} className=" sm:text-sm md:text-md lg:text-lg xl:text-2xl text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-2xl">
						{t('nav.contact')}
					</button>
					<div>
						
					</div>
					
        </div>
				<div className="flex ">
					<button
              onClick={toggleLanguage}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors  flex grow"
              aria-label="Toggle language"
            >
              <Globe className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              <span className="ml-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                {language.toUpperCase()}
              </span>
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Moon className="w-5 h-5 text-gray-400" />
              ) : (
                <Sun className="w-5 h-5 text-gray-300" />
              )}
            </button>
				</div>
      </div>
    </header>
  );
}
