import { useLanguage } from "../contexts/LanguageContext";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const { t } = useLanguage();

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-300 dark:bg-gray-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-400 dark:bg-gray-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gray-200 dark:bg-gray-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto mt-5 px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <p className="text-lg md:text-xl lg:text-4xl text-gray-600 dark:text-gray-400 mb-4">
              {t("hero.greeting")}
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-6 bg-linear-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent animate-gradient">
              William Salcedo L
            </h1>
            <h2 className="text-1xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
              {t("hero.title")}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              {t("hero.subtitle")}
            </p>
            <button
              onClick={scrollToProjects}
              className="group w-35 h-10 md:w-45 md:h-15 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:scale-105 transition-transform shadow-lg hover:shadow-xl text-sm md:text-lg"
            >
              {t("hero.cta")}
              <ChevronDown className="inline-block ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 md:bottom-30 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gray-400 dark:text-gray-600" />
      </div>
    </section>
  );
}
