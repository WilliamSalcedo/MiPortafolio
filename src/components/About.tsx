import { useLanguage } from "../contexts/LanguageContext";
import { Code2, Hexagon, Wrench, Sparkles } from "lucide-react";
import { TranslationKey } from "../utils/translations";
import { motion } from "framer-motion";

type Skill = {
  icon: React.ElementType;
  name: TranslationKey;
  color: string;
};

export default function About() {
  const { t } = useLanguage();

  const skills: Skill[] = [
    { icon: Code2, name: "about.frontend", color: "from-blue-500 to-cyan-500" },
    {
      icon: Hexagon,
      name: "about.backend",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Wrench,
      name: "about.library",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Sparkles,
      name: "about.animations",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <section
        id="about"
        className="py-20 bg-white dark:bg-gray-900 transition-colors"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
              {t("about.title")}
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {t("about.description")}
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {t("about.subDescription")}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-gray-200 dark:hover:border-gray-700"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div
                      className={`w-12 h-12 bg-linear-to-br ${skill.color} rounded-lg flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform`}
                    >
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {t(skill.name)}
                    </h3>
                  </div>
                ))}
              </div>  
            </div>
          </div>
        </div>
      </section>
    </motion.section>
  );
}
