import { useLanguage } from "../contexts/LanguageContext";
import { Code2, Server, Wrench } from "lucide-react";
import HtmlIcon from "./icons/Html";
import ReactIcon from "./icons/React";
import type { ComponentType } from "react";
import JavascriptIcon from "./icons/Js";
import TypescriptIcon from "./icons/TypeScript";
import TailwindsIcon from "./icons/Tailwinds";
import SupabaseIcon from "./icons/Supabase";
import NodeJsIcon from "./icons/Node";
import MongoDbIcon from "./icons/Mongodb";
import { TranslationKey } from "../utils/translations";
import GithubIcon from "./icons/GitHub";
import VsCodeIcon from "./icons/VsCode";
import PostmanIcon from "./icons/Postman";
import FigmaIcon from "./icons/Figma";

type SkillIcon = ComponentType<any> | string;

type SkillItem = {
  name: string;
  icon: SkillIcon;
};

type SkillCategory = {
  titleKey: TranslationKey;
  icon: React.ElementType;
  skills: {
    name: string;
    icon: React.ElementType;
  }[];
};

export default function Skills() {
  const { t } = useLanguage();

  const skillCategories: SkillCategory[] = [
    {
      titleKey: "skills.frontend",
      icon: Code2,
      skills: [
        { name: "HTML / CSS", icon: HtmlIcon },
        { name: "JavaScript", icon: JavascriptIcon },
        { name: "React", icon: ReactIcon },
        { name: "TypeScript", icon: TypescriptIcon },
        { name: "Tailwind CSS", icon: TailwindsIcon },
      ],
    },
    {
      titleKey: "skills.backend",
      icon: Server,
      skills: [
        { name: "Node.js", icon: NodeJsIcon },
        { name: "Supabase", icon: SupabaseIcon },
        { name: "MongoDb", icon: MongoDbIcon },
        { name: "Express.js", icon: Server },
      ],
    },
    {
      titleKey: "skills.tools",
      icon: Wrench,
      skills: [
        { name: "GitHub", icon: GithubIcon },
        { name: "VS Code", icon: VsCodeIcon },
        { name: "Postman", icon: PostmanIcon },
        { name: "Figma", icon: FigmaIcon },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-5 text-gray-900 dark:text-white">
            {t("nav.skill")}
          </h2>

          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-20" />

          <div className="grid sm:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const CategoryIcon = category.icon;

              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <CategoryIcon
                      className="text-blue-600 dark:text-blue-400"
                      size={24}
                    />
                    <h3 className="text-gray-900 dark:text-white text-2xl">
                      {t(category.titleKey)}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm cursor-pointer hover:bg-blue-600 hover:dark:bg-blue-500 hover:text-white hover:scale-110 hover:shadow-lg transition-all flex items-center gap-1.5"
                      >
                        {typeof skill.icon === "string" ? (
                          <span className="text-base">{skill.icon}</span>
                        ) : (
                          <skill.icon className="w-5 h-5 lg:w-7 lg:h-7" />
                        )}

                        <span>{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
